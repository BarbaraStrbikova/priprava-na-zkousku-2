const data = [1, 2, 3, 4, 5];

/**
 * Write your code below!
 */

function soucet(a, b, ...dalsi) {
    let c = 0;

    dalsi.forEach(cislo => {
        c += cislo;
    })

    const result = a + b + c;
    return result;
}

console.log(soucet(1,2));

console.log(soucet(1,2,3,4,5,6));

console.log(soucet(100, 200, ...data));


