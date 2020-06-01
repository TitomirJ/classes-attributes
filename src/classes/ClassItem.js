import React from 'react';
import { Input } from "antd";
import { DeleteOutlined } from '@ant-design/icons';

class ClassItem extends React.Component{
    state = {
        focus: false,
        newText: ''
    };

    newInputChange = (event) => {
        this.setState({newText: event.target.value});
    };

    handleInputFocus = () => {
        this.setState({ focus: true });
    };

    handleInputBlur = () => {
        this.setState({ focus: false });
        const {updateName, data} = this.props;
        const {newText} = this.state;
        updateName(data.id, newText);
    };

    render() {
        return (
            <div className='classInput'>
                <Input
                    type="text"
                    defaultValue={this.props.data.name}
                    onChange={this.newInputChange}
                    onFocus={this.handleInputFocus}
                    onBlur={this.handleInputBlur}
                />
                <DeleteOutlined className='btn' onClick={() => this.props.deleteClass(this.props.data.id)} />
            </div>
        )
    }
}
export default ClassItem