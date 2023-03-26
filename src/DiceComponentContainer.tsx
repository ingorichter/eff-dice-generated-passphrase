import DiceComponent from "./DiceComponent";

interface DiceContainerProps {
    diceValues: number[][];
    onUpdateDiceRoll: (index: number) => void;
}

export const DiceComponentContainer = (props: DiceContainerProps) => {
    const diceComponents = props.diceValues.map((item, index) => {
        return <DiceComponent key={index} index={index} onDiceRoll={(index) => props.onUpdateDiceRoll(index)} diceValues={props.diceValues[index]} />
    });

    return (
        <>
            {diceComponents}
        </>
    );
};