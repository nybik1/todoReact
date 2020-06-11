import React from 'react';
import CatBlock from './CatBlock';
import "./CatList.css";
import catsArray from "./catArray";

function CatList() {
    let cats = catsArray;
    return (
        <div className='CatList'>
            {cats.map((item, i) => <CatBlock key={i} name={item.name} id={item.id} likes={item.like.join()} photo={item.photoUrl} />)}
        </div>
    )
}

export default CatList;