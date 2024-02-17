

let myDate = new Date();
// console.log(myDate);

// console.log(typeof(myDate));

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());

let DeclareDate = new Date(2023, 2, 15)

// console.log(DeclareDate);

// 0 - Jan, ..... 11- december

// YYYY-MM-DD


let DeclareDate1 = new Date("2023-01-23")
// console.log(DeclareDate1);


// timestamp

// let myTimestamp = Date.now()
// console.log(myTimestamp);

// console.log(DeclareDate.getTime());

let myTimestamp = Date.now()
console.log(Math.floor(myTimestamp / 1000));

console.log(new Date().getHours());

