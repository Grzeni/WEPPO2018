
function rec_fib(n) {
    if (n === 0)
        return 0;
    else if (n === 1)
        return 1;
    else 
        return rec_fib(n-1) + rec_fib(n-2);
}

function iter_fib(n) {
    if (n === 0) 
        return 0;
    if (n === 1) 
        return 1;
    let f0 = 0;
    let f1 = 1;
    for (let i = 2; i < n+1; i++) {
        m = f0 + f1;
        f0 = f1;
        f1 = m;
    }
    return f1;  
}

console.time("recursive n = 10");
rec_fib(10);
console.timeEnd("recursive n = 10");
console.time("recursive n = 20");
rec_fib(20);
console.timeEnd("recursive n = 20");
console.time("recursive n = 35");
rec_fib(35);
console.timeEnd("recursive n = 35");
console.time("iterative n = 10");
iter_fib(10);
console.timeEnd("iterative n = 10");
console.time("iterative n = 20");
iter_fib(20);
console.timeEnd("iterative n = 20");
console.time("iterative n = 35");
iter_fib(35);
console.timeEnd("iterative n = 35");
console.time("iterative n = 99");
iter_fib(99);
console.timeEnd("iterative n = 99");