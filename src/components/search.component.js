import React, { Component } from 'react';
import axios from 'axios';
import IngList from "./ingList.component";
import IngAdd from "./ingAdd.component";
import IngListExc from "./ingListExc.component";
import IngAddExc from "./ingAddExc.component";

//this screen comes up first. users can choose one diet, then auto goes to ing screen
const PickDiet = props => (
  <div>
  <h2>Wonder what you can make with the ingredients you have on hand?</h2>
  <h2>Let's find out.</h2>
  <form className="form-group diet">
    <label>Start by selecting a diet:</label>
    <div className="container-flex">
      <input type="button" id="omnivore" value="Omnivore" onClick={props.onClickDietNull} className="btn" />
      <input type="button" id="glutenfree" value="Gluten Free" onClick={props.onClick} className="btn" />
      <input type="button" id="vegetarian" value="Vegetarian" onClick={props.onClick} className="btn" />
      <input type="button" id="vegan" value="Vegan" onClick={props.onClick} className="btn" />
      <input type="button" id="pescatarian" value="Pescatarian" onClick={props.onClick} className="btn" />
      <input type="button" id="paleo" value="Paleo" onClick={props.onClick} className="btn" />
    </div>
  </form>
  </div>
)


//comes last. can choose if they want to inc all ing or just some of the ones listed
// const IncWhichIngredients = props => (
//
//   <div>
//     <h3>Make sure my results include</h3>
//     <button onClick={props.onClickAll}>all</button>
//     <button onClick={props.onClickSome}>some</button>
//     <h3>of the ingredients listed</h3>
//     <p>{props.ingListString}</p>
//   </div>
// )

//comes after diet screen. inc back and next buttons. like a to do list component.
export default class Search extends Component{

  render() {
    return(
      <div>
      {/*each screen is only based on chooseDietScreen, ingScreen, finalScreen,
        functions change state*/}
        {/*if first screen, PickDiet displayed*/}
        {this.props.chooseDietScreen && <PickDiet
          onClick={this.props.onClickDiet}
          onClickDietNull={this.props.onClickDietNull} />}
        {/*if diet chosen, ingScreen(add form and list) displayed*/}
        {this.props.ingScreen &&
          <div>
            <IngAdd addIng={this.props.addIng}
            newIngHandleInput={this.props.newIngHandleInput}
            newIng={this.props.newIng}
            />
            <IngList ingList={this.props.ingList}
            deleteIng = {this.props.deleteIng}
            next={this.props.next} />
          </div>}
        {this.props.ingExcScreen &&
          <div>
            <IngAddExc addIng={this.props.addIng}
            newIngHandleInput={this.props.newIngHandleInput}
            newIng={this.props.newIng}
            />
            <IngListExc ingListExc={this.props.ingListExc}
            deleteIng = {this.props.deleteIng}
            onClickSearch = {this.props.onClickSearch}
            ingListString = {this.props.ingListString} />
          </div>}
        {/*button is only showed if chooseDietScreen is false*/}
        {!this.props.chooseDietScreen && <button className="btn" onClick={this.props.goBack}>Go Back</button>}
      </div>


    )
  }
}
