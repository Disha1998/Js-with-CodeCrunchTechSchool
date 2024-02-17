

// class Test {

//     message() {
//         console.log("hello everyone...");
//     }

//     newMessage(){
//         console.log("Happy coding...");
//     }

// }

// let obj = new Test();
// obj.message()
// obj.newMessage()

// methods
// 1) Constructor method

class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
        console.log("constructor called...!");
        console.log(`my brand : ${brand} & model : ${model}`);
    }
    // constructor() {
    //     console.log('hellowwww');
    // }

    static staticMethod() {
        console.log("I am in static method...");
    }

}

let myCar = new Car("Toyota", "Fortuner");
let myCar1 = new Car("Toyota", "Crysta");
// myCar.staticMethod()
// static method
Car.staticMethod()