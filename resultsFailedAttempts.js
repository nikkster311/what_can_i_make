


 // RUN THIS IN FINAL FUNCTION!!!!!!!!!!!!!!!!!!!!!
 // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 //
 // .then(this.resultsLoadedHandler()
 //   // console.log(`props.resultsLoading: ${this.props.resultsLoading}`)
 // )
 //
 // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>




// for (x=0, x < this.state.idSearchResults.length, x++)
// this.state.idSearchResults.data.extractedIngredient[x].map(item =>
//   put item.name in appropriate list)
//





//for each recipe in idstateresults, get id,
 // extractIng() {
 //   console.log("running extractIng")
 //   var recipes = this.state.idSearchResults;
 //   console.log(this.props.string + " : string of props, recipes:  " + recipes.length);
 //   var individualWords = this.props.ingListString.replace(",", " ").split(" "); //breaks string into individual words to use in search
 //   var usedIng, missedIng, i, x;
 //   var reset = () => {
 //     usedIng = "";
 //     missedIng = "";
 //   };
 //   // var i;
 //   // var x;
 //   // var separateIng = []
 //   for (i=0; i < recipes.data.extendedIngredients.length; i++) {//for each ing in a recipe
 //     for (x=0; x < individualWords.length; x++) {//for each work in individualWords
 //       if(recipes.data.extendedIngredients[i].name.match(/individualWords[x]/g)) { //if the individual word is in the ingredient name
 //         usedIng = usedIng.concat(recipes.data.extendedIngredients[i].name) //add to used (searched) list
 //       } else {
 //         missedIng = missedIng.concat(recipes.data.extendedIngredients[i].name) //else add to mmissed list
 //       }
 //     }
 //     this.setState([...this.state.ingredientResults, {ingredientResults: {id: recipes.id, searched: [usedIng], missed: [missedIng]}}],
 //       reset); //set state and reset vars
 //   }
 // }

//this is what we do with the list of recipes returned by componentDidMount
 // ingResultsHandler() {
 //   console.log("running ingResultsHandler..")
 //   const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
 //   this.state.complexResults.results.map(item => //can't do map on a list, but can do it on an array..
 //     axios.get(`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${API_KEY}`)
 //       .then(res => {
 //         this.setState({newIng: {id: item.id, data: res.data.extendedIngredients}}, () => {
 //           //set current ing to newIng
 //           this.setState({idSearchResults: [...this.state.idSearchResults, this.state.newIng]}, () => {
 //             //add newIng to all the search results
 //            this.setState({newIng: {id: "", data: []}})
 //            //reset newIng for next ingredient,
 //          })
 //        })
 //      })
 //    );
 //    //after mapping everything, run extractIng
 //    console.log(this.state.newIng, this.state.idSearchResults)
 //    console.log("ingResultsHandler closing, running extractIng")
 //     this.extractIng();
 // }

  // componentDidMount() {  //lifecycle     axios.get performs an http get req
  //   console.log("running componentDidMount...")
  //   const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
  //   const queryDiet = (this.props.diet === "" ? "" : `&diet=${this.props.diet}`)
  //   const queryString = //`https://api.spoonacular.com/recipes
  //   `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${this.props.ingListQuery}&excludeIngredients=${this.props.ingListExcQuery}&diet=${queryDiet}`
  //   axios.get(queryString,)
  //   .then(res => { //use .then bc axios is promise based
  //     // console.log(queryString + " : " + res); //take results, console.log, setState
  //     this.setState({complexResults: res.data}, () => {this.ingResultsHandler()})
  //     console.log(`this.state.complexResults: ${this.state.complexResults} \n closing componentDidMount`)
  //   })
  //
  //   .catch(err => console.log("error!" + err));
  // }

