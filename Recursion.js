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
    return 4 + recAddition(4 - 1)//new number is 3 add 4+3 

    if (3 === 1) {//no -> move forward to next step
        //recursive step 
        return 4 + recAddition(3 - 1) //new number is 2 add 4+3+2

        if (2 === 1) {//no -> move forward to{
            return 4 + recAddition(2 - 1) // new number is 1;  add 4+3+2

            if (1 === 1) {//yes hits base case, return base case 
                return 1 //add 4+3+2+1
                //return 4+3+2+1 = 10

            }
        }
    }
}
//console.log(recAddition1(1)) => base case: 1