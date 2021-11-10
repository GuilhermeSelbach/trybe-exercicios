//FUNÇÃO       É UMA ESTRUTURA QUE GUARDA UM CONJUNTO DE CÓDIGOS

// FUNCTION + O NOME QUE TU QUER DAR (ADICIONA PARAMETROS SE NECESSÁRIO){
//          PODE OU NAO RETORNAR ALGO

// FUNÇÃO SIMPLES


function calculaIPRF (salario) {
    
    let resultado = (salario / 2) * salario;
    return resultado
}

console.log("calculo IPRF: ", calculaIPRF(1000));
console.log("calculo IPRF: ", calculaIPRF(850));
console.log("calculo IPRF: ", calculaIPRF(4500));

// retornando os valores calculados em variaveis apra armazenar e 

function calculaIPRF (salario) {
    
    let resultado = (salario / 2) * salario;
    return resultado
}
let recebeCalculo1 = calculaIPRF(1000);
let recebeCalculo2 = calculaIPRF(850);
let recebeCalculo3 = calculaIPRF(4500);

console.log("calculo IPRF: ", recebeCalculo1);
console.log("calculo IPRF: ", recebeCalculo2);
console.log("calculo IPRF: ", recebeCalculo3);
