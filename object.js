const Employee = {
    name: "Jenny",
    age: 20,
    pincode: 892009,
    email: "jenny@gmail.com",
    hobbies: ["Drawing Mehndi", "Listening to music", "reading books"], //array in obj
    living: {
        city: "Ahmedabad",
        state: "Gujarat",
        address: {
            houseNo: "23/G",
            area: "Manekpur"
        },
    }

}

// console.log("Main Obj = ", Employee);
// console.log(Employee.name);
// Employee.city = "Surat"
// console.log(Employee);

// delete Employee.pincode
// console.log(Employee);

//==> array in object
// console.log(Employee.hobbies[1]);

//==> nested-objects
// console.log(Employee.living.city) ;
// console.log(Employee.living.address.houseNo) ;

const person = {
    Fname: "Somya",
    Lname: "Kisore",
    age: "22",
    finalName: function () {
        return `helloo from obj : ${this.Fname} ${this.Lname}`
    },
    salary: function () {
        return 50000;
    }
}
// console.log(person);

// console.log(`Helooo ${person.Fname} ${person.Lname}`);
// console.log(person.finalName());

// console.log(person.salary());

//  ===> combine objects

let obj1 = { 1: "Rohan", 2: "Verma", 3: 18 }
let obj2 = { 4: "Amit", 5: "Kumar", 6: 23 }
let obj3 = { 7: "Sumit", 8: "Patel", 9: 27 }

// let objAns = { obj1, obj2 }  
// console.log(objAns);

// let objAns = Object.assign({}, obj1, obj2)
// console.log(objAns);

// const answer = {...obj1, ...obj2, ...obj3}
// console.log(answer);

// console.log(Object.keys(person)); 
// console.log(Object.values(person)); 


console.log(obj1.hasOwnProperty("22")); //it returns true or false


