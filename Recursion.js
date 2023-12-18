//Recursion

//A function that calls itself is called recursiveFibSequence
//A recursive function call itself to reduce a larger problem into a smaller one until it can be solved.

//A Recursive function must have two properties:
// -A simple base case (or cases) - which is a terminating scenario that does not use recursion to produce an answer
// -The inductive step - A set of rules that reduce all other cases toward the base case

const recAddition = (num) => {
    //Write your base case
    if (num === 1) {
        return 1
    }
    //Recursive Step
    return num + recAddition(num - 1)
}
console.log(recAddition(1)) // => Base case 1
console.log(recAddition(2)) // => 3
console.log(recAddition(3))// => 6