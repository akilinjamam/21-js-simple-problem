// task1 finding out the largest number from three numbers using function. 

function theBiggest(first, second, third) {
    if (first > second && first > third) {
        return first
    }

    else if (second > third && second > first) {
        return second
    }

    else if (third > second && third > first) {
        return third
    }

}


var biggest = theBiggest(900, 1000, 1100)

console.log(biggest);

