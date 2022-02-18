// swap is a way where we can exchange the position ,first will go to the second and second will go to the first.

var first = 5;
var second = 7;

console.log(first, second);

var temp = first;
first = second;
// second = temp;
temp = second;
console.log(first, second);

// destructuring is same as swap but its structure is different from the swap .

[first, second] = [second, first];
console.log(first, second);