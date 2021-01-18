import React from 'react';

const Card = ({contact}) => {
    return (
        <div>
            <h2>{contact.name}</h2>
            <img src={`${contact.image}`} alt={`Avatar of ${contact.name}`}/>
            <p>{contact.phone}</p>
            <p>{contact.email}</p>
        </div>
    )
};

export default Card;