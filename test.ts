let itemArray = [
    { id: 1, value: 23 },
    { id: 2, value: 30 },
    { id: 3, value: 7 },
    { id: 4, value: 21 }
  ];


  let sum: number = itemArray.map(a => a.value).reduce(function(a, b)
{
  return a + b;
});
console.log(sum);
// expected output: 81
