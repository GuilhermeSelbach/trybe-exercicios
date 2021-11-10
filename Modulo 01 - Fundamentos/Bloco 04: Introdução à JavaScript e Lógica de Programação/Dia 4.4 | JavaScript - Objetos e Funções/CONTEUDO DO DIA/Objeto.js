//    Array                     -------------------> dentro dos colchetes vem os valores e é separada por ;
//let arrNome = [];


//    Objeto                    -------------------> dentro das chaves tem as propriedades e é separada por , e nao :
//let arrObj = {};     


//let firstName = 'Guilherme';
//let lastName = 'Selbach';
//let age = 26;
//let canDrive = false;
//let favoritesMovies = ["Vickings", "Matrix"];


//passando para um objeto as variáveis
let person = {
    firstName: 'Guilherme',
    lastName: 'Selbach',
    age: 26,
    canDrive: false,
    favoritesMovies: ["Vickings", "Matrix"],
    adress: {
        street: 'Rua Porto Novo',
        bairro: 'Ibiraquera',
        number: 'S/N',
    }
}

// Lendo Objetos
console.log("item: ", person['firstName']);
console.log('O aluno ' + person['firstName'] + ' ' + person['lastName'] + ' tem ' + person['age'] + ' anos de idade e tem como seus favoritos filmes ' + person['favoritesMovies'][0] + ' e ' + person['favoritesMovies'][1] + ".");


// Atualizando Objetos
person['firstName'] = "Rivaldocrovis";
console.log("item: ", person['firstName']);


// Deletando Objetos
delete person['canDrive'];
console.log(person);


// Inteirando Intens de Array
for(let key in person){
    console.log("key in objeto:", key, ":", person[key]);

    if(key == 'firstName'){
        break;
    }
}

// Comparação de For/of e For/in com array
let pessoa = ["Guilherme", "Selbach", 26];

for(let key of pessoa){                  // RETORNA O CONTEUDO DO VALOR
    console.log("key of:", key);
}
for(let key in pessoa){                  // RETORNA O INDICE DO VALOR
    console.log("key of:", key);
}