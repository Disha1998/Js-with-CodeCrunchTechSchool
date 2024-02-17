

let myPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve("Task is resolve")
    }, 2000)
})


async function myPromise1() {
    let test = await myPromise
    console.log(test);
}
console.log('Global log');
myPromise1()

console.log('Global log - 2');
