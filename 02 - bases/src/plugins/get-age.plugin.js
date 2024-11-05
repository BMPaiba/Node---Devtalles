const getAgePlugin = require("get-age");


const getAge = ( birthdate ) => {
    if(!birthdate) return new Error ("Falta la fecha de nacimiento");
    return getAgePlugin( birthdate );
}

module.exports = { getAge }