import { useState } from 'react';
import './Passphrase.css';

interface PassphraseProps {
    phrases: string[]
};

const Passphrase = (props: PassphraseProps) => {
    const [copySuccess, setCopySuccess] = useState('');

    // your function to copy here
    const copyToClipBoard = async (copyMe: string) => {
        try {
            await navigator.clipboard.writeText(copyMe);
            setCopySuccess('Copied!');
        } catch (err) {
            setCopySuccess('Failed to copy!');
        }
    };

    const passphraseString = props.phrases.filter(phrase => phrase.length > 0).map((phrase, index, array) => {
        const spacer = array.length - 1 === index ? <p></p> : <p>—</p>;
        return (
            <div key={index} style={{ display: 'flex' }}>
                <div className="PassphraseTag">{phrase}</div>
                {spacer}
            </div>
        );
    });

    const renderCopyButton =
        (props.phrases.filter(phrase => phrase.length > 0).length > 0) ? 
            <button onClick={() => copyToClipBoard(props.phrases.join("-"))}>Copy to clipboard</button> : <div></div>;

    return (
        <>
            <h1>Passphrase</h1>
            <div className='PassphraseContainer'>
                <div className="Passphrase">
                    {passphraseString}
                </div>
                {renderCopyButton}
            </div>
            {copySuccess}
        </>
    );
};

export default Passphrase;