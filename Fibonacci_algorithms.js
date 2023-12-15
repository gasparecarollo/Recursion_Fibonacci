//Write a function that prints numbers in the Fibonacci sequence up to n
//Ex: fibSequence(1) = [1]
//fibSequence(2) => [1,1]
//fibSequence(3) => [1,1,2]
//fibSequence(25) => [1,1,2,3,5,8,13,21]


//Iterative Version
const iterativeFibSequence = (n) => {
    //Initialize accumulator
    const fibs = [0, 1]

    //Iterate while the last number in the fibs array is less than or equal to n
    while (fibs[fibs.length - 1] < n) {
        // Add the sum of the last two numbers in the array to the array to the array
        //                          last # in array    + second to last # 
        const sum = fibs[fibs.length - 1] + fibs[fibs.length - 2]
        fibs.push(sum)
    }

    if (fibs[fibs.length - 1] > n) {
        fibs.pop()
    }
    return fibs
}

console.log(iterativeFibSequence(25))


//Recursive

const recursiveFibSequence = (n, fibs = [0, 1]) => {
    //Guard clauses
    if (n == 0) return [0]
    if (n === 1) return fibs

    //BASE CASE, if the last number in fibs is greater than n, return fibs
    //If the last number in the array is greater than n, then pop it out of the array
    if (fibs[fibs.length - 1] > n) {
        fibs.pop()
        return fibs
    }
    //Get the sum of the last two numbers in our fibs array and push the sum to fibs
    let sum = fibs[fibs.length - 1] + fibs[fibs.length - 2]
    fibs.push(sum)
    // [0,1,1]


    //Calling function again recursively and passing in the same n, but also passing in the updated fibs array
    return recursiveFibSequence(n, fibs)
    //                                         (n, updated fibs array after push)
    //Args at second function call are (2, [0,1, 1])
    //Args at third function call are (2, [0,1,1,2])

}
console.log(recursiveFibSequence(2))

