
import React from 'react';
import Card from './Card';

import Contacts from './Contacts';

const Deck = () => {
    // console.log(Contacts);
    return (
        <div>
            {Contacts.map(e => {
                // console.log(e);
                return (
                    <Card contact={e} key={e.email}/>
                )
            })}
        </div>
    )
};

export default Deck;