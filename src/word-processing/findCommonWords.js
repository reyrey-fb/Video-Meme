/**
 * function that returns five most frequently used words in string
 * @param {string} str - string of async promises from text/string files
 */

const findCommonWords = (str) => {
    
    let strNoExtraSpace = str.replace(/\s+/g, ' ').trim()
    let cleanWords = strNoExtraSpace.replace(/[,.]/g,'');
    let words = cleanWords.toLowerCase().split(' ');
    
    let wordAccounting = {}
    for (let word of words) {
        wordAccounting[word] = wordAccounting[word] + 1 || 1;
    }
    
    const sortedDescendingWordAccounting = 
    Object.entries(wordAccounting).sort(([,a],[,b]) => b-a);
    
    const fiveMostFrequentWords = Object.fromEntries(sortedDescendingWordAccounting.slice(0,5));
    return Object.keys(fiveMostFrequentWords) //array of strings: ['hi', 'you']
}

export default findCommonWords;


