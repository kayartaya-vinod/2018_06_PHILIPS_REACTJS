// src/components/ContactCard.js

import React, { Component } from 'react';
import { deleteContact } from '../actions/contacts';
import { connect } from 'react-redux';

class ContactCard extends Component {
    render() {
        let contact = this.props.contact;
        return (
            <div className="row">
                <div className="col-xs-4">
                    <img src={contact.avatar}
                        alt={contact.name} className="img img-circle" />
                </div>
                <div className="col-xs-8">
                    <h3>{contact.name}

                        <button className="btn btn-link pull-right"
                            onClick={() => {
                                if (window.confirm('Are you sure to delete this?')) {
                                    this.props.deleteContact(contact.id);
                                }
                            }}>
                            <span className="icon icon-trash"></span>
                        </button>

                    </h3>
                    <p>{contact.email}</p>
                    <p>{contact.phone}</p>
                </div>
            </div>
        );
    }
}

export default connect(null, { deleteContact })(ContactCard);
