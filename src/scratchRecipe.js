const axios = require('axios');

let results = [
        {
            "id": 578102,
            "title": "Avocado chickpea salad (and a giveaway!)",
            "image": "https://spoonacular.com/recipeImages/578102-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 613079,
            "title": "Smashed White Bean and Avocado Sandwich",
            "image": "https://spoonacular.com/recipeImages/613079-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 669313,
            "title": "Maureen’s Avocado Tabbouleh",
            "image": "https://spoonacular.com/recipeImages/669313-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 248178,
            "title": "Chipotle Lime Grilled Shrimp Salad in Cilantro Lime Dressing",
            "image": "https://spoonacular.com/recipeImages/248178-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 505288,
            "title": "Veggie Wraps with Quinoa",
            "image": "https://spoonacular.com/recipeImages/505288-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 621163,
            "title": "Pesto Pasta with Lemon, Spinach, Edamame & Toasted Almonds",
            "image": "https://spoonacular.com/recipeImages/621163-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 538019,
            "title": "Creamy Ginger Green Smoothie",
            "image": "https://spoonacular.com/recipeImages/538019-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 595916,
            "title": "Spinach Strawberry Salad with Strawberry Vinaigrette",
            "image": "https://spoonacular.com/recipeImages/595916-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 500803,
            "title": "Three Color Pasta with Sun Dried Tomato Sauce",
            "image": "https://spoonacular.com/recipeImages/500803-312x231.jpg",
            "imageType": "jpg"
        },
        {
            "id": 559162,
            "title": "Roasted Potatoes With Garlic Sauce",
            "image": "https://spoonacular.com/recipeImages/559162-312x231.jpg",
            "imageType": "jpg"
        }
    ]





let extendedIngredients = [
        {
            "id": 11215,
            "name": "garlic",
        },
        {
            "id": 4053,
            "name": "olive oil",
        },
        {
            "id": 11297,
            "name": "parsley",
        },
    ]


//
// var arr = [];
// var requests = [];
// var ids = [];
// var titles = [];
//
// results.forEach((item) => {
// 	console.log(item.id)
// 	console.log(item.title)
// 	ids.push(item.id)
// 	titles.push(item.title)
// 	console.log("axios.get(`https://api.spoonacular.com/recipes/" + item.id + "/information?apiKey=API_KEY`)")
// 	arr.push("axios.get(`https://api.spoonacular.com/recipes/" + item.id + "/information?apiKey=API_KEY`)")
// 	});
// console.log("done");
// console.log("arr = " + arr)
// console.log("ids = " + ids)
// console.log("titles = " + titles)
//
// console.log("results.length = " + results.length)
//
// for (x = 0; x < results.length; x ++) {
// 	console.log("x=" + x)
// 	requests.push("response" + x)
// };
//
//
// console.log("requests= " + requests);
//
//
// console.log("const [" + requests + "] = await Promise.all([" + arr + "]);")
//
//
// itemResults.extendedIngredients.forEach((item) => {
// 	console.log(item.name)
// });
// console.log(itemResults.sourceUrl)
// console.log("done");


console.log("----------------------------------------------------");

// var numArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
// var newArray = [];
//
// const funct = async () => {
// 	const firstReq = await console.log("firstReq");
// 		numArray.forEach((item) => {
// 		console.log(" here is: " + item);
// 		newArray.push(item + 1);
// 		});
// 	for (x=0; x < numArray.length; x++) {
// 		console.log("x=" + x)
// 		newArray.push("response" + x)
// 	};
// };
// funct().then((req, result) => {
// 	console.log('success', newArray);
// })
// .catch((error) => { console.log('error', error)});
// ;
//
// console.log("I think I'm done..")
// console.log(newArray)

console.log("----------------------------------------------------");


const letsTryThis = async () => {
// var arr = [];
var ids = [];
var titles = [];
var recResults = [{id: "", title: "", ing: []}]
// var requestss = [];
// var nextReqArray = [];

  // Make first request
  const firstRequest = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=beets`);

  firstRequest.data.results.forEach((item) => {
	ids.push(item.id)
  recResults = item.id;
  recResults.title = item.title;
  // nextReqArray.push(item.id + "a")
	titles.push(item.title)

	// arr.push("axios(`https://api.spoonacular.com/recipes/" + item.id + "/information?apiKey=${API_KEY}`)")
  });

  // console.log(arr);
  // console.log(nextReqArray);


//   for (x=0; x < ids.length; x++) {
//     const nextReqArray[x] = await axios.get(`https://api.spoonacular.com/recipes/${ids[x]}/information?apiKey=${API_KEY}`);
//     nextReqArray[x].data.extendedIngredients.forEach((item) => {
//       console.log(item.name);
//   })
//   return nextReq;
// };

//for each item in ids array, run function below


var individualWords = ["onions", "salt", "beets", "pepper", "cream", "sugar"];
var usedIng = [];
var missedIng = [];


  const nextReq = axios(`https://api.spoonacular.com/recipes/${ids[0]}/information?apiKey=${API_KEY}`);
//   nextReq.data.extendedIngredients.forEach((item) => {
//     console.log(item.name)
//   })
//   console.log("***")
//
//
const nextReq1 = axios(`https://api.spoonacular.com/recipes/${ids[1]}/information?apiKey=${API_KEY}`);
// nextReq1.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
// console.log("***")
//
//
const nextReq2 = axios(`https://api.spoonacular.com/recipes/${ids[2]}/information?apiKey=${API_KEY}`);
// nextReq2.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// const nextReq3 = axios(`https://api.spoonacular.com/recipes/${ids[3]}/information?apiKey=${API_KEY}`);
// const nextReq4 = axios(`https://api.spoonacular.com/recipes/${ids[4]}/information?apiKey=${API_KEY}`);
// const nextReq5 = axios(`https://api.spoonacular.com/recipes/${ids[5]}/information?apiKey=${API_KEY}`);
// const nextReq6 = axios(`https://api.spoonacular.com/recipes/${ids[6]}/information?apiKey=${API_KEY}`);
// const nextReq7 = axios(`https://api.spoonacular.com/recipes/${ids[7]}/information?apiKey=${API_KEY}`);
// const nextReq8 = axios(`https://api.spoonacular.com/recipes/${ids[8]}/information?apiKey=${API_KEY}`);
// const nextReq9 = axios(`https://api.spoonacular.com/recipes/${ids[9]}/information?apiKey=${API_KEY}`);

const [a0, a1, a2
  // a3, a4, a5, a6, a7, a8, a9
] = await Promise.all([nextReq, nextReq1, nextReq2
  // nextReq3, nextReq4, nextReq5, nextReq6, nextReq7, nextReq8, nextReq9
]);
a0.data.extendedIngredients.forEach(function(item){
    individualWords.forEach(function(word){//for each work in individualWords
      if(item.name.match(word)) { //if the individual word is in the ingredient name
        usedIng.push(item.name) //add to used (searched) list
      } else {
        missedIng.push(item.name) //else add to mmissed list
      }
    })
  })
  console.log("usedIng = " + usedIng);
  console.log("missedIng = " + missedIng);

a1.data.extendedIngredients.forEach((item) => {
  console.log(item.name)
})
  console.log("***")
a2.data.extendedIngredients.forEach((item) => {
  console.log(item.name)
})
  console.log("***")
// a3.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a4.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a5.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a6.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a7.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a8.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
// a9.data.extendedIngredients.forEach((item) => {
//   console.log(item.name)
// })
//   console.log("***")
  };



letsTryThis();
