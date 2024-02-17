
// function FullName(Fname, Lname) {
//     // console.log("heyyyy" + " " + Fname + " " + Lname);
//     // console.log(`Hello ${Fname} ${Lname}`);

// }
// FullName("Champak", "Seth")


// function Calculate(num1,num2){
// //     let sum = num1 + num2
// // console.log("total" + " " + sum);

// console.log(`total is : ${num1 + num2 }`);
// }

// Calculate(5,2)


// Function with return value

// function SumTwoNumber(num1, num2) {
//     console.log(num1 + num2);
// }
// let sum = SumTwoNumber(4,8)
// console.log('result', sum);

// function SumTwoNumber(num1, num2) {
//     let sum = num1 + num2;
//     console.log('CodeCrunch TechSchool');

//     return sum;
//     console.log('CodeCrunch TechSchool');

//     // return num1 + num2
// }
// let sum = SumTwoNumber(4, 8)
// console.log('result', sum);

// 2nd method 

// function UserName(Name) {
//     return `User name is ${Name}`
// }

// // UserName("CC-TechSchool")
// // console.log(UserName("CC-TechSchool"));

// var nameIs = UserName("Disha")
// console.log(nameIs);



// function UserName(Name) {
//     if (Name === undefined) {
//         console.log("please enter your name");
//     }
//     return `User name is ${Name}`
// }

// UserName()

//  "!"  <= !Name 

// function UserName(Name) {
//     if (!Name) {
//         console.log("please enter your name...");
//     }
//     return `User name is ${Name}`
// }

// UserName()

function UserName(Name = "Jiya") {
    if (!Name) {
        console.log("please enter your name...");
    }
    return `User name is ${Name}`
}

let name = UserName("Dhruv")
console.log(name);
