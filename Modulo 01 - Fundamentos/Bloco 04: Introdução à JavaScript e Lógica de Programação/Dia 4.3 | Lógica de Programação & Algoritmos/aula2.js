/// EXEMPLO FOR DENTRO DE FOR   ---- cada vez q ele executa uma vez o de fora ele executa todas as vezes de dentro
// ou seja cada vez que ele for para um index diferente no for de fora, o de dentro faz todas as vezes declarada por cada um
let qtd = 10;
let ingredientes = ["queijo", "presunto", "maionese"];
let sacola = [];

for(let i = 0; i < 10; i += 1) {
       // console.log('executou fora', i);
       
       let pao = [];
        
        for(let i = 0; i < ingredientes.length; i += 1 ){
          //  console.log('executou dentro', i);
          pao.push(ingredientes[i]);
    }
    sacola.push(pao);
}
console.log("sacola: ", sacola);



