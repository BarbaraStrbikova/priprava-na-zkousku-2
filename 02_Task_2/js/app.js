const users = [
    {
        id: 1,
        firstName: "Idalia",
        lastName: "Franses",
        email: "ifranses0@mapy.cz",
        ipAddress: "180.153.67.217",
        language: "French",
        nin: "3033798411",
    },
    {
        id: 2,
        firstName: "Frederick",
        lastName: "Prince",
        email: "fprince1@huffingtonpost.com",
        ipAddress: "6.239.37.95",
        language: "English",
        nin: "3884188887",
    },
    {
        id: 3,
        firstName: "Iago",
        lastName: "MacCathay",
        email: "imaccathay2@wix.com",
        ipAddress: "244.252.97.163",
        language: "Italian",
        nin: "4502080942",
    },
    {
        id: 4,
        firstName: "Biddie",
        lastName: "Liddard",
        email: "bliddard3@noaa.gov",
        ipAddress: "6.107.79.145",
        language: "French",
        nin: "2931819395",
    },
    {
        id: 5,
        firstName: "Colas",
        lastName: "Moffett",
        email: "cmoffett4@purevolume.com",
        ipAddress: "200.4.236.255",
        language: "French",
        nin: "1288790260",
    },
];

/**
 * Write your code below!
 */

//FILTER

const englishUsers = users.filter((user) => {
    if (user.language ==='English') {
        return true
    } else {
        return false
    }

})

// const englishUsers = users.filter(user => user.language ==='English')


const usersId = users.filter(user => user.id > 2)

console.log(englishUsers);
console.log(usersId);

// MAP


const simpleUsers = englishUsers.map((user) => { return {
    id: user.id,
    email: user.email,
}})


console.table(simpleUsers);

const result = users.map().filter



// const jmena = ['Alena', 'Bara', 'Cyril a Metodej', 'Diana']

// const delky = jmena.map((jmeno) => {return jmeno.length})

// const osoby = jmena.map((jmeno) => {return {
//     krestniJmeno: jmeno,
//     delkaJmena: jmeno.length,
// }})

// console.log(jmena);
// console.log(delky);
// console.log(osoby);






