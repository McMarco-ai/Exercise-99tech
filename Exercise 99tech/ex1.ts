function sumToN_1(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}



function sumToN_2(n: number): number {
    return (n * (n + 1)) / 2;
}


function sumToN_3(n: number): number {
    if (n === 1) {
        return 1;
    }
    return n + sumToN_3(n - 1);
}
