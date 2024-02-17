// global variables

let cake = "Sweet"

console.log(cake);

// Local variable

function Local() {
    let test = "Example of Local variable"
    console.log(test);
    console.log(cake,"-I'm in Local function");
}
Local();

// console.log(test,'-test');