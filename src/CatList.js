import React from 'react';
import CatBlock from './CatBlock';
import "./CatList.css";
import { cats } from "./catArray";

function CatList() {
    return (
        <div className='CatList'>
            {cats.map((item, i) => <CatBlock key={i} name={item.name} id={item.id} likes={item.like.join()} photo={item.photoUrl} />)}
        </div>
    )
}

export default CatList;