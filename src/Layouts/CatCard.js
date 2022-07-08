import React from "react";
import './css/CatCard.css'
const CatCard = ({cat})=>{
    console.log(cat)
    return(
        <div className="card">

            <img src={cat.url} alt="Avatar" width={cat.width}  />

          {/*  <img src={cat.url} alt="Avatar" />*/}
        </div>
    )
}
export default CatCard