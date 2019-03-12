import React from "react";
import "./GameStyle.css"


function GameImage (props) {
    return(
        <div className = "col-md-3">
        <div className = "card" onClick = {props.onClick}>
         <img src = {props.source} alt = {props.id} id ={props.id}/>
        </div>
        </div>
    )
}

export default GameImage;