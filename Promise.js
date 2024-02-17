// let PromiseTest = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         console.log("CCTS in async");
//         resolve()
//     }, 1000)
// })

// PromiseTest.then(function () {
//     console.log("We are in then");
// })


// let myPromise2 = new Promise(function(resolve, reject){
//     resolve({userName:"CodeCrunchTechSchool",password:"techschool123"})
// })

// myPromise2.then(function(result){
// console.log('result',result);
// })

let myPromise = new Promise(function (resolve, reject) {

    setTimeout(function () {
        let random = Math.random()
        console.log(random);
        if (random > 0.5) {
            resolve(`Success :${random}`)
        } else {
            reject(`Error : ${random}`)
        }
    }, 2000)
})

myPromise.then(function (result) {
    console.log(`Promise Resolved with result ${result}`);
}).catch(function (error) {
    console.log(`Promise rejected with error : ${error}`);
})