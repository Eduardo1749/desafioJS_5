var n1=20,n2=30;
function mdc(n1,n2){
    var resto=n1 % n2;
    while(resto!=0){
        n1=n2;
        n2=resto;
        resto=n1%n2;
    }
    return n2;
}
console.log("Esse é o mdc:"+mdc(n1,n2));

function mmc(n1,n2){
    return  (n1*n2)/mdc(n1,n2);
}
console.log("Esse é o mmc:"+mmc(n1,n2))

