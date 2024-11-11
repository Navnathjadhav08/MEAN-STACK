/*
5. Write a typescript program which contains one function named as Fibonacci. That function accept 
one number from user and print Fibonacci series till that number. 
Input : 21
Output :  1 1 2 3 5 8 13 21

*/

function Fibonacci(limit: number): void {
    let fib1 = 1, fib2 = 1;
    console.log(fib1);

    while (fib2 <= limit) {
        console.log(fib2);
        const next = fib1 + fib2;
        fib1 = fib2;
        fib2 = next;
    }
}


const limit = 21;
Fibonacci(limit);
