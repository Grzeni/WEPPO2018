
function create_dec_arr(n) {
    let arr = [];
    let ln = n.toString().split("");
    ln.forEach(element => {
        arr.push(Number(element));
    });
    return arr;
}


function filter_mod(n) {
    let dec_arr = create_dec_arr(n);
    let sum = dec_arr.reduce((x,y) => x+y);
    let mod_every = dec_arr.every(function(element, i ,dec_arr) {
        return n % element === 0;
    })
    if (n % sum === 0 && mod_every) {
        return n;
    } else {
        return 0;
    }
}

function generate_output_set() {
    let generated_set = [];
    for (let i = 0; i < 100000; i++) {
        generated_set.push(filter_mod(i));
    }
    return generated_set.filter(x => (x !== 0));
}
//console.log(filter_mod(1236));
//console.log(filter_mod(345));

console.log(generate_output_set());