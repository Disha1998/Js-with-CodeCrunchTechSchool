// let getId = document.getElementById('img1')
// console.log(getId);

// getId.onmouseover = Over;

// function Over() {
//     getId.style.border = "5px dotted green"
// }

// getId.onmouseout = Out;
// function Out() {
//     getId.style.border = "none"
// }


// document.getElementById('img1').addEventListener("click", function (event) {
//     console.log(event, 'event');
//     alert('image 1 clicked')
// })

// document.querySelector('#img1').addEventListener("mouseover", function () {
//     this.style.border = "8px solid red";
//     this.style.padding = "5px";
// })

// document.querySelector('#img1').addEventListener("mouseout", function () {
//     this.style.border = "none";
// })


// document.getElementById("input1").addEventListener("keydown", function (e) {
//     console.log('You pressed : ',e.key);

//     if (e.key === "Enter") {
//         alert("You pressed Enter key")
//     }
// })


document.querySelector(".main").addEventListener("click",function(e){
    console.log(e.target);
    e.target.remove();
})




