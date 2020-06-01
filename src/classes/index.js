import React from 'react';
import { connect } from 'react-redux';
import { Input } from 'antd';
import { PlusSquareOutlined } from '@ant-design/icons';
import { addClassInput, editClassInput, deleteClassInput } from '../redux/actions'
import ClassItem from "./ClassItem";
import '../App.css';
import 'antd/dist/antd.css';

class Classes extends React.Component {
    state = {
        text: '',
    };

    inputChange = (event) => {
        this.setState({text: event.target.value});
    };

    inputSubmit = (event) => {
        event.preventDefault();
        const { text } = this.state;
        this.props.addClassInput(text);
        if(this.state.text !== ''){
            this.setState({
                text: '',
            })
        }
    };

    updateName = (id, name) => {
        this.props.editClassInput(id, name)
    };

    deleteClass = (id) => {
        this.props.deleteClassInput(id)
    }


    render() {
        const { text } = this.state;
        return (
            <>
                <form>
                    {
                        this.props.classList.map((item, index) =>
                            <ClassItem
                                classList={this.props.classList}
                                updateName={this.updateName}
                                deleteClass={this.deleteClass}
                                data={item}
                                key={item.id}
                            />
                        )
                    }
                </form>
                <form onSubmit={this.inputSubmit}>
                    <div className='addClassInput'>
                        <Input
                            type="text"
                            value={text}
                            onChange={this.inputChange}
                            placeholder='add label'
                        />
                        <button className='btn-Submit'>
                            <PlusSquareOutlined/>
                        </button>
                    </div>
                </form>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    classList: state.reducerClasses
});

const mapDispatchToProps = (dispatch) => ({
    addClassInput: (id) => dispatch(addClassInput(id)),
    editClassInput: (id, newText) => dispatch(editClassInput(id, newText)),
    deleteClassInput: (id) => dispatch(deleteClassInput(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(Classes);