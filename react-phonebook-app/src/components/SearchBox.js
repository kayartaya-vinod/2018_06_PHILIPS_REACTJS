// src/components/SearchBox.js

import React, { Component, Fragment } from 'react';

class SearchBox extends Component {
    state = {
        token: ''
    }

    onChangeHandler(e) {
        this.setState({ token: e.target.value });
        this.props.searchAndFilter(this.state.token);
    }
    render() {
        return (
            <Fragment>
                <p className="lead">You are searching for: {this.state.token}</p>
                <input type="search"
                    name="token"
                    onChange={this.onChangeHandler.bind(this)}
                    value={this.state.token}
                    className="form-control" />
            </Fragment>
        );
    }
}

export default SearchBox;