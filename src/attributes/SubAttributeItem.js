import React from 'react';
import { Input } from "antd";
import SubAttributeInput from "./SubAttributeInput";
import {PlusSquareOutlined} from "@ant-design/icons";

class SubAttributeItem extends React.Component{
    state = {
        text: '',
        newText: ''
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };

    addInput = (parent) => {
        const { text } = this.state;
        this.props.addSubAttributeInput(parent, text);
    }

    inputSubmit = (event) => {
        event.preventDefault();
        if(this.state.text !== ''){
            this.setState({
                text: '',
            })
        }
    };

    render() {
        const { label } = this.props;
        const { attributesList = {} } = this.props;
        return (
            <div className='subAttributeForm'>
                {
                    Object.keys(attributesList[label]).map((label, i) =>
                        <SubAttributeInput
                            key={i}
                            label={label}
                            parent={this.props.label}
                            updateSubAttributeName={this.props.updateSubAttributeName}
                            deleteSubAttribute={this.props.deleteSubAttribute}
                        />
                    )
                }
                <form onSubmit={this.inputSubmit} className='addSubAttr'>
                    <Input
                        type="text"
                        value={this.state.text}
                        onChange={this.inputChange}
                        placeholder='add sub-attribute'
                    />
                    <button className='btn-Submit' style={{marginLeft: 15}} onClick={() => this.addInput(this.props.label)}>
                        <PlusSquareOutlined/>
                    </button>
                </form>
            </div>
        )
    }
}
export default SubAttributeItem