import React, { Component } from 'react';
import './App.css';
import Navbar from "./components/navbar.component";
import Results from "./components/results.component";
import Search from "./components/search.component";
import Footer from "./components/footer.component";
require("dotenv").config(); //so we can have env vars in the dotenv file

export default class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      // items: [],
      isLoaded: false,
      resultsVisible: false, //are we showing the results page?
      //----------------------------------
      newIng: {key: "", name: ""}, //updates as user types new ingredient
      ingList: [], //updates when user presses "add", adds ingredient to list
      ingListExc: [],
      ingListString: "", //creates clean str for display when user clicks "next" on ing add page
      ingListPaired: [],
      ingListQuery: "", //creates a list to use for the query, on results page
      ingListExcQuery: "",
      diet: "", //veg, vegan, GF, etc..
      chooseDietScreen: true,
      ingScreen: false,
      ingExcScreen: false,
      ingListOrig: [],
      resultsLoading: true
    }

    this.toggleView = this.toggleView.bind(this); //toggles btwn search and results components
    this.onClickDiet = this.onClickDiet.bind(this); //selects diet for this.state.diet
    this.addIng = this.addIng.bind(this); //add ingredient to ingredient list
    this.deleteIng = this.deleteIng.bind(this); //deletes ingredient that was added to ing list
    this.newIngHandleInput = this.newIngHandleInput.bind(this); //handles as user types new ing
    this.ingString = this.ingString.bind(this); //turns ing list to a str
    this.ingListQuery = this.ingListQuery.bind(this); //turns ing list to a str for query search
    this.goBack = this.goBack.bind(this);
    this.next = this.next.bind(this);
    this.onClickDietNull = this.onClickDietNull.bind(this);
    this.resultsLoadingHandler = this.resultsLoadingHandler.bind(this);
  }

toggleView() {
  this.state.resultsVisible ? //if we are on the results page (true)
    this.setState({ //go back to search page, reset all states
      resultsVisible: false,
      resultsLoading: true,
      ingList: [],
      ingListExc: [],
      ingListString: "",
      ingListQuery: "",
      ingListExcQuery: "",
      ingListOrig: [],
      ingListPaired: [],
      diet: "",
      chooseDietScreen: true,
      ingScreen: false,
      ingExcScreen: false
  }) : //if we are on the search page
    this.setState({resultsVisible: true}) //go to the results page, set loadingg to true
}


//======================================================
// INGREDIENT functions
//======================================================

x = []
//adds new ing to list, resets newIng state
//works for adding and excluding ingredients
addIng(e){
  e.preventDefault();
  const newIng = this.state.newIng
  if (newIng.name !== '') { //if there is an input..
    //adds to state depending on which page is showing (add, exclude)
    const ingList = this.state.ingScreen ? [...this.state.ingList, newIng] : [...this.state.ingListExc, newIng] //add to list..
    //adds to state depending on which page is showing (add, exclude)
    this.state.ingScreen ?
    this.setState({ //set add list state and restart
      ingList: ingList,
      newIng: {name: "", key: ""}})
    :
    this.setState({ //set exclude list state and restart
      ingListExc: ingList,
      newIng: {name: "", key: ""}
    })
}}

//as someone types, newIng updates
newIngHandleInput(e) {
  this.setState({
    newIng: {key: Date.now(), name: e.target.value}})
}

deleteIng = key => {
  //depends on which screen they are on...
  const newList = this.state.ingScreen ? this.state.ingList : this.state.ingListExc
  const filteredList = newList.filter(ing => ing.key !== key)
  //depending on which page you're on (add or exclude)
  this.state.ingScreen ? this.setState({ingList: filteredList}) : this.setState({ingListExc : filteredList})
} //takes list, filters so it only shows ing without those keys, resets state

ingString() {
  const ingList = this.state.ingList.map(item => item.name)
  const ingListString = ingList.join(", ")
  this.setState({ingListString: ingListString})
}

//======================================================
// DIET functions
//======================================================



//when you choose a diet you move to the search screen
onClickDiet(e){
  this.setState({
    diet: e.target.value.toLowerCase(), chooseDietScreen: false, ingScreen: true})
}

