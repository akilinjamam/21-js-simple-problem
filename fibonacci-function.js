function fibonacciSeries(num) {
    if (typeof num != 'number') {
        return 'please input number'
    }

    if (num < 2) {
        return 'please input positive number'
    }
    const fibo = [0, 1]
    for (let i = 2; i < num; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2]
    }
    return fibo;
}

const fiboseries = fibonacciSeries(-2);
console.log(fiboseries);