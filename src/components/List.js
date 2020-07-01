import React from 'react';
import ListItem from './ListItem';


function List({ items, toggleCompleted }) {
    return (
        <div className="list">
            {items.map((item) =>
                <ListItem onClick={toggleCompleted} key={item.id} item={item} />
            )}
        </div>
    );
}

export default List;