//if they click omnivore, diet = null (for query string)
onClickDietNull(){
  this.setState({chooseDietScreen: false, ingScreen: true})
}


//======================================================
// SWITCH SEARCH SCREEN functions
//======================================================



//if you go back you go to the diet screen
goBack(e){ //if on ingExcScreen screen, go back to ing screen. else, go back to diet screen
  this.state.ingExcScreen ?
  //back to ing screen from ing exc screen..
  this.setState({ingScreen: true, ingExcScreen: false}) :
  //back to diet screen from ing screen
  this.setState({chooseDietScreen: true, ingScreen: false})
}

//when you click the next button, we go to the ingExcScreen
next(e) { //set state of ing, of ingExcScreen, turn list to string
  this.setState({ingExcScreen: true, ingScreen: false}, () => {this.ingString()})
}


//======================================================
// SUBMIT INGREDIENT functions
//======================================================

//UGH (){ was reseting the app and causing these functions to not run.....
onClickSearch = () => {
 this.toggleView()
 this.ingListQuery()
 //call toggleView, changes the page on app.js
}

resultsLoadingHandler() {
  this.setState({resultsLoading: false})
}

//=======================================================

ingListQuery() {
  //map list of ingredients (included and excluded)
  const ingList = this.state.ingList.map(item => item.name)
  const ingListOrig = [...ingList]
  this.setState({ingListOrig: ingList})
  for (var x=0; x < ingListOrig.length; x++) { //search thru ingList for the #items in ingListOrig
    if (ingList[x].endsWith('s')) { //if the ing ends with "-s"...
      if (ingList[x].endsWith('ies')) { //...ends with "-ies"...
    	   ingList.push(ingList[x].replace('ies', 'y')); //push singular
      } else {
        ingList.push(ingList[x].replace('s', ''))  //push singular
      }
    } else if(ingList[x].endsWith('y')) { //if ends with y...
      ingList.push(ingList[x].replace("y", "ies"))   //...push plural
    } else {
      ingList.push(ingList[x].concat('s')) //if singular, push plural
    }
  }
  var halflen = ingList.length/2
  var ingListPaired = [];
  for (var y=0; y < halflen; y++) {
    ingListPaired.push({item1: ingList[y], item2: ingList[y + halflen]})
  }
  const ingListExc = this.state.ingListExc.map(item => item.name)
  //make them suitable for the query string
  const queryList = ingList.join(",").replace(" ", "+")
  const queryExcList = ingListExc.join(",").replace(" ", "+")
  //set state for both query strings
  this.setState({ingListQuery: queryList, ingListExcQuery: queryExcList, ingList: ingList, ingListPaired: ingListPaired})
  //separates ingredients with ",+", required for query by spoonacular
}

render() {
  return(
    <div>
      <Navbar />
      {/*show either search or results*/}
      <div className="container-app">
      {!this.state.resultsVisible ?
        <Search toggleView={this.toggleView}
        onClickDiet={this.onClickDiet}
        onClickDietNull={this.onClickDietNull}
        newIng = {this.state.newIng}
        ingList = {this.state.ingList}
        ingListExc = {this.state.ingListExc}
        ingString = {this.ingString}
        ingListString = {this.state.ingListString}
        addIng = {this.addIng}
        newIngHandleInput = {this.newIngHandleInput}
        deleteIng = {this.deleteIng}
        chooseDietScreen = {this.state.chooseDietScreen}
        ingScreen = {this.state.ingScreen}
        ingExcScreen = {this.state.ingExcScreen}
        goBack = {this.goBack}
        next = {this.next}
        onClickSearch = {this.onClickSearch}/>
         :
        <Results toggleView={this.toggleView}
        ingList={this.state.ingList}
        ingListPaired={this.state.ingListPaired}
        ingListQuery = {this.state.ingListQuery}
        ingListExcQuery = {this.state.ingListExcQuery}
        ingListString = {this.state.ingListString}
        diet = {this.state.diet}
        resultsLoadingHandler = {this.resultsLoadingHandler}
        resultsLoading = {this.state.resultsLoading}
        />
      }
      </div>
      <Footer/>
    </div>
  )
};

}
