let operacoes = (num1) => ({
    add: (num2) => num1 + num2,
    sub: (num2) => num1 - num2,
    div: (num2) => num1 / num2,
    mult: (num2) => num1 * num2,
});

let test1 = operacoes(5).mult(5);
console.log(test1);

class Person {
    constructor(name, age, alive = true) {
        this.name = name;
        this.age = age;
        this.alive = alive;
    }

    getName() {
        return this.name;
    }

    isAlive() {
        return this.alive ? "I'm alive" : "I'm dead";
    }

    hello() {
        return `Hello ${this.name || 'world'}`;
    }
}

let personObj = {
    name: '',
    getName: () => {
        return this.name;
    },
    isAlive: () => {
        return this.alive ? "I'm alive" : "I'm dead";
    },
    hello: () => {
        return `Hello ${this.name || 'world'}`;
    }
}

let pedro = new Person('pedro', 24)
console.log(pedro.age)
console.log(pedro.name)
console.log(pedro.alive)
console.log(pedro.isAlive())
console.log(pedro.getName())
console.log(pedro.hello());

let obj = personObj;
console.log(obj.name)
console.log(obj.getName())
console.log(obj.hello())