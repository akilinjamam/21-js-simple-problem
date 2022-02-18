
// task2 finding the smallest number from 3 numbers using function 

function theSmallest(first, second, third) {
    if (first < second && first < third) {
        return first
    }

    else if (second < third && second < first) {
        return second
    }

    else if (third < second && third < first) {
        return third
    }

}


var smallest = theSmallest(500, 400, 300)

console.log(smallest);