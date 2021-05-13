function createArray(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while (i--) arr[length - 1 - i] = createArray.apply(this, args);
    }

    return arr
};
k = [];
let e = 0;
n = prompt("donner la taille de votre array");
k = createArray(n);
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n - 1; j++) {
        e = Number(prompt("donner un nombre"));
        k += e;
    }
}
console.log(k);
08