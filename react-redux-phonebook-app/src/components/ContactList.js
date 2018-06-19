import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../actions/contacts';
import ContactCard from './ContactCard';

class ContactList extends Component {

    componentDidMount() {
        this.props.getContacts();
    }

    render() {
        let listItems = this.props.contacts.map(c =>
            <li key={c.id} className="list-group-item">
                <ContactCard contact={c} />
            </li>
        );

        return <Fragment>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <ul className="list-group">
                        {listItems}
                    </ul>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </Fragment>;
    }
}

function mapStoreToProps(store) {
    return {
        contacts: store.contacts
    }
}

// hoc = higher order component
// is always a function that takes a component as param
// and returns same/modified/new component
const hoc = connect(mapStoreToProps, { getContacts });

export default hoc(ContactList);