import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider, connect } from 'react-redux';

import { composeWithDevTools } from 'redux-devtools-extension';

// actions/action creators
function getNames() {
    return {
        type: 'GET_NAMES'
    }
}
function addName(name) {
    return {
        type: 'ADD_NAME',
        name
    }
}

// reducer/s
const initialState = ['Vinod', 'James', 'John'];
function names(state = initialState, action = {}) {
    switch (action.type) {
        case 'GET_NAMES':
            return state;
        case 'ADD_NAME':
            return [...state, action.name];
        default:
            return state;
    }
}

// store
const store = createStore(
    combineReducers({ names }),
    composeWithDevTools()
);

// component #1: ListNames
class _ListNames extends Component {
    state = {}
    componentDidMount() {
        this.props.getNames();
    }
    render() {
        let namesList = this.props.names.map(name => <li>{name}</li>);
        return (
            <ul>
                {namesList}
            </ul>
        );
    }
}
function stateToProps(state) {
    return {
        names: state.names // reducer
    }
}
let ListNames = connect(stateToProps, { getNames })(_ListNames);

// Component #2: AddName
class _AddName extends Component {
    state = { name: '' }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onClickHandler() {
        this.props.addName(this.state.name);
        this.setState({ name: '' });
    }
    render() {
        return (
            <div>
                <label>Enter a name: </label>
                <input name='name' value={this.state.name}
                    onChange={this.onChangeHandler.bind(this)} />
                <button onClick={this.onClickHandler.bind(this)}>Add name</button>
            </div>
        );
    }
}

const AddName = connect(null, { addName })(_AddName);


class App extends Component {
    state = {}
    render() {
        return (
            <div>
                <h1>Redux demo</h1>
                <AddName />
                <ListNames />
            </div>
        );
    }
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,

    document.getElementById('root')
);