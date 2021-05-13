cooomplexobject = [{
        "name": "oussama",
        "lastname": "qouti",
        "age": 18,
        "job": "none"
    },

    {
        "name": "hamid",
        "lastname": "lmath",
        "age": 30,
        "job": "aaaaa"
    },
    {
        "name": "nouussair",
        "lastname": "abbelou",
        "age": 19,
        "job": "ingenieur dial lhandasa"
    }
];

function Lookupprofile(name, propriety) {


    for (var i = 0; i < cooomplexobject.lenght; i++) {
        if (name === this.cooomplexobject[i].name) {
            return this.cooomplexobject[i][propriety] || "no propriety found"
        } else {
            return "no name found"
        }
    }
}
var x;
x = new Lookupprofile("hamid", "age")
alert(x)
let nnn;
nnn = prompt("donner le nom")
ppp = prompt("donner la propriety");
let h;
h = Lookupprofile(nnn, ppp)
alert(h);
console.log(h);