//let xTrybe = ["pao","queijo","bacon","alface","ketchup","pão"];
//delete xTrybe[x] ----- ele deleta o valor da posição declarada, porem fica o espaço da valor sem valor
//xTrybe.length = 0;

//Array.splice(index, quantos tiramos, quantos colocamos, nome do valo)

//let indiceRetornado = xTrybe.indexOf("bacon"); ------>cria uma variavel para o indice do valor bacon
 //                                                     depois salvamos numa variavel o retorno
//xTrybe.splice(indiceRetornado,1);    ------ apaga o item expecífico pelo index
//console.log(xTrybe);



let xTrybe = ["pao","queijo","bacon","alface","ketchup","pão"];

let indiceRetornado = xTrybe.indexOf("bacon");
console.log('indice retornado :', indiceRetornado)               ;                      
xTrybe.splice(indiceRetornado,1);
console.log(xTrybe)