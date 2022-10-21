// Write a function that counts the number of vowels in a string




// The first way

let count = 0;
const countVowels = str => {
    const vowels = ['a', 'o', 'u', 'e', 'i'];
    for (let item of str.toLowerCase()){
        if (vowels.includes(item)){
            count++;
        }
    }
    return count;
}
console.log(countVowels('lkoHHgAA'));


// The second way

const findVowels = str => {
    const matches = str.match(/[aouei]/gi)
    return matches ? matches.length : 0
}

console.log(findVowels('hrtydddAK'))
