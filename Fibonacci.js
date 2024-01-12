//https://us06web.zoom.us/rec/play/14JT3Fx7wezeBwOwWJ_37fm1vEsogwgtv-QeNBHh0oWAvsAYmx5_4V716xbgk7bs2B6cSTFd9S-JLWxQ.2WSaiWzTc7fKjOEN?canPlayFromShare=true&from=share_recording_detail&continueMode=true&componentName=rec-play&originRequestUrl=https%3A%2F%2Fus06web.zoom.us%2Frec%2Fshare%2FWcIIVh2e9SN1pAWYGx_QJLZgwyu5nvexDEMSO475wKYDOvg3TXVFD2oP5uGGrY8-.UDJWaVRZcG-LScdc

//Python
// def fibonacci(n):
// if (n < 2):
//     return n
// else:
// return (fibonacci(n - 1) + fibonacci(n - 2))

//What is Fibonacci? 
//The num argument represents the Nth number in the fibonacci sequence
//[1,1,2,3,5,8,13,21]

const fib = (num) => {

    //Base case
    if (num < 2) {
        return num
    }
    //Recursive/inductive case
    return fib(num - 1) + fib(num - 2)

}

console.log(fib(1)) // => Base case => 1
console.log(fib(2)) // => 1
console.log(fib(3))// => 2
console.log(fib(4)) // => 3
console.log(fib(5)) // => 5
console.log(fib(6)) // => 8
console.log(fib(7)) // =>13
console.log(fib(8)) // => 21
console.log(fib(9)) // => 34
console.log(fib(10)) // =>55