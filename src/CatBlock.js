import React from 'react';
import "./CatBlock.css";
import PropTypes from 'prop-types';

function CatBlock({ id, name, photo, likes }) {
    return (
        <div className="CatBlock">
            <p>Cat id:{id}</p>
            <p>Name of this cat:{name}</p>
            <p>This cat likes: {likes}</p>
            <p>Look at this cat</p>
            <div className="CatBlock-ImgWrapper">
                <img src={photo} alt="cat"></img>
            </div>
        </div >
    )
}

CatBlock.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    likes: PropTypes.string.isRequired,
}
CatBlock.defaultProps = {
    id: 'id is not provided',
    name: 'name is not provided',
    likes: 'likes is not provided',
}
export default CatBlock;