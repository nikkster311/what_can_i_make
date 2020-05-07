// //for each recipe in idstateresults, get id,
//  extractIng() {
//    console.log("running extractIng")
//    var recipes = this.state.idSearchResults;
//    console.log(this.props.string + " : string of props, recipes:  " + recipes.length);
//    var individualWords = this.props.ingListString.replace(",", " ").split(" "); //breaks string into individual words to use in search
//    var usedIng, missedIng, i, x;
//    var reset = () => {
//      usedIng = "";
//      missedIng = "";
//    };
//    // var i;
//    // var x;
//    // var separateIng = []
//    for (i=0; i < recipes.data.extendedIngredients.length; i++) {//for each ing in a recipe
//      for (x=0; x < individualWords.length; x++) {//for each work in individualWords
//        if(recipes.data.extendedIngredients[i].name.match(/individualWords[x]/g)) { //if the individual word is in the ingredient name
//          usedIng = usedIng.concat(recipes.data.extendedIngredients[i].name) //add to used (searched) list
//        } else {
//          missedIng = missedIng.concat(recipes.data.extendedIngredients[i].name) //else add to mmissed list
//        }
//      }
//      this.setState([...this.state.ingredientResults, {ingredientResults: {id: recipes.id, searched: [usedIng], missed: [missedIng]}}],
//        reset); //set state and reset vars
//    }
//  }
//
// //this is what we do with the list of recipes returned by componentDidMount
//  ingResultsHandler() {
//    console.log("running ingResultsHandler..")
//    const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
//    this.state.complexResults.results.map(item => //can't do map on a list, but can do it on an array..
//      axios.get(`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${API_KEY}`)
//        .then(res => { //set ing to newIng, setState of results
//          var newIng: {id: item.id, data: res.data.extendedIngredients}
//          this.setState({idSearchResults: [...this.state.idSearchResults, newIng]}, () => {
//           })
//         })
//         .then(
//           var individualWords = this.props.ingListString.replace(",", " ").split(" "); //breaks string into individual words to use in search
//           var usedIng, missedIng, i, x;
//         )
//     //after mapping everything, run extractIng
//     console.log(this.state.newIng, this.state.idSearchResults)
//     console.log("ingResultsHandler closing, running extractIng")
//      this.extractIng();
//  }
//
//   componentDidMount() {  //lifecycle     axios.get performs an http get req
//     const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
//     const queryDiet = (this.props.diet === "" ? "" : `&diet=${this.props.diet}`)
//     axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${this.props.ingListQuery}&excludeIngredients=${this.props.ingListExcQuery}${queryDiet}`)
//     .then(res => { //use .then bc axios is promise based
//       this.setState({complexResults: res.data}, () => {this.ingResultsHandler()})
//     })
//
//     .catch(err => console.log("error!" + err));
//   }
//
//
//
//
//
// find recipes
// find ingredients
// organize ingredients
//
//
//
// async componentDidMount() {
//   const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
//   const getRecipes = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${this.props.ingListQuery}&excludeIngredients=${this.props.ingListExcQuery}${queryDiet}`)
//   const getIng = await axios.get(`https://api.spoonacular.com/recipes/${item.id}/information?apiKey=${API_KEY}`)
//
// }
