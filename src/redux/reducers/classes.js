import * as actionTypes from '../types';
import { v4 as uuidv4 } from 'uuid';
const classes = [];

export default function classList(state = classes, action){
    switch (action.type) {

        case actionTypes.ADD_CLASS_INPUT: {
            return [
                ...state,
                { name: action.payload, id: uuidv4() }
            ];
        }

        case actionTypes.EDIT_CLASS_INPUT: {
            return state.map((item) => {
                if (item.id === action.id) {
                    return {
                        ...item,
                        name: action.name
                    };
                }
                return item;
            })
        }

        case actionTypes.DELETE_CLASS_INPUT: {
            return state.filter(classItem => classItem.id !== action.id)
        }

        default: return state;
    }
}