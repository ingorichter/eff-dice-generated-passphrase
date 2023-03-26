import wordlist from "/eff_wordlist_large.txt?raw";

const regex = /(\d{5})\s+(\w+)$/gm;

let passphraseMap = new Map();

const convertWordlistToMap = () => {
    const newMap = new Map();
    let m;
    while ((m = regex.exec(wordlist)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }

        // The result can be accessed through the `m`-variable.
        newMap.set(m[1], m[2]);
        // m.forEach((match, groupIndex) => {
        //     console.log(`Found match, group ${groupIndex}: ${match}`);
        // });
    }
    return newMap;
};

export const PassphraseLookup = (index: string): string => {
    if (!passphraseMap.size) {
        passphraseMap = convertWordlistToMap();
    }

    return passphraseMap.get(index);
};
