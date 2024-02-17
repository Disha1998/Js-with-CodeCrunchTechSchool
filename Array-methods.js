
// let student1 = "Daya"
// let student2 = "Goli"
// let student3 = "Tappu"
// let student4 = "Sonu"

// let student = new Array('a','b','c')
// console.log(student);


// () =>
// {} => 
// [] => 

// let Students = ["Daya", "Goli", "Tappu", "Sonu"]
// console.log(Students);

// // 1) Element

// let myArr = [1, 2, 3, "Disha", true, "ABC"]

// 2) Index

// start from "0"

// Array Methods

let array = [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(array);


// length

// console.log(array.length);

// push()

// array.push(9)
// console.log(array);

// pop()

// array.pop()
// console.log(array);

// unshift()

// array.unshift("first")
// console.log(array);

// shift()

// array.shift()
// console.log(array);

// include()

// console.log(array.includes(21));


// indexOf()

// console.log(array.indexOf(4));

// join()

// let joinedArray = array.join()

// console.log(joinedArray, '-joined-array');

// console.log(typeof joinedArray);

// slice()

// let sliceExample = array.slice(1, 4);
// console.log(sliceExample);
// console.log(array,'--after slice');

// splice()


// let spliceExample = array.splice(1, 4);
// console.log(spliceExample);
// console.log(array,'--after spliceExample');


// concate & spread operator

let colorsArray = ["Red", "Blue", "Green", "Yellow"];

let fruitArray = ["Apple", "Banana", "Orange", "Grapes"]

// fruitArray.map((fruit)=>{
// console.log(fruit);
// })

// colorsArray.push(fruitArray);

// console.log(colorsArray);
// console.log(colorsArray[4][1]);

// concat()

let newArray = colorsArray.concat(fruitArray);
// console.log(newArray);

// spread (...)

let newSpreadArray = [...colorsArray, ...fruitArray, ...array]

// console.log(newSpreadArray,'-newSpreadArray');


// isArray()

// console.log(Array.isArray("Disha"));

// from()

// console.log(Array.from("Disha"));


// of()
// let marks_Eng = 80;
// let marks_Guj = 60;
// let marks_Hindi = 70


// console.log(Array.of(marks_Eng, marks_Guj, marks_Hindi));


// flat()

let multiArray = [1, 2, 3, [4, 5, [6, 7, [8, 9, 10]]]]

console.log(multiArray.flat(Infinity));