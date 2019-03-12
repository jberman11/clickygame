import React from "react";



function GameContainer(props){
        return (
            <div className = "container border">
            {props.children}
            </div>
        )
    }


export default GameContainer;