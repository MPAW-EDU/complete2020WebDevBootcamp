
import React from 'react';
import Card from './Card';

const Deck = ({contacts}) => {
    return (
        <div>
            {
                contacts.map( contact => {
                    return (
                        <Card contact={contact} />
                    )
                })
            }
        </div>
    )
}

export default Deck;