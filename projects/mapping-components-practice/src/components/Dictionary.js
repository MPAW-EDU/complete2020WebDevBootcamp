
import React from 'react';
import Term from './Term';

const Dictionary = ({page}) => {
    return (
        <dl className="dictionary">
            {
                page.map( term => {
                    return (
                        <Term term={term} key={term.id}/>
                    )
                })
            }
        </dl>
    )
};

export default Dictionary;