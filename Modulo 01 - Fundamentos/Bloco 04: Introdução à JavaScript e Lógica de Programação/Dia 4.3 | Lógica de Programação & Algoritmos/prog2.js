let n =5;

for( i = 0; i < n; i += 1){
    let print = "";
    for(j = 0; j <= i; j += 1){   //cond = toda vez que a posição do index mudar ele imprime um asterisco por posicção
        print = print + "*";
    }
    console.log(print);
}