import React, { Component } from 'react';

export default class IngAddExc extends Component{

  render() {
    return(

        <form onSubmit={this.props.addIng}>
          <label>I <strong>do not</strong> want these ingredients in my recipe search:</label>
            <input className="ing-form"
              type="text"
              placeholder="add ingredient"
              value={this.props.newIng.name}
              onChange={this.props.newIngHandleInput} />
            <button type="submit" className="btn">Add</button>
        </form>


    )
  }


}
