var input = [
  { x: 3, y: 4 },
  { x: 12, y: 5 },
  { x: 8, y: 15 }
];

// Console.logged the 
var result = input.map(function(input) {
  var demo2 = Math.pow((input.x), 2);
  var demo3 = Math.pow((input.y), 2);
  var demo4 = demo2 + demo3;
  var demo5 = Math.sqrt(demo4);
    return demo5;
});

console.log(result[0] === 5);
console.log(result[1] === 13);
console.log(result[2] === 17);