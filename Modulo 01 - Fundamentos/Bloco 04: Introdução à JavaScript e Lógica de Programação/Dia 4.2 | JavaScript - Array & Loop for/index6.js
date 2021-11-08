let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let numerosImpares = [];
let numerosPares = [];

for(var i = 0; i < numbers.length; i += 1){
    if (numbers[i] % 2 !== 0){
        numerosImpares.push(numbers[i]);
    } else if ( numbers[i] % 2 === 0) {    
        numerosPares.push(numbers[i])
    } else {
        console.log("nenhum valor ímpar encontrado");
    }
console.log(numerosImpares.length, numerosImpares);
}
