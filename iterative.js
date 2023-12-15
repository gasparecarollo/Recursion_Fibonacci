//Write a function that sums all of the numbers up to and including a given number
const addition = (num) => {
    //Initialize a total var
    let total = 0

    //iterate up to/ or down from the number
    for (let i = 0; i <= num; i + 1) {
        //add each number to our total
        total += i
    }

    //return total variable
    return total
}

console.log(addition(10))
