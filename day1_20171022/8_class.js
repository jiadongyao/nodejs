// class abstract

// Human
// name age gender height weight ...
// study work playGame ...

/*
class Emp {
    constructor(ename) {
        this.ename = ename;
    }
    work() {
        console.log(`${this.ename} is working...`);
    }
}

let tom = new Emp('Tom');
tom.work();*/

class Human {
    constructor(name) {
        this.name = name;
    }

    printInfo() {
        console.log(`
            Name: ${this.name}
            `);
    }
}

let tom = new Human('Tom');
tom.printInfo();

class Chinese extends Human {
    constructor(name, animalZodiac) {
        super(name);
        this.animalZodiac = animalZodiac;
    }

    printInfo() {
        console.log(`
            Name: ${this.name}
            Zodiac: ${this.animalZodiac}
        `);
    }
}

let zhangsan = new Chinese('张三', 'ox');
zhangsan.printInfo();
