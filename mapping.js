// map(["ground", "control", "to", "major", "tom"], function(elm) { return elm.length });



function map (array, func) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    var mult = func(array[i]);
    result.push(mult)
  }
return result;
}


// [6, 7, 2, 5, 3]

console.log(map(['plug', 'duster', 'bender'], function(elm) { return elm.length }));

// function map (X,Y) {
//   for(var i = 0; i < X.length; i++)

//   return Y(X);
// }

// console.log(map(['plug', 'duster', 'bender'], function(elm) { return elm.length }));

// function foo(n) {
//   return n * 3;
// }

