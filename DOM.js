let getId = document.getElementById('main')

// console.log(getId);

getId.style.backgroundColor = "yellow"

// document.getElementById('h1First').style.border = "2px solid red"

let text = document.getElementById('h1First')


// console.log(text);

text.setAttribute('id', 'newId')

text.setAttribute('class', 'h1Class newwClass')


document.querySelector('#main')

let myul = document.querySelector('ul')
// console.log(myul);


// let myli = document.querySelector('li')

// myli.style.backgroundColor = "purple"
// myli.style.padding = "15px"


let test = document.querySelectorAll('h1')
// console.log(test);

let myli = document.querySelectorAll('li')

// myli.style.backgroundColor = "red"
// console.log(myli);


// myli.forEach(list => {
//     list.style.backgroundColor = "pink"
// })


// for (let i = 0; i < myli.length; i++) {
//     const element = myli[i];
//     console.log(element);
//     element.style.border = "1px solid red"

// }


// Create Element 
const myDiv = document.createElement('div')
// console.log(myDiv);

// const myP = document.createElement('p')
// console.log(myP);

myDiv.className = 'myDiv'

myDiv.id = 'mydiv-id'
console.log(myDiv);


myDiv.style.backgroundColor = "blue"

myDiv.innerHTML = "CreateElement in DOM"

document.body.appendChild(myDiv)
