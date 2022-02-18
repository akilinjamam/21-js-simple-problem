// // showing array elements and position using for loop 

// const numbers = [12, 22, 13, 17, 35, 65, 5, 15]

// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i]
// //     console.log(element);
// // }

// // do sum using for loop
// // let sum = 0;
// // for (let i = 0; i < numbers.length; i++) {
// //     const element = numbers[i]
// //     sum = sum + element
// // }

// // console.log(sum)

// // do sum  using  for loop under function 

// function sumArray(numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i]
//         sum = sum + element
//     }
//     return sum
// }

// const total = sumArray([10, 20, 30, 40,]);
// // or
// // const total = sumArray(numbers);
// console.log(total);


var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for (var i = 0; i < sentence.length; i++) {
    var letter = sentence[i];
    if (letter == 'a') {
        count++;
    }
}

console.log(count)