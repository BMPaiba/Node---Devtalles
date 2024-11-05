// // const { emailTemplate } = require("./js-fundation/01-template");
// // require("./js-fundation/02-destructuring");
// // const { getUserById } = require("./js-fundation/03-callbacks");
// const { buildMakePerson } = require("./js-fundation/05-factory");
// const { getUUID, getAge } = require("./plugins");

// // getUserById(28, function (error, user) {
// //   if (error) {
// //     throw new Error(error);
// //   } else {
// //     console.log(user);
// //   }
// // });

// const obj = {
//     name: "padevian",
//     birthday: "1996-11-06"
// }

// const makePerson = buildMakePerson({ getUUID, getAge });

// const jhon = makePerson(obj);

// console.log(jhon)

const { getPokemonById } = require("./js-fundation/06-promises");

const info = getPokemonById(1);
