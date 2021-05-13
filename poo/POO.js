 /* 
  newobject = {
  "name": "oussama",
  "age": 18,
  "branch": "IDSD"
  };
  newobject["life"] = 3444;
  alert(newobject["life"]);
  console.log(newobject);
 */
 /*
  let newobject = {
      "name": "oussama",
      "age": 18,
      "branch": "IDSD"
  };

  function test(val) {
      if (newobject.hasOwnProperty(val)) {
          return newobject[val]
      } else {
          return "not found"
      }
  }
  let add;
  add = prompt("donner une valeur ");
  alert(test(add));
  */
 /* *************************complex objects***************************************
 let complexobject = {
     "car": {
         "inside": {
             "type": "ford",
             "release": 1995,
         },
         "outside": {
             "age": 30,
             "skoot": "waaaa"

         }
     }
 };
 alert(complexobject.car.inside["type"])
 */
 /*
  let tsstobjarray = [{
          "type": "oooooozzz",
          list: [
              "dala7",
              "maticha",
              "hhhhhh"
          ]
      },
      {
          "type": "wiilliii",
          list: [
              "skot",
              "chkun",
              "laaa"
          ]
      }
  ]
  alert(tsstobjarray[1].list[0])
  */
 /*
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
          if (name === cooomplexobject[i].name) {
              return cooomplexobject[i][propriety] || "no propriety found"
          } else {
              return "no name found"
          }
      }
  }
  var x = Lookupprofile("hamid", "age")
  alert(x)
  let nnn;
  nnn = prompt("donner le nom")
  ppp = prompt("donner la propriety");
  let h;
  h = Lookupprofile(nnn, ppp)
  alert(h);
  alert(cooomplexobject[1]["age"])
  */

 /*
  function randNum(n1, n2) {
      return Math.floor(Math.random() * (n2 - n1 + 1) + n1);
  }
  let e;
  while (true) {
      e = randNum(2, 20);
      alert(e);
  }
  */


 ///////anonyme function /arrow functions/
 /*
 let data = (arr1, arr2) => arr1.concat(arr2);
 let e = data([1, 2, 3], [4, 5, 6]);
 alert(e);
 */
 /*

  let e
  e = [3, -54, 21.1, 90, 0, 30];
  const doubbepos = (arr) => {
      let d;
      d = arr.filter(num => Number.isInteger(num) && (num > 0)).map(x => x * x)
      return d
  }

  let j
  j = doubbepos(e);
  alert(j);
  console.log(j);
  */
 //////function with alot of args
 /*
  let sum = (function() {
      return function sum(...args) {
          return args.reduce((a, b) => a + b, 0)
      };
  })();
  alert(sum(1, 2, 3));
  */
 /*
   const car = {
      brand: 'Ford',
      model: 'Fiesta',
      start: function() {
          console.log(`Started 
         ${this.brand} ${this.model}`)
      }
  }

  console.log(car.start());
  */
 const car = {
     brand: 'Ford',
     model: 'Fiesta',
     start: () =>
         console.log(`Started 
       ${car.brand} ${car.model}`)
 }

 console.log(car.start());