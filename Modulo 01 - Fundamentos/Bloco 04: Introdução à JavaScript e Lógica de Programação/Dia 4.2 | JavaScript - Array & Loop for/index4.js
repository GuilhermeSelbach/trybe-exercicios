let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somaTudo = 0;


for (var i = 0; i < numbers.length; i += 1) {
    somaTudo += numbers[i];
}
let mediaAritmetica = somaTudo/numbers.length;

 if (mediaAritmetica > 20) {;
    console.log("valor maior que 20");
    } else {
    console.log("valor menor que 20");
}
