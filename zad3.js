
function sieve(n) {
    let arr = [];
    let primes = new Array(n).fill(true);
    let p = 2;
    for (let p = 2; p*p <= n; p++) {
        if (primes[p]) {
            for (let i = p*2; i <= n; i += p) {
                primes[i] = false;
            }
        }
    }
    for (let j = 2; j <= n; j++) {
        if (primes[j]) {
             arr.push(j);
        }
    }
    return arr;
}

//console.log(sieve(100000));