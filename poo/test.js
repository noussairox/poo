/* let k = [
    ["oussama", 12],
    [2, "qouti"], 12, "goat"
];
k.push(["new", 30]);
console.log(k);
alert(k);
*/






/* let k = [
    ["oussama", 12],
    [2, "qouti"], 12, "goat", ["new", 30]
];
k.pop();
console.log(k);
alert(k);
*/






/*
let k = [
    ["oussama", 12],
    [2, "qouti"], 12, "goat", ["new", 30]
];
k.shift();
console.log(k);
alert(k);
*/
/*
let k = [
    []
]
let d = []
let n = prompt("donner la taille de votre tableau : ");
var i, j;

for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
       do whatever with; k[i][j];
    }
}
for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
        d.unshift(Array.from(Array(i), () => new Array(j)));


    }
}
*/
//k.shift();
//k.unshift(["yooo", 23]);

//console.log(d);
//alert(d);
//*************this function to make an 2 dimention array**************************** */
/* function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr
};
*/


//*******************double dimension array*********** */
/*
k = [];
let e = 0;
n = prompt("donner la taille de votre array");
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++) {
        e = Number(prompt("donner un nombre"));
        k.unshift(e);
    }
}
console.log(k);
alert(k);
*/
//*****************switsh case*************** */
/*
function solution(a, b, c) {
    let d;
    k = [];
    d = (Math.pow(d)) - 4 * a * c
    switch (d) {
        case (d > 0):
            let x1;
            x1 = (-b - Math.sqrt(d) / 2 * a * c)
            let x2;
            x2 = (-b + Math.sqrt(d) / 2 * a * c)
            k.push([x1, x2]);
            break;
        case (d == 0):
            let x;
            x = (-b) / 2 * a * c
            k.push(x);
            break;
        case (d < 0):
            console.log("leqaution n'admet aucun solution");
            break;

    }
    return k
}
let r = Number(prompt("donner a"));
let s = Number(prompt("donner b"));
let u = Number(prompt("donner c"));;
console.log(solution(r, s, u));
alert(solution(r, s, u));
*/

//*****************switsh case*************** */
/*
function solution(a, b, c) {

    let d
    j = []
    d = (b ** 2) - 4 * a * c
    if (d > 0) {
        let x1;
        x1 = (-b - Math.sqrt(d) / 2 * a * c)
        let x2;
        x2 = (-b + Math.sqrt(d) / 2 * a * c)

        console.log("les solution sont " + x1 + x2);
    } else if (d == 0) {
        let x;
        x = (-b) / 2 * a * c
        console.log("la solustio est" + x);
    } else {
        console.log("leqaution n'admet aucun solution");
    }
}

let r = Number(prompt("donner a"));
let s = Number(prompt("donner b"));
let u = Number(prompt("donner c"));;
alert(solution(r, s, u));
*/