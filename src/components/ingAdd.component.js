import React, { Component } from 'react';

export default class IngAdd extends Component{

  render() {
    return(

        <form onSubmit={this.props.addIng}>
          <label>Add an ingredient to the list:</label>
            <input
              className="ing-form"
              type="text"
              placeholder="add ingredient"
              value={this.props.newIng.name}
              onChange={this.props.newIngHandleInput} />
            <button type="submit" className="btn">Add</button>
        </form>


    )
  }


}
