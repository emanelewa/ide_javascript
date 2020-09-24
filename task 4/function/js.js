function factorial(n){
    let sum = 1;
    while(n >0){
        sum *= n;
        n--;
    }
    document.write(sum);
    return sum
}
factorial(4);

