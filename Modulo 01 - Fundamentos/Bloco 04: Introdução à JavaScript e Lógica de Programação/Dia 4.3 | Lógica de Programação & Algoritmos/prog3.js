let n = 5;

for(i = 0; i < n; i += 1){
    let print = "";
    for(j = n -1; j > i; j -= 1){   // a variavel começa do ultimo valor do array e faz o loop ao contrário, j -= 1
        print = print + " ";
    }
    for(j = 0; j <= i; j += 1){
        print = print + "*";
    }
    console.log(print);
}