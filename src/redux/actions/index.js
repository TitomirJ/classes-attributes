import * as actionTypes from '../types';

export const addClassInput = (name) => ({
    type: actionTypes.ADD_CLASS_INPUT,
    payload: name
});

export const editClassInput = (id, newText) => ({
    type: actionTypes.EDIT_CLASS_INPUT,
    id: id,
    name: newText
});

export const deleteClassInput = (id) => ({
    type: actionTypes.DELETE_CLASS_INPUT,
    id: id
})

export const addAttributeInput = (name) => ({
    type: actionTypes.ADD_ATTRIBUTE_INPUT,
    payload: name
});

export const addSubAttributeInput = (parent, name) => ({
    type: actionTypes.ADD_SUB_ATTRIBUTE_INPUT,
    parent: parent,
    payload: name
});

export const deleteAttributeInput = (name) => ({
    type: actionTypes.DELETE_ATTRIBUTE_INPUT,
    payload: name
});

export const deleteSubAttributeInput = (name, parent) => ({
    type: actionTypes.DELETE_SUB_ATTRIBUTE_INPUT,
    payload: name,
    parent: parent
});

export const editAttributeInput = (name, newText) => ({
    type: actionTypes.EDIT_ATTRIBUTE_INPUT,
    name: name,
    newName: newText,
});

export const editSubAttributeInput = (name, newText, parent) => ({
    type: actionTypes.EDIT_SUB_ATTRIBUTE_INPUT,
    name: name,
    newName: newText,
    payload: parent
});
