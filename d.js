const mangso = [1,2,3,4,5,6,7,8,9];

// mangso.push(10); // Them o cuoi
// mangso.unshift(11); // Them o dau
// mangso.pop() // Xoa o cuoi
// mangso.shift() // xoa o dau
// mangso.splice(3 , 0 , -1); // Them gia tri o giua
// console.log(mangso);
// mangso.splice(3 , 1);
// console.log(mangso);


// console.log(mangso.map(item => item * item ));
// console.log(mangso.filter(item => item >= 4));
// console.log(mangso.indexOf(9))
// console.log(mangso.reduce((item1 , item2) => item1 - item2));
// console.log(mangso.every(item => item > 0));

const mangPerson = [
    {name : "Ti" , age : 20},
    {name : "Tun" , age : 25},
    {name : "Tin" , age : 30},
    {name : "Thu" , age : 35},
]

// console.log(mangPerson.map(person => person.name));
// console.log(mangPerson.filter(person => person.name == 'Ti'));
console.log(mangPerson.map(person => person.age).reduce((person1 , person2 ) =>  person1 + person2));