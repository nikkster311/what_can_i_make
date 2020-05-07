arr = ["potatoes", "carrot", "chocolate", "apples"]
arr1 = ["potatoes", "carrot", "chocolate", "apples"]
console.log(arr)
arr2 = [...arr]
console.log(arr2 + " = arr2")

  function1 =() => {

    for (var x=0; x < arr1.length; x++) {
console.log("x= " + x)
console.log ("testing" + arr[x])
      if (arr[x].endsWith('s')) {
console.log(arr[x] + " ends with s")
        if (arr[x].endsWith('ies')) {
console.log(arr[x] + " ends with ies")
  	arr.push(arr[x].replace('ies', 'y'));

        } else {
          arr.push(arr[x].replace('s', ''))

        }} else if(arr[x].endsWith('y')) {
console.log(arr[x] + " NOT PLURAL ends with y")
  	arr.push(arr[x].concat("ies"))  

  } else { 
console.log(arr[x] + " MOT PLURAL, adding s")
arr.push(arr[x].concat('s'))

  }
}

var halflen = arr.length/2
console.log("halflen: " + halflen)
console.log(typeof halflen)
var inglistpaired = []
console.log(inglistpaired)

for (y=0; y < halflen; y++) {
  inglistpaired.push({item1: arr[y], item2: arr[y + halflen]})
console.log(inglistpaired)
}

  }


function1(arr);

console.log(arr);
console.log(arr1);
console.log(arr2);
console.log("asdfadsfASDF");

//USE ON LINE 184 OF APP.JS

// "https://api.spoonacular.com/recipes/complexSearch?apiKey=d8e412b1f6d94b408526f35e65f4d432&includeIngredients=chocolate,syrup,waffles,berries,chocolates,syrups,waffle,berry&excludeIngredients=&diet="