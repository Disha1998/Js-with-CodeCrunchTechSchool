let parent = document.querySelector('.food')
// console.log(parent);

console.log(parent.children);

console.log(parent.children[1].style.backgroundColor = "green");
console.log(parent.children[1].style.color = "yellow");


// console.log(parent.children[0]);

// for (let i = 0; i < parent.children.length; i++) {
//     const element = parent.children[i];
//     console.log(element.innerHTML);

// }

// console.log(parent.childNodes,'-child nodes');
// console.log(parent.firstElementChild);
// console.log(parent.lastElementChild);

const items = document.querySelector('.item')
// parent.removeChild(items)



// const items = document.querySelectorAll('.item')
// console.log(items);
// parent.removeChild(items[2])

// console.log(items.parentElement, ' child to parent ');


// let itemforEdit = document.querySelector('.item')
// console.log(itemforEdit);
// itemforEdit.innerHTML = "Dhokala"


const  oldElement = document.querySelector('.item')
console.log(oldElement,'-old element');

const newElemet = document.createElement('div')
newElemet.textContent = "Khichadi"

oldElement.replaceWith(newElemet)