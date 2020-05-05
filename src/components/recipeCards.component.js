import React, { Component } from 'react';

export default class RecipeCard extends Component{
  constructor(props){
    super(props)
    this.state = {

    }

    // // TODO:
    //CREATE MAP FUNCTION TO CREATE EACH card

    //IMPORT RECIPES FROM RESULTS.Component, USE IN MAPPING
    //IN RECIPES Component, LOG LIST OF RECIPES, PULL IN TO THIS
  }

render(props){
  return(
    <div className="main-container" key={this.props.recipe.id}>
      <div className="card-container">
        <div className="card-front">
          <h2>{this.props.recipe.title}</h2>
          <img src={this.props.recipe.img} alt={this.props.recipe.title} />
        </div>
        <div className="card-back">
          <h3 className="results-searched">This recipe uses</h3>
          <p className="results-searched">{this.props.recipe.searchedString}</p>
          <h3 className="results-missed">You'll still need</h3>
          <p className="results-missed">{this.props.recipe.missedString}</p>
          {this.props.recipe.maybeString !== "" ? <div className="results-maybe">
          <h3>You might have</h3>
          <p>{this.props.recipe.maybeString}</p></div> : null}

          <a href={this.props.recipe.sourceUrl} rel="noopener noreferrer" target="_blank">See recipe</a>
        </div>
      </div>
    </div>
  )
}}
