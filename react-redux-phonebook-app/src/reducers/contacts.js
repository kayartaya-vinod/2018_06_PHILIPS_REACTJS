import { GET_CONTACTS, DELETE_CONTACT } from "../actions/types";

export function contacts(state = [], action = {}) {
    switch (action.type) {
        case GET_CONTACTS:
            return action.contacts;
        case DELETE_CONTACT:
            let tmp = [...state];
            let index = tmp.findIndex(c => c.id === action.id);
            tmp.splice(index, 1);
            return tmp;
        default:
            return state;
    }
}