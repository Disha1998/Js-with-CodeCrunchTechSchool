
// if

let lightHai = false

if (lightHai) {
    // console.log("Hurrayyy... TV dekh sakte hai");
}

let a = 5
let b = 5

if (a === b) {
    // console.log("true");
}

if (a > 33) {
    // console.log("grater hai");
}

// if-else

let W = 10
let B = 43

if (W > B) {
    console.log("True hai");
} else {
    // console.log("Nahi ye to galat hai");
}

let age = 15
let license = true

if (age > 18 && license === true) {
    // console.log("Car hum chala sakte hai");
} else {
    // console.log("abe marvaega kya..!!");
}

// (age > 18 && license === true) ? console.log("Car hum chala sakte hai") 
// : console.log("abe marvaega kya..!!")

// if-else-if

// let favoriteFlavor = "chocolate";

// if(favoriteFlavor === "Vanilla"){
//     console.log("ohhh..!! I love Vanilla flavor");
// }else if(favoriteFlavor === "Strawberry"){
//     console.log("ane de bhai Strawberry icecream");
// }else if(favoriteFlavor === "chocolate"){
//     console.log("Yahi to chahie tha bhai");
// }else{
//     console.log("tere nasib hi nahi hai");
// }

// nested if

let barishhogi = false
let chatahai = true

if (barishhogi) {
    if (chatahai) {
        console.log("leke hi jate hai..barish hogi to");
    } else {
        console.log("chata hi nahi haii");
    }
} else {
    console.log("mausom accha hai chata rahene dete hai");
}


// Task

let marks = 77

// marks >= 90 =A+
// marks >=80 && marks >90 = A
// marks >=70 && marks >80 = B
// marks > =50 && marks > 60 = C