let fs = require('fs');
let foundInPosition = new Array();
let String = fs.readFileSync('Alice.txt');
String = String.toString();
let subString = "Alice";
console.log(subString);
let length = subString.length;
for (let i = 0; i < String.length - length + 1; i++) {
    if (ContainsAtIndex(String, subString, i))
        foundInPosition.push(i);
}
console.log(foundInPosition);
//BruteForce


let foundInPosition2 = new Array();
let subStringHash = 0;
let StringHash = 0;
for (let i = 0; i < length; i++) {
    StringHash += String.charCodeAt(i);
    subStringHash += subString.charCodeAt(i);
}
for (let i = 0; i < String.length - length + 1; i++) {
    if (StringHash == subStringHash) {
        if (ContainsAtIndex(String, subString, i))
            foundInPosition2.push(i);
    }
    StringHash += String.charCodeAt(i + length) - String.charCodeAt(i);
}
console.log(foundInPosition2);
//Hash

function ContainsAtIndex(string, subString, i) {
    for (let k = 0; k < subString.length; k++) {
        if (String[i + k] != subString[k]) {
            return false
        }
    }
    return true;
}