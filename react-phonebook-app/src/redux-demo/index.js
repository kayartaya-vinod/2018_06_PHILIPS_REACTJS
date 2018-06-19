import { createStore } from 'redux';

// ACTIONS AND ACTION CREATORS
function addName(name) {
    return {
        type: 'ADD_NAME',
        name
    }
}
function removeName(idx) {
    return {
        type: 'REMOVE_NAME',
        index: idx
    }
}

// REDUCER, will be used by REDUX whenever an 'action' is dispatched
// REDUX will supply the state (maintained in the store, if any) and
// the action that you dispatched.
// The return value of this methods is the modified (reduced) version
// of the state, which will now replace the old state in the store

setTimeout(()=>{
    store.dispatch({type: 'SET_INITIAL', data: ['VINOD', 'NAGESH', 'HARISH']})
}, 5000);

function namesReducer(state = [], action = {}) {
    switch (action.type) {
        case 'SET_INITIAL':
            return [...state, ...action.data]
        case 'ADD_NAME':
            return [...state, action.name];
        default:
            return state;
    }
}

// the STORE
const store = createStore(namesReducer);

// STORE SUBSCRIPTION 
// (automatically handled by react-redux bindings in a react application)
store.subscribe(() => {
    let out = '';
    store.getState().forEach(name => out += `<li>${name}</li>`);
    document.getElementById('namesList').innerHTML = out;
});

// dispatch an action on click of the button
let tfName = document.getElementById('tfName');
document.getElementById('btnAddName').onclick = e => {
    if (!tfName.value) return;

    store.dispatch(addName(tfName.value));
    tfName.value = '';
    tfName.focus();
}
