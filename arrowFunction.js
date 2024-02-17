

// function Test() {
//     console.log('tradiotional function');
// }

// Test()

// let Test1 = function () {
//     console.log('Traditional test1');
// }
// Test1();

// let Example = () => console.log("Helloo from arrow fun");
// Example();

// let Example1 = () => {
//     console.log("Helloo from arrow fun");
// }

// Example1();

// let Name = (name) => {
//     return `welcome : ${name}`
// }
// console.log(Name("Disha"));

// let Name = (name,age) =>  `welcome : ${name} - ${age}`

// console.log(Name("Disha", 23));

// ---- this behaviour

// function Timer() {
//     this.seconds = 0;
//     setInterval(function () {
//         this.seconds++
//         console.log(this.seconds);
//     }, 1000)
// }
// var timer = new Timer()

function Timer() {
    this.seconds = 0;
    setInterval(() => {
        this.seconds++
        console.log(this.seconds);
    }, 1000)
}
var timer = new Timer()


