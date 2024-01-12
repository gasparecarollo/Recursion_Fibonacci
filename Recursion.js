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
//if num is 7 + recAddition(7-1) which is recAddition(6) which if you look at line 25, equals 21. 7+21 = 28
console.log(recAddition(1)) // => Base case 1
console.log(recAddition(2)) // => 3
console.log(recAddition(3))// => 6
console.log(recAddition(4))// => 10
console.log(recAddition(5))// => 15
console.log(recAddition(6))// => 21
console.log(recAddition(7))// => 28

const recAddition1 = (num) => {
    //write your base case
    if (num === 1) {//no -> move forward to next step

    }
    //recursive step
    return 4 + recAddition(4 - 1)//new number is 3 add 4+recAddition(3) 

    if (3 === 1) {//no -> move forward to next step
        //recursive step 
        return 4 + recAddition(3 - 1) //new number is 2 add 4 + recAddition(2)

        if (2 === 1) {//no -> move forward to{
            return 4 + recAddition(2 - 1) // new number is 1;  add 4 + recAddition(1)

            if (1 === 1) {//yes hits base case, return base case 
                return 1 //add 4 +recAddition(0)

            }
        }
    }
}
//console.log(recAddition1(1)) => base case: 1


//Write a function that will take a number and multiply it by every number lower than that number until we get to one: 3! => 3*2*1 = 6 // 5! => 5 * 4 * 3 *2 *1 = 120
const factorial = (num) => {
    //Initialize accumulator at 1, so we can start by multiplying by 1 (not zero)
    let total = 1

    //Iterate while num is greater than zero

    while (num > 0) {
        //Multiply total by num and assign it to total
        total = total * num
        //Decrement//subtract one from num
        num--
    }
    //Return accumulator
    return total
}

console.log(factorial(3))
console.log(factorial(5))

const recFactorial = (num) => {
    //Base case
    if (num === 1) {
        return num
    }
    //Inductive step
    return num * recFactorial(num - 1)
}

console.log(recFactorial(1)) // => Base case => 1
console.log(recFactorial(2))// => 2
console.log(recFactorial(3)) // => 6
console.log(recFactorial(4))// => 24
console.log(recFactorial(5))// => 120
console.log(recFactorial(6))// => 720
//Python
// def fibonacci(n):
// if (n < 2):
//     return n
// else:
// return (fibonacci(n - 1) + fibonacci(n - 2))