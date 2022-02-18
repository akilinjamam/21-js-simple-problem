// finding out the smallest element of array using for loop under function


function largestElement(numbers) {
    let smallest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element < smallest) {
            smallest = element
        }


    }
    return smallest
}




const ages = [12, 54, 2, 34, 75, 32, 12];
const youngest = largestElement(ages);

// const oldest2 = largestElement([-1, -2, -5, -2])
console.log(youngest);