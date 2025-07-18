function isAnagrame(str1, str2) {
    const cleanStr1 = str1.replace(/\s+/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s+/g, '').toLowerCase();

    if (cleanStr1.length !== cleanStr2.length) {
        return false;
    }

    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');

    return sortedStr1 === sortedStr2;
}

function checkAndDisplay(str1, str2){
    if (isAnagrame(str1, str2)) {
        console.log(`"${str1}" is an anagram of "${str2}"`);
    } else {
        console.log(`"${str1}" is NOT an anagram of "${str2}"`);
    } 
}

console.log(isAnagrame("Astronomer", "Moon starer"));       
console.log(isAnagrame("School master", "The classroom"));  
console.log(isAnagrame("The Morse Code", "Here come dots"));

checkAndDisplay("Astronomer", "Moon starer");
checkAndDisplay("School master", "The classroom");
checkAndDisplay("The Morse Code", "Here come dots");