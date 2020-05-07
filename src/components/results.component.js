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
      noResults: false,
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
    var num;
    var ingListPaired = this.props.ingListPaired //easier to work with
    var nextReqList = []; //will fill with axios query strings to search for each recipe ID, to be used in Promise.all(nextReqList)
    var responses = []; //will fill with responses from Promise.all(nextReqList)
    var newRecipe = {id: "", title: "", usedIng: [], img:"", missedIng: [], maybe: [], searchedString: "", sourceUrl: "", missedString: ""}; //each individual recipe by data and ID
    // fill this in as we use assessIng, gets reset after each recipe is looked through
    var reset = () => { newRecipe = {id: "", title: "", usedIng: [], img:"", missedIng: [], maybe: [], searchedString: "", sourceUrl: "", missedString: ""}};
    // used to reset newRecipe after each recipe is looked through
    var ingredientResults = []; //store ingredient results for all recipes here, pushed to this.state.ingredientResults at the end of componentDidMount

    const API_KEY = process.env.REACT_APP_SPOONACULAR_API_KEY;
    const queryDiet = (this.props.diet === "" ? "" : `&diet=${this.props.diet}`)  //if dietspecified, add to query string
    const queryString = //`https://api.spoonacular.com/recipes
    `https://api.spoonacular.com/recipes/complexSearch?number=10&apiKey=${API_KEY}&includeIngredients=${this.props.ingListQuery}&excludeIngredients=${this.props.ingListExcQuery}&diet=${queryDiet}`

    //run our first request, grab ids of recipes we will use in second request

      const firstReq = await axios
        .get(queryString,)
        .catch(err => {
          console.log("ERROR : " + err)
          this.setState({noResults: true, resultsLoaded: true})
        });


    //if no results are returned, ask user to try again.
    if (firstReq.data.totalResults === 0){
      this.setState({noResults: true, resultsLoaded: true})
    } else { //if results are returned, run everything below.

    //for each recipe, grab id, title, img
    firstReq.data.results.forEach((item) => {
    	ids.push(item.id)
    	titles.push(item.title);
      imgs.push(item.image)
      })

    //use the number of results to determine how many times to iterate through createVars, assessIng
    if (firstReq.data.totalResults < 11) {
      num = firstReq.data.totalResults
    } else { num = 10 }

    //creates a new axios call for each ID grabbed from the initial search (firstReq)
    const createVars = () => {
      for (let i = 0; i < num; i++) {
        nextReqList[i] = axios(`https://api.spoonacular.com/recipes/${ids[i]}/information?apiKey=${API_KEY}`)
          .catch(err => {
              this.setState({noResults: true, resultsLoaded: true})
            });
      }
    }


  //for each recipe, sort ingredients, create newRecipe, set state, reset newRecipe
    function assessIng(){
      //for each recipe from the inital search (firstReq)
      for (var i = 0; i<num; i++) {
        // for each ingredient in the current recipe
        responses[i].data.extendedIngredients.forEach((item) => {
          //for each pair of ingredients (plural and not) that the user searched for
          for (var x=0; x < ingListPaired.length; x++) {
            if(ingListPaired[x].item1 === item.name || ingListPaired[x].item2 === item.name ) { //if exact match
              newRecipe.usedIng.push(item.name) //push to usedIng list
              break; //move on to next ing user searched for
            } else if(item.name.includes(ingListPaired[x].item1) || item.name.includes(ingListPaired[x].item2)) { //if the individual word is in the ingredient name
              newRecipe.maybe.push(item.name) //add to maybe list
              break; //move on to next ing user searched for
            } else if(x === ingListPaired.length-1){ //if you get to the end of the list and there is no match at all
              newRecipe.missedIng.push(item.name) //else add to mmissed list
              }
            }
          })
          //after going through an entire recipe, add everything to newRecipe
          newRecipe.searchedString = newRecipe.usedIng.join(', ')
          newRecipe.missedString = newRecipe.missedIng.join(', ')
          newRecipe.maybeString = newRecipe.maybe.join(", ")
          newRecipe.id = ids[i]
          newRecipe.title = titles[i]
          newRecipe.img = imgs[i]
          newRecipe.sourceUrl = responses[i].data.sourceUrl
          ingredientResults.push(newRecipe); // push whole recipe to ingredientResults
          reset(); // then reset newRecipe
      }
    }

    //RUN THE FUNCTIONS
    await createVars(num) //create axios calls for each ID from initial request
    await Promise.all(nextReqList).then(function(values) { //axios call for each recipe
      responses = values
    })
    await assessIng() //sort through each ingredient in each recipe

    this.setState({ingredientResults: ingredientResults, resultsLoaded: true})
    // this.setState({resultsLoaded:true})
  }};






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
       <div>
       {this.state.noResults ?
         <h2>You search returned no results. Please try again with different ingredients.</h2>
         :
        <div className="container-flex">
          {mappedCards}
        </div>
      }
      </div>
    }
            <button type="button" className="btn" onClick={this.props.toggleView}>Start over</button>
      </div>
    )

  }
}
