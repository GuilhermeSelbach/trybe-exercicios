// EXERCÍCIOS DE 1 Á 5 DO DA 4.1 REFATORADOS



function operacoes (num1, num2, operador){
      if (operador === '+'){
        return num1 + num2;
    } else if (operador === '-'){
        return num1 - num2;
    } else if (operador === '*'){
        return num2 * num2;
    } else if (operador === '/'){
        return num1 / num2;
    } else if (operador === '%'){
        return num1 % num2;
    } else {
        return "erro no operador";
    }
}
console.log(operacoes(51, 16, '+'));
console.log(operacoes(51, 16, '-'));
console.log(operacoes(51, 16, '*'));
console.log(operacoes(51, 16, '/'));
console.log(operacoes(51, 16, '%'));