import './Dice.css';

interface DiceProps {
    num: number
};

const Dice = (props: DiceProps) => {
    return (
        <>
            <div className='Dice'>{props.num}</div>
        </>
    );
}

export default Dice;