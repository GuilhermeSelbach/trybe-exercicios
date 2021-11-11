let n = 5;

for( i = 0; i < n; i += 1){
    let print = "";
    if(i % 2 == 0){
        for(j = n - 1; j > i; j -= 2){
            print = print + " ";
        }
        for(j = 0; j <= i; j +=1){
            print = print + "*";
        }
        console.log(print);
    }
}