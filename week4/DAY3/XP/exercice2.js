function displayStudentInfo(objUser){
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;

};

objUser = {
    first: 'Elie',
    last:'Schoppik'
};

console.log(displayStudentInfo(objUser));