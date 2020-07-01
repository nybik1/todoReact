import React from 'react';
import './../ListItem.css';



function ListItem({
    item: { id, value, completed }, onClick
}) {
    const styles = {
        ...(completed && { textDecoration: 'line-through' })
    };
    return (
        <li className="todo-item" onClick={() => onClick(id)} style={styles} > {value}</li >
    );
}
export default ListItem;