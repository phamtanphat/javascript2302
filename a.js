        // I  : Khai báo biến
// var let const

// var a = 10;
// let b = 20;
// const c = 30
// console.log(a,b,c);

// let b = 10;
// b = 5;
// console.log(b);
// const a = 10;
// a = 12;
// console.log(a);
        //II : Kiểu dữ liệu : null , boolean , chuỗi , số , đối tượng , Symbol , undefined
//Kiểu null
// let a  = null;
// console.log(a); 
//undefined
//1 : Không có giá trị khi khởi tạo
// let a ;
//2 : Phương thức không return
//3 :  Phương thức  return;
// function tinhtoan(){
//     return;
// }

// console.log(tinhtoan());
        // III : Giá trị nhận là false : 0 false '' undefined NaN null
// let a;
// if(a = false ){
//     console.log("abcd");
// }
// let a = null;
// let b = 3;
// console.log(a + b);

// let a = 5;
// let b = 10;
// if(a < b) console.log(" a be hơn b");

// const teo = {
//     name : 'teo',
//     age : 20
// }
// try {
//     console.log(teo.age.x.y);
    
// } catch (error) {
//     console.log(error);    
// }

// console.log(Math.round(1.4));
// console.log(Math.ceil(1.5));
// console.log(Math.floor(1.6));
// console.log(Math.random() * 5);

// function getRandom(n){
//     return Math.floor(Math.random() * (n + 1 ))
// }

// console.log(getRandom(5));

// function tinh(a , b = 10 ){
//     return a + b;
// }
// console.log(tinh(3 , 4));
// const teo = {
//     name : 'teo',
//     age : 20,
//     sayhello : function(){
//         console.log(`Chao ${this.name}`);
//     }
// }
// const ti = {
//     name : 'ti',
//     age : 20,
//     sayhello : function(){
//         console.log("Chao " + this.name);
//     }
// }

// ti.name = "Nguyen Van Ti"
// teo.sayhello();
// function Person(name , age){
//     this.name = name;
//     this.age = age,
//     this.sayhello = function (){
//         console.log(`Chao ${this.name}`);
//     }
// }

// const ti = new Person("Ti" , 20);
// console.log(ti.name);
// ti.sayhello();

// class Person{
//     constructor(name , age){
//         this.name = name;
//         this.age = age;
//     }
//     sayhello(){
//         console.log(`Chao ${this.name}`);
//     }
// }

// const ti = new Person("Nguyen Van Ti" , 20);
// console.log(ti.name);
// ti.sayhello();


// class point
// props : x , y
// method : do dai canh x y;
// class Point{
//     constructor(x , y){
//         this.x = x;
//         this.y= y;
//     }
//     getDistance(){
//         return Math.sqrt(this.x * this.x + this.y * this.y);
//     }
// }

// const a = new Point(10 , 10);
// console.log(a.getDistance());

// function return function:
// function dosth(){
//     return console.log;
// }
//function nhan tham so function
// function dosth(fn){
//     fn;
// }

// dosth(console.log());
// In so chan 0 100;
// for(let i = 0 ; i<=100 ; i += 2 ){console.log(i)}
//in so le
// for(let i = 1 ; i<=100 ; i += 2 ){console.log(i)}
// in so chia ba du 1;
// for(let i = 1 ; i<=100 ; i += 3 ){console.log(i)}
// in so chinh phuong
// for(let i = 1 ; i<=10 ; i++ ){console.log(i * i)}
function insochan(){
    for(let i = 0 ; i<=100 ; i++ ){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}
// insochan();


// function show(){
//     var a = 10;
// }
// console.log(a);

// var a = console.log;
// console.log(typeof(a));

// var a = 10;
// var b = "10";
// console.log(a - b);
// if(a === b){
//     console.log("a bang b");
// }