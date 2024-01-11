/*
- CAREFULLY READ AND UNDERSTAND THE PROBLEM FIRST
- INCLUDE APPROPRIATE NAMED VARIABLES AND PSEUDO CODE/COMMENTS IN YOUR SOLUTION
- FOCUS ON WRITING CLEAN/READABLE CODE

Part 1:
Dogs communicate with eachother by barking using the sound/word "woof".
Implement a recursive function that takes in a numerical value (n) and outputs a string.
  
const bark = (n) => {}

Ex:
bark(4) //output: woof-woof-woof-woof


Bonus:
Write a recursive function to search for a specific value within a nested object. The function should return true if the value is found and false if not.

const recursiveObjectSearch = (obj, value) = {}

Ex:
const nestedObject = {
    a: 1,
    b: {
        c: 32,
        d: {
            e: 13,
            f: 4
        }
    }
};
recursiveObjectSearch(nestedObject,13) // true
recursiveObjectSearch(nestedObject,8) // false

*/


const bark = (n) => {

    if (n !== "number") {
        return false
    }
    let dogSaysHello = "woof"

    if (n === 0) {
        return ''

    } else {

        return dogSaysHello + bark(n - 1)
    }
}
console.log("Cat got my tongue. I produce no bark", bark(1))
console.log("I produce one bark", bark(2))
console.log("I produce 3 barks", bark(3))
console.log("Uh, dogs don't count", bark(7))

//Bonus Attempt 

const recursiveObjectSearch = (obj, value) => {
    if (value !== "number") {
        return false
        if (obj === value) {
            return true
        }
    } else {
        return obj.find(value) + recursiveObjectSearch(value - 1)
    }

}

//Xavier's code
function bark(n, i = 0) {
    string = " "

    if (n <= 0) return "Bark!"

    if (i < n) {
        string += "woof"
        return string + bark(n, (i + 1))
    }

}
console.log(bark(0, -1))


//Destiny's solution
/*
const recursiveObjSearch = (obj, value) => {
    Ex:
    const nestedObject = {
        a: 1,
        b: {
            c: 32,
            d: {
                e: 13,
                f: 4
            }
        }

    }
};
recursiveObjSearch(nestedObject, 13)//true
recursiveObjSearch(nestedObject, 8)//false

*/

function recursiveObjSearch(obj, targetValue) {
    //at each recursive call pass an obj into the function with the target value
    //loop through given obj, check values at each key for either the target value or if nested object exists

    for (let key in obj) {
        //check id obj[key] is nested object or if target value
        const keyValue = obj[key]
        const keyArr = Object.keys(keyValue) // returns an array of keys in an object
        // if (typeof keyValue === 'object')
        //if (typeof [] === 'object') would be true also
        const isNestedObject = key.length > 0
        if (keyValue === targetValue) {
            return true
        } else if (isNestedObject) {
            //if nested object, recursively call function, pass the nested object into my function
            return recursiveObjSearch(keyValue, targetValue)
        }


    }
}