import React from 'react';


const handleClick = (props) = (e) => {
    props.onClick(id)
};

function ListItem({
    item: { id, value, completed },
    onClick
}) {
    const styles = {
        ...(completed && { textDecoration: 'line-through' })
    };
    return (
        <li onClick={handleClick(props)} style={styles}>{value}</li>
    );
}
export default ListItem;