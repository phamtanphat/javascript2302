function insochan(){
    for(let i = 0 ; i<=100 ; i++ ){
        // if(i % 2 == 0){
        //     console.log(i)
        // }
        const dk = i % 2== 0;
        if(dk) console.log(i);
    }
}
function insole(){
    for(let i = 0 ; i<=100 ; i++ ){
        // if(i % 2 == 1){
        //     console.log(i)
        // }
        const dk = i % 2 == 1;
        if(dk) console.log(i);
    }
}
function insochia3du1(){
    for(let i = 0 ; i<=100 ; i++ ){
        // if(i % 3 == 1){
        //     console.log(i)
        // }
        const dk = i % 3 == 1;
        if(dk) console.log(i);
    }
}
function insochinhphuong(){
    for(let i = 0 ; i<=100 ; i++ ){
        // if(Math.sqrt(i) % 1 == 0){
        //     console.log(i)
        // }
        const dk = Math.sqrt(i) % 1 === 0;
        if(dk) console.log(i);
    }
}
// insochan();
// insole();
// insochia3du1();
// insochinhphuong()

// function inso(sobichia ,sodu){
//     for(let i = 0 ; i<=100 ; i++ ){
//         const dk = i % sobichia == sodu;
//     }
// }
// inso(3,1);
// insochan();
// insole()
// insochia3du1();
insochinhphuong();