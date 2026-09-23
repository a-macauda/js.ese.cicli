for(let i = 0; i>=0 && i<=10; i++ ) {
   console.log(2 * i)  

}
let k = 2
let pari 
for(let j = 0; j <=10; j++ ) {
    let pari = console.log ( j * k )
}



let accumulator = 0
let counter = 0

for(let i = 1; i <= 20; i++){
    if (i % 2 == 0){
        console.log(i);
    }else{
        accumulator = accumulator + i
        counter ++
    }
}
console.log(`accumulator= ${accumulator}`)
console.log(`counter= ${counter}`)
console.log(`risultatomedia = ${accumulator/counter}`)









let numero 
do{
    numero = Number(prompt('inserire un numero da 1 a 3 per una bevanda'))

switch(numero) {
    case 1 :
        console.log( 'E’ stata selezionata l’acqua')
        break;
    case 2 :
        console.log( 'E’ stata selezionata coca cola')
        break;
    case 3 :
        console.log( 'E’ stata selezionata birra')
        break;
    
default:
     prompt('inserire un numero da 1 a 3 per una bevanda')

}
}while (scelta < 1 || scelta > 3)