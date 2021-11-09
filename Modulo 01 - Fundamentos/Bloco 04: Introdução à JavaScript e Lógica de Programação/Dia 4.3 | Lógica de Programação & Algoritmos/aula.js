// AQUECENDO

let acesso = true;
let qtdPaes = 10;
let sacolas =0;

if(acesso === true){
    for(var i = 0; i <= 10; i += 1){
        sacolas = i;
        console.log('Existe ' + sacolas + 'paes na sacola');
    }
}else{
    console.log('Não é possível acessar a página')
}

// PA NAOA APARECER A 0

let acesso = true;
let qtdPaes = 10;
let sacolas =0;

if(acesso === true){
    for(var i = 1; i <= 10; i += 1){
        sacolas = i;
        console.log('Existe ' + sacolas + 'paes na sacola');
    }
}else{
    console.log('Não é possível acessar a página')
}

//       OU

let acesso = true;
let qtdPaes = 10;
let sacolas =0;

if(acesso === true){
    for(var i = 1; i <= 10; i += 1){
        sacolas = i;                 /        sacolas = i =1;
        if(sacolas >0){              /        if(sacolas <= 10);
            console.log('Existe ' + sacolas + 'paes na sacola');
        }
    }
}else{
    console.log('Não é possível acessar a página')

//     OU

let acesso = true;
let qtdPaes = 10;
let sacolas =0;

if(acesso === true){
    for(var i = 1; i <= 10; i += 1){
       if(i == 0){
           continue;
       }
        sacolas = i;
        console.log('Existe ' + sacolas + 'paes na sacola');
    }
}else{
    console.log('Não é possível acessar a página')



//       ou

let acesso = true;
let qtdPaes = 10;
let sacolas =0;

if(acesso === true){
    for(var i = 1; i <= 10; i += 1){
        if(i == 5){
            break;      -----------------------------> freia o loop
        }
        sacolas = i;
        console.log('Existe ' + sacolas + 'paes na sacola');
    }
}else{
    console.log('Não é possível acessar a página')