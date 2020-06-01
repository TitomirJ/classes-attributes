import React from 'react';
import { connect } from "react-redux";
import { Input } from 'antd';
import '../App.css';
import 'antd/dist/antd.css';
import { addAttributeInput, addSubAttributeInput, deleteAttributeInput, editAttributeInput, editSubAttributeInput, deleteSubAttributeInput } from "../redux/actions";
import AttributeItem from "./AttributeItem";
import {PlusSquareOutlined} from "@ant-design/icons";

class Attributes extends React.Component {
    state = {
        text: '',
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };

    inputSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state;
        this.props.addAttributeInput(text);
        if(this.state.text !== ''){
            this.setState({
                text: '',
            })
        }
    };


    deleteAttribute = (name) => {
        this.props.deleteAttributeInput(name)
    }

    deleteSubAttribute = (name, parent) => {
        this.props.deleteSubAttributeInput(name, parent)
    }

    updateAttributeName = (name, newName) => {
        this.props.editAttributeInput(name, newName)
    };

    updateSubAttributeName = (name, newName, parent) => {
        this.props.editSubAttributeInput(name, newName, parent)
    };

    render() {
        const { attributesList = {}, addSubAttributeInput } = this.props;
        return (
            <>
                {
                    Object.keys(attributesList).map((label, i) => {
                        return (
                            <AttributeItem
                                label={label}
                                key={i}
                                attributesList={attributesList}
                                addSubAttributeInput={addSubAttributeInput}
                                deleteAttribute={this.deleteAttribute}
                                deleteSubAttribute={this.deleteSubAttribute}
                                updateAttributeName={this.updateAttributeName}
                                updateSubAttributeName={this.updateSubAttributeName}
                            />
                        )
                    })
                }
                <form onSubmit={this.inputSubmit} className='addAttrInput'>
                    <Input
                        type="text"
                        value={this.state.text}
                        onChange={this.inputChange}
                        placeholder='add attribute'
                    />
                    <button className='btn-Submit'>
                        <PlusSquareOutlined/>
                    </button>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    attributesList: state.reducerAttributes
});

const mapDispatchToProps = (dispatch) => ({
    addAttributeInput: (name) => dispatch(addAttributeInput(name)),
    addSubAttributeInput: (parent, name) => dispatch(addSubAttributeInput(parent, name)),
    deleteAttributeInput: (name) => dispatch(deleteAttributeInput(name)),
    deleteSubAttributeInput: (name, parent) => dispatch(deleteSubAttributeInput(name, parent)),
    editAttributeInput: (name, newName) => dispatch(editAttributeInput(name, newName)),
    editSubAttributeInput: (name, newName, parent) => dispatch(editSubAttributeInput(name, newName, parent))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Attributes);