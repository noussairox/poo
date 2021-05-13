function asstoarrays(arr) {
    var i = 0;
    arrf = [];
    while (i < arr.length) {
        arrf[i] = arr[i] + 's';
        i++;
    }
    return arrf;
}
let n
n = Number(prompt("donner la taille de votre array"))
let k = [];
for (var i = 0; i < n; i++) {
    k.push(prompt("donner les element  de votre array" + (i + 1)))
}
alert(k);
let e = [];
e = asstoarrays(k);
alert(e);