let fs = require('fs');
let foundInPosition = new Array();
let inputText = fs.readFileSync('Alice.txt');
inputText = inputText.toString();
console.log(inputText);

let subString = "Alice";
console.log(subString);
let length = subString.length;
for (let i = 0; i < inputText.length - length + 1; i++) {
    if (ContainsAtIndex(inputText, subString, i))
        foundInPosition.push(i);
}
console.log(foundInPosition);
//BruteForce


let foundInPosition2 = new Array();
let subStringHash = 0;
let StringHash = 0;
let collision = 0;
for (let i = 0; i < length; i++) {
    StringHash += inputText.charCodeAt(i);
    subStringHash += subString.charCodeAt(i);
}
for (let i = 0; i < inputText.length - length + 1; i++) {
    if (StringHash == subStringHash) {
        if (ContainsAtIndex(inputText, subString, i))
            foundInPosition2.push(i);
        else collision++;
    }
    StringHash += inputText.charCodeAt(i + length) - inputText.charCodeAt(i);
}
console.log(foundInPosition2);
console.log('Count of collision ' + collision);
//Hash


let foundInPosition3 = new Array();
let subStringHashQ = 0;
let StringHashQ = 0;
collision = 0
for (let i = 0; i < length; i++) {
    StringHashQ += Math.pow(inputText.charCodeAt(i), 2);
    subStringHashQ += Math.pow(subString.charCodeAt(i), 2);
}
for (let i = 0; i < inputText.length - length + 1; i++) {
    if (StringHashQ == subStringHashQ) {
        if (ContainsAtIndex(inputText, subString, i))
            foundInPosition3.push(i);
        else collision++;
    }
    StringHashQ += Math.pow(inputText.charCodeAt(i + length), 2) - Math.pow(inputText.charCodeAt(i), 2);
}
console.log(foundInPosition3);
console.log('Count of collision ' + collision);
//HashQ


let foundInPosition4 = new Array();
let subStringHashRK = 0;
let StringHashRK = 0;
for (let i = 0; i < length; i++) {
    StringHashRK = StringHashRK + inputText.charCodeAt(i) * Math.pow(2, length - i - 1);
    subStringHashRK = subStringHashRK + subString.charCodeAt(i) * Math.pow(2, length - i - 1);
}
for (let i = 0; i < inputText.length - length + 1; i++) {
    if (StringHashRK == subStringHashRK) {
        if (ContainsAtIndex(inputText, subString, i))
            foundInPosition4.push(i);
        else collision++
    }
    StringHashRK = inputText.charCodeAt(i + length) +
                   2 * (StringHashRK - inputText.charCodeAt(i) * Math.pow(2, length - 1)) 
}
console.log(foundInPosition4);
console.log('Count of collision ' + collision);
//HashRK


function ContainsAtIndex(string, subString, i) {
    for (let k = 0; k < subString.length; k++) {
        if (string[i + k] != subString[k]) {
            return false
        }
    }
    return true;
}
