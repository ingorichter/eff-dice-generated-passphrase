import './Passphrase.css';

interface PassphraseProps {
    phrases: string[]
};

const Passphrase = (props: PassphraseProps) => {
    const passphraseString = props.phrases.filter(phrase => phrase.length > 0).map((phrase, index, array) => {
        const spacer = array.length - 1 === index ? <p></p> : <p>—</p>;
        return (
            <div key={index} style={{display: 'flex'}}>
                <div className="PassphraseTag">{phrase}</div>
                {spacer}
            </div>
        );
    });

    return (
        <>
            <h1>Passphrase</h1>
            <div className="Passphrase">
                {passphraseString}
            </div>
        </>
    );
};

export default Passphrase;