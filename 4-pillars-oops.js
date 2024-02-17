//  Encapsulation


// class Phone {
//     model = 'Nothing Phone 1'
//     // _model , #model
//     mobile() {
//         return this.model
//     }
// }

// let obj = new Phone()
// console.log(obj.mobile());

// Inheritance

// class Animal {
//     speak() {
//         console.log("Animal can speak in various ways!!");
//     }
// }

// class Dog extends Animal {
//     color = "White"
// }

// const tommy = new Dog()

// tommy.speak()


// Polymorphism

class Shape {
    draw() {
        console.log("Drawing a shape");
    }
}

class Circle {
    draw() {
        console.log('Drawing a circle');
    }
}

class Squre {
    draw() {
        console.log('Drawing a squre');
    }
}

function drawShape(shape) {
    shape.draw();
}

// drawShape(new Shape())
// drawShape(new Circle())
// drawShape(new Squre())


// Abstraction


class Car {
    startEngine() {
        console.log("Engine started..!");
    }

    drive() {
        this.startEngine();
        console.log("Driving a car");
    }
}

let myCar = new Car()
myCar.drive()
