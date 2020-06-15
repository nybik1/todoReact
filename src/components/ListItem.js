import React from 'react';



function ListItem({
    item: { id, value, completed }, onClick
}) {
    const styles = {
        ...(completed && { textDecoration: 'line-through' })
    };
    return (
        <li onClick={() => onClick(id)} style={styles} > {value}</li >
    );
}
export default ListItem;