
// Number to String

let num = 55;
let secondMethod = 655

// console.log(typeof num);
let toString = String(num);
// console.log(typeof toString);

let secondConvert = secondMethod.toString();

// console.log(typeof secondConvert);

// String to number

let string = "abc767CCTS"

// let toNumber = Number(string);
// console.log(toNumber);
// console.log(typeof toNumber);

let toParseInt = parseInt(string)
// console.log(toParseInt);
// console.log(typeof toParseInt);

// null to number

let value = null

let number = Number(value)

// console.log(number);
// console.log(typeof number);

// Undefine

let value1 = undefined

let num2 = Number(value1)

// console.log(num2);
// console.log(typeof num2);

// boolean

let boll1 = "example"

let booltoNum = Number(boll1)
// console.log(booltoNum);
// console.log(typeof booltoNum);

let loggedIn = 1
// let loggedIn = ""
// let loggedIn = "Disha"

let converBool = Boolean(loggedIn)
// console.log(converBool);
// console.log(typeof converBool);

// revise

// "55" => 55
// "55abc" => NaN
// 55 => "55"
// null => 0
// undefined => NaN
// 1 => true, 0 => flase
// "" => flase, "Disha" => true

// Hoisting ----


// console.log(host);

// var host;

// console.log(hostlet);
// let hostlet;

// console.log(hostconst);
// const hostconst;


call();

function call() {
    console.log('this is example for hoisting');
}