function Somme(t) {
    var S = 0;
    var i = 0;
    while (i < t.length) {
        S += t[i];
        i++;
    }
    return S;
}

function max(tab) {
    let max = tab[1] - tab[0];
    for (let i = 1; i < 6; i++) {
        if (tab[i + 1] - tab[i] > max) {

            max = Math.abs(tab[i + 1] - tab[i])
        }
    }
    return max;
};

let tab = [10, 15, 13, 14, 20, 90];
alert(max(tab))
let a;
a = [10, 15, 13, 28, 90];
let k;
k = Somme(a);
alert(k);