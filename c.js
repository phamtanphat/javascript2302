class Person{
    constructor(name , age){
        this.name = name;
        this.age = age;
    }
    sayhello(){
        console.log(`Chao ${this.name}`);
    }
 
}
// class Cha extends Person{
//     constructor(name ,age , diachi){
//         super(name , age);
//         this.diachi = diachi;
//     }
// }
// const teo = new Person("Nguyen Van Teo", 20);
// const chateo = new Cha("Nguyen Van Tuan" , 50 , "Quan 10");
const teo = {
    name : 'Teo',
    age : 20,
    sayhello : function(){
        console.log(`Chao ${this.name}`);
    }
}
const ti = teo.sayhello;
ti.bind({name : 'Teo'})();
