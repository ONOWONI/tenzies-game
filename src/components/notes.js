import React from "react";

export default function Dice(props) {
    const styles = {
        backgroundColor : props.isHeld? "#59e391" : 'white'
    };
    return (
        <div className="die" style={styles} onClick={props.holdDice}>
            <h1 className="die-num">{props.value}</h1>
        </div>
    )
}