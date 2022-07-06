function charCount(str){
    let charList = {};
    for(let index in str){
        let char = str[index].toLowerCase();
        if(char===" "){continue;}
        charList[char] = charList[char]? charList[char] + 1 : 1;
    }
    return charList;
}
const charList = charCount("Hasan Ali");
console.log(charList);