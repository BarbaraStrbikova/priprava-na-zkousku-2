/**
 * Write your code below!
 */

class Animal {
    constructor(name, age) {
        this.name = name;
        this.age =age;
    }

    sayHello() {
        console.log(`Ahoj. Jsem ${this.name} a je mi ${this.age} let.`)
    }
}

const zvire = new Animal('Pepik', 3)
const zvire2 = new Animal('Zofka', 72)

console.log(zvire);
zvire.sayHello();

console.log(zvire2);
zvire2.sayHello();


// ROZSIRENI

class Cat extends Animal {
    constructor(name, age, color, lifes) {
        super(name, age);
        this.color = color;
        this.lifes = lifes;
    }

    sayHello() {
        console.log(`Cus. Jsem ${this.name}, jsem ${this.color} a mam ${this.lifes} zivotu.`)
    }

    meow() {
        console.log('Mnau. Chci jist.')
    }

    die() {
        this.lifes -= 1;
        console.log(`Zbyva mi ${this.lifes} zivotu.`)
    }


}

const kocka = new Cat('Mourek', 6, 'strakata', 7);

console.log(kocka);
kocka.sayHello();
kocka.meow();
kocka.die();
kocka.die();
kocka.die();
