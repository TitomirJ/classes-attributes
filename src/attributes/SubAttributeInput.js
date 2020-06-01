import React from 'react';
import { Input } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

class SubAttributeInput extends React.Component{
    state = {
        text: this.props.label
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };


    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.text !== this.state.text) {
            this.props.updateSubAttributeName(prevState.text, this.state.text, this.props.parent);
        }
    }

    render() {
        return (
            <div className='attributeInput'>
                <Input
                    type="text"
                    value={this.props.label}
                    onChange={this.inputChange}
                    placeholder='add sub-attribute'
                    name={this.props.label}
                />
                <DeleteOutlined className='btn' onClick={() => this.props.deleteSubAttribute(this.props.label, this.props.parent)} />
            </div>
        )
    }
}
export default SubAttributeInput