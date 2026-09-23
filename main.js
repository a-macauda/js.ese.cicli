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









let numero = prompt('inserire un numero da 1 a 3 per una bevanda')
let esito;
switch(true) {
    case numero = 1 :
        esito = 'E’ stata selezionata l’acqua'
        break;
    case numero = 2 :
        esito = 'E’ stata selezionata coca cola'
        break;
    case numero = 3 :
        esito = 'E’ stata selezionata birra'
        break;
    
default:
     esito = prompt('inserire un numero da 1 a 3 per una bevanda')

}