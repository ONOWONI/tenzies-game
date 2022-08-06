import React from "react";
import './new.css';
import { nanoid } from "nanoid";
import Dice from "./components/notes";


export default function Abb(){
    const [dieNum, setDieNum] = React.useState(allNewDice())
    const [tensies, setTenzies] = React.useState(false)


    React.useEffect(() => {
        const allTrue = dieNum.every(die => die.isHeld)
        const firstValue = dieNum[0].value
        const allValues = dieNum.every(die => die.value === firstValue)
        if (allValues && allTrue) {
            setTenzies(true)
        }
    })




    function allNewDice() {
        const arr = []
        for (var i=0; i<10; i++) {
            arr.push(generateNewDice())
    }
    return arr
}

    function generateNewDice(){
        return {
            value :  Math.ceil(Math.random() * 6),
            isHeld : false,
            id : nanoid()
        }
    }


    function handleClick() {
        if (!tensies) {
            setDieNum(prev => prev.map(die => {
                return die.isHeld ? die : generateNewDice()
            })
    
            )
        } else {
            setTenzies(false)
            setDieNum(allNewDice())
        }
    }

    function holdDice(id) {
        setDieNum(prev => prev.map(die => {
            return die.id === id ?
                {...die, isHeld :!die.isHeld} :
                die
        }))
    }

    const diceVal = dieNum.map(die => <Dice key={die.id} id={die.id} value={die.value} isHeld={die.isHeld} holdDice={() => holdDice(die.id)}/>)

    return (
        <main >
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">
                {diceVal}
            </div>
            <button onClick={handleClick} className='rolldice'>{tensies ? "New Game" :"Roll Dice " }</button>
        </main>
    )
}