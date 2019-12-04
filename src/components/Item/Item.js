import React from 'react';
import './Item.css';

const className = require('classnames');

const Item = ({ name, image, types, onClick, id }) => {

    const typesPrimaryClass = types && className(types[0], 'item-types');
    const typesSecondaryClass = types && className(types[1], 'item-types');
    
    return (
        <div onClick={() => onClick(id)} className='container-fluid item-container'>
            <img src={image} alt={name}/>
            <h5 className='item-name'>{name}</h5>
                <div className={'types-container'}>
                    { types && (
                        <div className={typesPrimaryClass}>
                            <span>{types[0]}</span>
                        </div> )
                    }
                    {
                        types && types[1] && (
                            <div className={typesSecondaryClass}>
                                <span>{types[1]}</span>
                            </div>
                        )
                    }
            </div>
        </div>
    )
}

export default Item
