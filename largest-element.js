function largestElement(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        let element = numbers[i];
        if (element > largest) {
            largest = element
        }


    }
    return largest
}




const ages = [12, 54, 2, 34, 75, 32, 12];
const oldest = largestElement(ages);

// const oldest2 = largestElement([-1, -2, -5, -2])
console.log(oldest);