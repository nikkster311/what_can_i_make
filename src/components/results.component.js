import React, { Component } from 'react';
import RecipeCards from "./recipeCards.component";
import axios from 'axios';
require("dotenv").config(); //so we can have env vars in the dotenv file

export default class Results extends Component{
  constructor(props) {
    super(props)
    this.state = {
      // complexResults: [], //data from the complex results search goes here
      // newRecipeIng: {missedIng: [], usedIng: [], maybe: []},
      // newRecipe: {id: "", data: []}, //each individual recipe by data and ID
      // idSearchResults: [],
      ingredientResults: [], //ing by ID
      resultsLoaded: false, //becomes true when page is ready to display results
    }

  this.createCards = this.createCards.bind(this);
  }




//  TODO:
//  create cards
//  fix ing stuff = search functionality not wokring, .match function
//  add testingstring.js here, make it a function that you can iterate through
//  Navbar
//  footer
//  css beasie

// if serached item -ies, serch for same item -y. vice versa. -s, ennds without s. vice versa
// for each item in searched item, add the plural/not plural to the list



  async componentDidMount() {
    var ids = []; //stores ids from initial search (firstReq)
    var titles = []; //stores titles from initial search
    var imgs = []; //stores imgs from initial search
    var ingList = this.props.ingList //easier to work with
    var nextReqList = []; //will fill with axios query strings to search for each recipe ID, to be used in Promise.all(nextReqList)
    var responses = []; //will fill with responses from Promise.all(nextReqList)
    var newRecipe = {id: "", title: "", usedIng: [], img:"", missedIng: [], maybe: [], searchedString: "", summary: "", sourceUrl: "", missedString: ""}; //each individual recipe by data and ID
    // fill this in as we use assessIng, gets reset after each recipe is looked through
    var x; //used to iterate through each ingredient the user searched for
    var reset = () => { newRecipe = {id: "", title: "", usedIng: [], img:"", missedIng: [], maybe: [], searchedString: "", summary: "", sourceUrl: "", missedString: ""}};
    // used to reset newRecipe after each recipe is looked through
    var ingredientResults = []; //store ingredient results for all recipes here, pushed to this.state.ingredientResults at the end of componentDidMount

    const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const queryDiet = (this.props.diet === "" ? "" : `&diet=${this.props.diet}`)  //if dietspecified, add to query string
    const queryString = //`https://api.spoonacular.com/recipes
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&includeIngredients=${this.props.ingListQuery}&excludeIngredients=${this.props.ingListExcQuery}&diet=${queryDiet}`

    const firstReq = await axios.get(queryString,) //run our first request, grab ids of recipes we will use in second request

    //for each recipe, grab id, title, img
    firstReq.data.results.forEach((item) => {
    	ids.push(item.id)
    	titles.push(item.title);
      imgs.push(item.image)
      })

    //use the number of results to determine how many times to iterate through createVars, assessIng
    var num = firstReq.data.number

    //creates a new axios call for each ID grabbed from the initial search (firstReq)
    function createVars(){
      for (var i = 0; i < num; i++) {
        nextReqList[i] = axios(`https://api.spoonacular.com/recipes/${ids[i]}/information?apiKey=${API_KEY}`);
      }
    }



//for each recipe, sort ingredients, create newRecipe, set state, reset newRecipe
  // const [a0, a1, a2] = await Promise.all([nextReq, nextReq1, nextReq2]);

    function assessIng(){
      console.log("RUNNING ASSESSING")
      //for each recipe from the inital search (firstReq)
      for (var i = 0; i<num; i++) {
        // for each ingredient in the current recipe
        responses[i].data.extendedIngredients.forEach((item) => {
          console.log("item = " + item.name)
          //for each ingredient that the user searched for
          for (x=0; x < ingList.length; x++) {
            console.log("x = " + x + ", item = " + item.name)
            console.log("testing ingList.name : " + ingList[x].name)
            if(ingList[x].name === item.name) { //if exact match
              newRecipe.usedIng.push(item.name) //push to usedIng list
              console.log("EXACT MATCH!@!! x=" + x + ", pushing " + item.name + " to usedIng, breaking")
              break; //move on to next ing user searched for
            } else if(item.name.includes(ingList[x].name)) { //if the individual word is in the ingredient name
              newRecipe.maybe.push(item.name) //add to maybe list
              console.log("x=" + x + ", pushing " + item.name + " to maybe, breaking")
              break; //move on to next ing user searched for
            } else if(x === ingList.length-1){ //if you get to the end of the list and there is no match at all
              console.log("x=" + x + ", pushing " + item.name + " to misseding")
              newRecipe.missedIng.push(item.name) //else add to mmissed list
              }
              console.log("assessing done for x = " + x + " , " + ingList[x])
            }
          })
          //after going through an entire recipe, add everything to newRecipe
          newRecipe.searchedString = newRecipe.usedIng.join(', ')
          newRecipe.missedString = newRecipe.missedIng.join(', ')
          newRecipe.maybeString = newRecipe.maybe.join(", ")
          newRecipe.id = ids[i]
          newRecipe.title = titles[i]
          newRecipe.img = imgs[i]
          newRecipe.summary = responses[i].data.summary
          newRecipe.sourceUrl = responses[i].data.sourceUrl
          console.log(newRecipe)
          console.log(  "^^^^^ NEWRECIPE")
          ingredientResults.push(newRecipe); // push to ingredientResults
          reset(); // then reset newRecipe
          console.log(ingredientResults)
          console.log("^^^ INDREDIENTRESULTS")
          //set state and reset vars
          console.log("assessing done for i = " + i + " , " + titles[i])
      }
    }


    //RUN THE FUNCTIONS
    await createVars(num) //create axios calls for each ID from initial request
    await Promise.all(nextReqList).then(function(values) { //axios call for each recipe
      responses = values
    })
    await assessIng() //sort through each ingredient in each recipe

    this.setState({ingredientResults: ingredientResults}, () => console.log("setstate on ingres run, " + this.state.ingredientResults))
    this.setState({resultsLoaded:true}, () => console.log(this.state.resultsLoaded))
      };






      createCards(recipe) {
        return(
          <RecipeCards key = {recipe.id} recipe = {recipe} />
        )
      }




  render(props) {
    const ingRes = this.state.ingredientResults
    {/*create a list we can use*/}
    const mappedCards = ingRes.map(recipe => this.createCards(recipe))
    {/*run each item through function above*/}
    return(
      <div>
      {!this.state.resultsLoaded ?
        <div>
          <h2>loading your recipes........</h2>
        </div>
       :
        <div className="container-flex">
          {mappedCards}
        </div>
      }
        <button type="button" className="btn" onClick={this.props.toggleView}>Start over</button>
      </div>
    )

  }
}
