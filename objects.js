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
        this._name = name;
        this.age = age;
        this.alive = alive;
    }

    get name() {
        return this._name;
    }

    set name(newName) {
        this._name = newName;
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
console.log(pedro.age);
console.log(pedro.alive);
console.log(pedro.name);
console.log(pedro.isAlive());
console.log(pedro.hello());

let obj = personObj;
obj.name = 'Person Obj';

console.log(obj.name)
console.log(obj.getName())
console.log(obj.hello())

// Builder pattern
class Operations {
    static RESULT;
    
    constructor(result = 0) {
        this.RESULT = result;
    }

    static add(a, b) {
        this.RESULT = a + b;
        return this;
    }

    static sub(a, b) {
        this.RESULT = a - b;
        return this;
    }

    static mult(a, b) {
        this.RESULT = a * b;
        return this;
    }

    static div(a, b) {
        this.RESULT = a / b;
        return this;
    }

    static build() {
        return new Operations(this.RESULT);
    }
}

console.log(
    Operations.add(1,3).sub(1,0).build()
);

console.log(
    Operations.add(1,3).sub(1,0).build().RESULT
);