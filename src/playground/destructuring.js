// const person= {
//     name:'Haswika',
//     age:21,
//     location:{
//         city:'KNR',
//         temp: 92
//     }
// };

// const {name: firstname = 'Anonymous',age}=person;
// const {city,temp : temperature}=person.location;


// console.log(`${firstname} is ${age}`);

// if(city && temperature){
//     console.log(`It is ${temperature} in ${city}`);
// }


//Array destructuring

const address =['8-7-326/1','Knr','telangana','505001'];

const [,city,state='TS']=address;

console.log(`You ar in ${city} ${state}`);