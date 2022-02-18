// 3rd = 1st + 2nd
// 4th = 2nd + 3rd
// 5th = 3rd + 4th
// 6th = 4th + 5th
// nth = (n-1)th + (n-2)th
// ith = (i -1)th + (i-2)th

const fibo = [0, 1]

for (let i = 2; i < 10; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2]
}

console.log(fibo);