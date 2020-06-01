import React from 'react';
import { Input } from "antd";
import SubAttributeItem from "./SubAttributeItem";
import { DeleteOutlined } from '@ant-design/icons';

class AttributeItem extends React.Component{
    state = {
        text: this.props.label
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.text !== this.state.text) {
            this.props.updateAttributeName(prevState.text, this.state.text);
        }
    }

    render() {
        return (
            <div className='attrForm'>
                <div className='attributeForm'>
                    <Input
                        type="text"
                        value={this.props.label}
                        onChange={this.inputChange}
                        placeholder='add attribute'
                        name={this.props.label}
                    />
                    <DeleteOutlined className='btn' onClick={() => this.props.deleteAttribute(this.props.label)} />
                </div>
                <SubAttributeItem
                    attributesList={this.props.attributesList}
                    label={this.props.label}
                    addSubAttributeInput={this.props.addSubAttributeInput}
                    updateSubAttributeName={this.props.updateSubAttributeName}
                    deleteSubAttribute={this.props.deleteSubAttribute}
                />
            </div>
        )
    }
}
export default AttributeItem