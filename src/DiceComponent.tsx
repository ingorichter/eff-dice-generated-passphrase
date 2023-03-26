import Dice from "./Dice";
import './DiceComponent.css';

interface DiceComponentProps {
    index: number,
    diceValues: number[],
    onDiceRoll: (index: number) => void
};

const DiceComponent = (props: DiceComponentProps) => {
    return (
        <div className='DiceComponent'>
            <button onClick={() => props.onDiceRoll(props.index)}>Roll The Dice</button>
            <div className="dice-container">
                {props.diceValues.map((item, index) => {
                    return <Dice key={index} num={props.diceValues[index]} />
                })
                }
            </div>
        </div>
    );
};

export default DiceComponent;