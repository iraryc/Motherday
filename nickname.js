"use strict"

//this is an array of objects
const jam = [
        {name:"Monce", 
        age:21, 
        score:95,
        hobbies:["play guitar", "crochet", "sing"]
        },
        {name:"Jaranesca", 
        age:21, 
        score:95,
        hobbies:["roller skate", "screenwriting", "writing"]
        },
        {name:"Andrea", 
        age:29, 
        score:95,
        hobbies:["paint", "watch new shows", "tennis"]
        }
]

// This is how you use the matching and push (it pushes the array into the empty matching)
let matching = [];
let aboveage = jam.length;
for(let i=0; i < aboveage; i++) {
    if(jam[i].age >= 23){
        matching.push(jam[i]);
    }
}

//console.log matching
matching.forEach(aboveage => {
    //Display the name and age
    console.log(aboveage.name, aboveage.age);
})


//     console.log(`${jam[0].name} hobbies is ${jam[0].hobbies[1]}`);
//     console.log(`${jam[1].name} hobbies is ${jam[1].hobbies[1]}`);
//     console.log(`${jam[2].name} hobbies is ${jam[2].hobbies[1]}`);

// //creating a for loop to get the name and second hobbie
// for (let i = 0; i < jam.length; i++) {
//     console.log(`One of ${jam[i].name} favorite hobbies is to ${jam[i].hobbies[1]}`);
//   }

