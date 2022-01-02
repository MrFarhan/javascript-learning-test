// HackerRank 10 Days Challange


// Task 5
// - First, print each vowel in  on a new line. The English vowels are a, e, i, o, and u, and each vowel must be printed in the same order as it appeared in .
// - Second, print each consonant (i.e., non-vowel) in  on a new line in the same order as it appeared in .

//const input = "javascriptLoops";
//expected output is:

// j
// a
// v
// a
// s
// c
// r
// i
// p
// t
// L
// o
// o
// p
// s


const input = "javascriptLoops";

function vowelsAndConsonants (){
    const vowelList = "aeiou";
    let consonents = ''

    for (let letter of input){
        if(vowelList.includes(letter)){
            console.log(letter)
        } else consonents += letter + "\n"
    }
    return console.log(consonents)
}
vowelsAndConsonants()