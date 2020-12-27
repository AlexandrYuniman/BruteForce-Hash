let fs = require('fs');
let foundInPosition = new Array();
let String = fs.readFileSync('Alice.txt');
String = String.toString();
console.log(String)
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
let collision = 0;
for (let i = 0; i < length; i++) {
    StringHash += String.charCodeAt(i);
    subStringHash += subString.charCodeAt(i);
}
for (let i = 0; i < String.length - length + 1; i++) {
    if (StringHash == subStringHash) {
        if (ContainsAtIndex(String, subString, i))
            foundInPosition2.push(i);
        else collision++;
    }
    StringHash += String.charCodeAt(i + length) - String.charCodeAt(i);
}
console.log(foundInPosition2);
console.log('Count of collision ' + collision);
//Hash


let foundInPosition3 = new Array();
let subStringHashQ = 0;
let StringHashQ = 0;
collision = 0
for (let i = 0; i < length; i++) {
    StringHashQ += Math.pow(String.charCodeAt(i), 2);
    subStringHashQ += Math.pow(subString.charCodeAt(i), 2);
}
for (let i = 0; i < String.length - length + 1; i++) {
    if (StringHashQ == subStringHashQ) {
        if (ContainsAtIndex(String, subString, i))
            foundInPosition3.push(i);
        else collision++;
    }
    StringHashQ += Math.pow(String.charCodeAt(i + length), 2) - Math.pow(String.charCodeAt(i), 2);
}
console.log(foundInPosition3);
console.log('Count of collision ' + collision);
//HashQ

let foundInPosition4 = new Array();
let subStringHashRK = 0;
let StringHashRK = 0;
for (let i = 0; i < length; i++) {
    StringHashRK = StringHashRK + String.charCodeAt(i) * Math.pow(2, length - i - 1);
    subStringHashRK = subStringHashRK + subString.charCodeAt(i) * Math.pow(2, length - i - 1);
}
for (let i = 0; i < String.length - length + 1; i++) {
    if (StringHashRK == subStringHashRK) {
        if (ContainsAtIndex(String, subString, i))
            foundInPosition4.push(i);
        else collision++
    }
    StringHashRK = String.charCodeAt(i + length) +
                   2 * (StringHashRK - String.charCodeAt(i) * Math.pow(2, length - 1)) 
}
console.log(foundInPosition4);
console.log('Count of collision ' + collision);
//HashRK


function ContainsAtIndex(string, subString, i) {
    for (let k = 0; k < subString.length; k++) {
        if (String[i + k] != subString[k]) {
            return false
        }
    }
    return true;
}