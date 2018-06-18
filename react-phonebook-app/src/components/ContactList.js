import React, { Component, Fragment } from 'react';
import ContactCard from './ContactCard';
import SearchBox from './SearchBox';

class ContactList extends Component {

    render() {

        let listItems = this.props.contacts.map(c =>
            <li key={c.id} className="list-group-item">
                <ContactCard {...this.props} contact={c} />
            </li>
        );

        return <Fragment>
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <SearchBox {...this.props} />
                    <ul className="list-group">
                        {listItems}
                    </ul>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </Fragment>;
    }
}

export default ContactList;