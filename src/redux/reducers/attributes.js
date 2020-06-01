import * as actionTypes from '../types';
const attributes = {};

export default function attributesList(state = attributes, action){
    switch (action.type) {
        case actionTypes.ADD_ATTRIBUTE_INPUT: {
            return {
                ...state,
                [action.payload]: {

                }
            }
        }

        case actionTypes.ADD_SUB_ATTRIBUTE_INPUT: {
            let obj = Object.fromEntries(
                Object.keys(state[action.parent]).map((key, value) => [key, value = null])
            );

            return {
                ...state,
                [action.parent]: {
                    ...obj,
                    [action.payload]:null
                }
            }
        }

        case actionTypes.DELETE_ATTRIBUTE_INPUT: {
            const prop = action.payload
            const newNames = Object.keys(state).reduce((object, key) => {
                if (key !== prop) {
                    object[key] = state[key]
                }
                return object
            }, {})

            return state = newNames
        }

        case actionTypes.EDIT_ATTRIBUTE_INPUT: {

            let newWordsObject = {};

            Object.keys(state).forEach(key => {
                if (key === action.name) {
                    let newPair = { [action.newName]: state[action.name ] };
                    newWordsObject = { ...newWordsObject, ...newPair }
                } else {
                    newWordsObject = { ...newWordsObject, [key]: state[key] }
                }
            });

            return state = newWordsObject;
        }

        case actionTypes.EDIT_SUB_ATTRIBUTE_INPUT: {
            let newWordsObject = {};

            Object.keys(state[action.payload]).forEach(key => {
                if (key === action.name) {
                    let newPair = { [action.newName]: null};
                    console.log({ ...newWordsObject, ...newPair })
                    newWordsObject = { ...newWordsObject, ...newPair }
                } else {
                    newWordsObject = { ...newWordsObject, [key]: null }
                }
            });

            return {
                ...state,
                [action.payload] : {...newWordsObject}
            }
        }

        case actionTypes.DELETE_SUB_ATTRIBUTE_INPUT: {

            const prop = action.payload

            const newValues = Object.keys(state[action.parent]).reduce((object, key) => {
                if (key !== prop) {
                    object[key] = state[action.parent][key]
                }
                return object
            }, {})

            return {
                ...state,
                [action.parent] : {...newValues}
            }
        }

        default: return state;
    }
}