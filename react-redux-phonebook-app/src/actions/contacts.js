import { GET_CONTACTS, DELETE_CONTACT } from './types';

// ACTION CREATORS
function _getContacts(data) {
    return {
        type: GET_CONTACTS,
        contacts: data
    }
}
function _deleteContact(id) {
    return {
        type: DELETE_CONTACT,
        id
    }
}

// THUNK ACTIONS
const BASE_URL = 'http://localhost:4000/contacts/';

export const getContacts = () => {
    return (dispatch) => {
        // do some async call and then dispatch an action
        fetch(BASE_URL)
            .then(resp => resp.json())
            .then(data => dispatch(_getContacts(data)));
    }
};

export const deleteContact = id => dispatch => {
    fetch(BASE_URL + id, { method: 'delete' })
        .then(() => dispatch(_deleteContact(id)));

};