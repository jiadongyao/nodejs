// Vehicle 交通工具

// Car Ship Plane Bicycle

class Vehicle {
    constructor(color, brand, weight){
        this.color = color;
        this.brand = brand;
        this.weight = weight;
    }

    run() {
        console.log('running...');
    }

    stop() {
        console.log('stopped.');
    }
}

class Car extends Vehicle {
    constructor(color, brand, weight, tyreNumber) {
        super(color, brand, weight);
        this.tyreNumber = tyreNumber;
    }

    run(){
        console.log('car is running...');
    }

    addOil(){
        console.log('add oil...');
    }
}

let v = new Vehicle('black', 'bba', 1.2);
v.run();
v.stop();

let bmw = new Car('red', 'bmw', 2.0, 4);
bmw.run();
bmw.addOil();
bmw.stop();
