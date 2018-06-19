import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { addContact } from '../actions/contacts';

class AddContact extends Component {
    state = {
        name: '',
        email: '',
        phone: '',
        avatar: ''
    }
    onSubmitHandler(e) {
        e.preventDefault();
        this.props.addContact(this.state);
        console.log(this);
        this.setState({name: '', email: '', phone: '', avatar: ''});
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return <Fragment>
            <div className="alert alert-info text-center">
                <h3>Add new contact</h3>
            </div>
            <form onSubmit={this.onSubmitHandler.bind(this)}
                className="form-horizontal">
                <div className="form-group">
                    <label htmlFor="name" className="control-label col-sm-4">Name</label>
                    <div className="col-sm-8">
                        <input name="name" id="name"
                            value={this.state.name}
                            onChange={this.onChangeHandler.bind(this)}
                            className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="avatar" className="control-label col-sm-4">Profile pic URL</label>
                    <div className="col-sm-8">
                        <input name="avatar" id="avatar"
                            value={this.state.avatar}
                            onChange={this.onChangeHandler.bind(this)}
                            className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="email" className="control-label col-sm-4">Email id</label>
                    <div className="col-sm-8">
                        <input name="email" id="email"
                            value={this.state.email}
                            onChange={this.onChangeHandler.bind(this)}
                            className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <label htmlFor="phone" className="control-label col-sm-4">Phone</label>
                    <div className="col-sm-8">
                        <input name="phone" id="phone"
                            value={this.state.phone}
                            onChange={this.onChangeHandler.bind(this)}
                            className="form-control" />
                    </div>
                </div>

                <div className="form-group">
                    <div className="col-sm-8 col-sm-offset-4">
                        <button className="btn btn-primary">Add contact</button>
                    </div>
                </div>
            </form>
        </Fragment>;
    }
}

// react-redux binding
// binds the copmonent with state+actions
export default connect(null, { addContact })(AddContact);