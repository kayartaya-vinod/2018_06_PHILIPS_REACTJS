// src/components/ContactCard.js

import React from 'react';

export default ({ contact, deleteContact, whoAmI }) => <div className="row">
    <div className="col-xs-4">
        <img src={contact.avatar} 
            alt={contact.name} className="img img-circle" />
    </div>
    <div className="col-xs-8">
        <h3>{contact.name}

            <button className="btn btn-link pull-right"
                onClick={() => {
                    if (window.confirm('Are you sure to delete this?')) {
                        deleteContact(contact.id);
                    }
                }}>
                <span className="icon icon-trash"></span>
            </button>

        </h3>
        <p>{contact.email}</p>
        <p>{contact.phone}</p>
    </div>
</div>