//USE THIS TO ITERATE THROUGH INGREDIENTS
 // a0.data.extendedIngredients.forEach(function(item){
 //    console.log("testing item " + item)
 //    for (x=0; x < this.props.ingList.length; x++) {//for each work in individualWords
 //    	console.log("testing this.props.ingList.name : " + this.props.ingList[x].name)
 //    	if(this.props.ingList[x].name === item) { //if exact match
 //    	  newRecipeIng.usedIng.push(item)
 //    	  console.log("EXACT MATCH!@!! x=" + x + ", pushing " + item + " to usedIng, breaking")
 //    	  break; //add to used (searched) list
 //    	} else if(item.includes(this.props.ingList[x].name)) { //if the individual word is in the ingredient name
 //        newRecipeIng.maybe.push(item)
 //    	  console.log("x=" + x + ", pushing " + item + " to maybe, breaking")
 //    	  break; //add to maybe (searched) list
 //      } else if(x == ingliststring.length-1){
	//       console.log("x=" + x + ", pushing " + item + " to misseding")
 //        newRecipeIng.missedIng.push(item) //else add to mmissed list
 //        }
 //      }
 //    })
 //    newRecipeIng.searchedString = newRecipeIng.usedIng.join(', ')
 //    newRecipeIng.missedString = newRecipeIng.missedIng.join(', ')
 //    newRecipeIng.maybeString = newRecipeIng.maybe.join(", ")









 //run second requests
   // const nextReq = axios(`https://api.spoonacular.com/recipes/${ids[0]}/information?apiKey=${API_KEY}`);
   // const nextReq1 = axios(`https://api.spoonacular.com/recipes/${ids[1]}/information?apiKey=${API_KEY}`);
   // const nextReq2 = axios(`https://api.spoonacular.com/recipes/${ids[2]}/information?apiKey=${API_KEY}`);
   // const nextReq3 = axios(`https://api.spoonacular.com/recipes/${ids[3]}/information?apiKey=${API_KEY}`);
   // const nextReq4 = axios(`https://api.spoonacular.com/recipes/${ids[4]}/information?apiKey=${API_KEY}`);
   // const nextReq5 = axios(`https://api.spoonacular.com/recipes/${ids[5]}/information?apiKey=${API_KEY}`);
   // const nextReq6 = axios(`https://api.spoonacular.com/recipes/${ids[6]}/information?apiKey=${API_KEY}`);
   // const nextReq7 = axios(`https://api.spoonacular.com/recipes/${ids[7]}/information?apiKey=${API_KEY}`);
   // const nextReq8 = axios(`https://api.spoonacular.com/recipes/${ids[8]}/information?apiKey=${API_KEY}`);
   // const nextReq9 = axios(`https://api.spoonacular.com/recipes/${ids[9]}/information?apiKey=${API_KEY}`);










   //
   //
   //
   //
   //
   //
   //
   //   console.log("running a0")
   //   console.log("this.props " + this.props.ingList)
   //   console.log(this.props.ingList)
   //
   // console.log("ingList = " + ingList)
   //   a0.data.extendedIngredients.forEach((item) => {
   //     console.log("testing item " + item)
   //     console.log(item)
   //     console.log(item.name)
   //     console.log(typeof item.name)
   //     for (x=0; x < ingList.length; x++) {//for each work in individualWords
   //       console.log("x = " + x + ", item = " + item.name)
   //     	console.log("testing ingList.name : " + ingList[x].name)
   //     	if(ingList[x].name === item.name) { //if exact match
   //     	  newRecipe.usedIng.push(item.name)
   //     	  console.log("EXACT MATCH!@!! x=" + x + ", pushing " + item.name + " to usedIng, breaking")
   //     	  break; //add to used (searched) list
   //     	} else if(item.name.includes(ingList[x].name)) { //if the individual word is in the ingredient name
   //         newRecipe.maybe.push(item.name)
   //     	  console.log("x=" + x + ", pushing " + item.name + " to maybe, breaking")
   //     	  break; //add to maybe (searched) list
   //       } else if(x === ingList.length-1){
   // 	      console.log("x=" + x + ", pushing " + item.name + " to misseding")
   //         newRecipe.missedIng.push(item.name) //else add to mmissed list
   //         }
   //       }
   //     })
   //     newRecipe.searchedString = newRecipe.usedIng.join(', ')
   //     newRecipe.missedString = newRecipe.missedIng.join(', ')
   //     newRecipe.maybeString = newRecipe.maybe.join(", ")
   //     newRecipe.id = ids[0]
   //     newRecipe.title = titles[0]
   //     newRecipe.img = imgs[0]
   //     newRecipe.summary = a0.data.summary
   //     newRecipe.sourceUrl = a0.data.sourceUrl
   //     console.log(newRecipe.id, newRecipe.title, newRecipe.img, newRecipe.missedString, newRecipe.searchedString)
   //     this.setState(
   //       { ingredientResults: [...this.state.ingredientResults, newRecipe] },
   //       reset()); //set state and reset vars
   //     ;
   //
   //     a1.data.extendedIngredients.forEach((item) => {
   //       console.log("testing item " + item)
   //       console.log(item)
   //       console.log(item.name)
   //       console.log(typeof item.name)
   //       for (x=0; x < ingList.length; x++) {//for each work in individualWords
   //         console.log("x = " + x + ", item = " + item.name)
   //       	console.log("testing ingList.name : " + ingList[x].name)
   //       	if(ingList[x].name === item.name) { //if exact match
   //       	  newRecipe.usedIng.push(item.name)
   //       	  console.log("EXACT MATCH!@!! x=" + x + ", pushing " + item.name + " to usedIng, breaking")
   //       	  break; //add to used (searched) list
   //       	} else if(item.name.includes(ingList[x].name)) { //if the individual word is in the ingredient name
   //           newRecipe.maybe.push(item.name)
   //       	  console.log("x=" + x + ", pushing " + item.name + " to maybe, breaking")
   //       	  break; //add to maybe (searched) list
   //         } else if(x === ingList.length-1){
   //   	      console.log("x=" + x + ", pushing " + item.name + " to misseding")
   //           newRecipe.missedIng.push(item.name) //else add to mmissed list
   //           }
   //         }
   //       })
   //       newRecipe.searchedString = newRecipe.usedIng.join(', ')
   //       newRecipe.missedString = newRecipe.missedIng.join(', ')
   //       newRecipe.maybeString = newRecipe.maybe.join(", ")
   //       newRecipe.id = ids[1]
   //       newRecipe.title = titles[1]
   //       newRecipe.img = imgs[1]
   //       newRecipe.summary = a1.data.summary
   //       newRecipe.sourceUrl = a1.data.sourceUrl
   //       console.log(newRecipe.id, newRecipe.title, newRecipe.img, newRecipe.missedString, newRecipe.searchedString)
   //       this.setState(
   //         { ingredientResults: [...this.state.ingredientResults, newRecipe] },
   //         reset()); //set state and reset vars
   //       ;
   //
   //       a2.data.extendedIngredients.forEach(function(item){
   //           for (x=0; x < individualWords.length; x++) {//for each work in individualWords
   //             if(item.name.match(/individualWords[x]/g)) { //if the individual word is in the ingredient name
   //               newRecipe.usedIng.push(item.name) //add to used (searched) list
   //             } else {
   //               newRecipe.missedIng.push(item.name) //else add to mmissed list
   //             }
   //           }
   //         })
   //         console.log(newRecipe.usedIng)
   //         console.log(newRecipe.missedIng)
   //         newRecipe.id = ids[2]
   //         newRecipe.title = titles[2]
   //         newRecipe.img = imgs[2]
   //         newRecipe.summary = a2.data.summary
   //         newRecipe.sourceUrl = a2.data.sourceUrl
   //         newRecipe.searchedString = newRecipe.usedIng.join(', ')
   //         newRecipe.missedString = newRecipe.missedIng.join(', ')
   //         console.log(newRecipe.id, newRecipe.title, newRecipe.img, newRecipe.missedString, newRecipe.searchedString)
   //         this.setState(
   //           { ingredientResults: [...this.state.ingredientResults, newRecipe] },
   //           reset()); //set state and reset vars
   //         ;



     // a1.data.extendedIngredients.forEach((item) => {
     //   console.log(item.name)
     // }),
     //   console.log("***"),
     // a2.data.extendedIngredients.forEach((item) => {
     //   console.log(item.name)
     // })
     //   console.log("***")
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





























     // ingResultsHandler
       // .then(res => res.json()) //use .then bc axios is promise based
       //   .then(json => {
       //     this.setState({results: json})})
       //     .then(console.log(`this.state.results: ${this.state.results}`))
       //       .then(this.resultsLoadedHandler()
       //     // console.log(`props.resultsLoading: ${this.props.resultsLoading}`)
       //   )

       // loadIngUsed(recipe) {
       //   var i;
       //   for (i=0; i < recipe.usedIngredients.length; i++) {
       //     return <p style={{color: "green"}}>{recipe.usedIngredients[i].name}</p>
       //   }
       // }
       //
       //
       // loadIngMissed(recipe) {
       //   var i;
       //   for (i=0; i < recipe.missedIngredients.length; i++) {
       //     return <p style={{color: "red"}}>{recipe.missedIngredients[i].name}</p>
       //   }
       // }




     //this.props.ingListQuery = list of ing for query
