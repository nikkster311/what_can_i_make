import React, { Component } from 'react';

export default class IngListExc extends Component{
  constructor(props){
    super(props)

    this.createList.bind(this);
  }

//this formats all the ingredients passed as props
  createList(ing) {
    return(
      <li className="container-ing-flex" key={ing.key}>
        <p>{ing.name}</p>
        <button className="btn" type="button" onClick={() => this.props.deleteIng(ing.key)}>delete</button>
      </li>
    )
  }

  render(props) {
    const ingListExc = this.props.ingListExc
    {/*create a list we can use*/}
    const mappedIngs = ingListExc.map(ing => this.createList(ing))
    {/*run each item through function above*/}
    return(
    //return below
      <div>
        <form>
          {/*onClick goes to final screen*/}
            <ul className="mappedIngs container-flex">{mappedIngs}</ul>
            <h5>Searcing for recipes with:</h5>
            <h6>{this.props.ingListString}</h6>
          <button className="btn" onClick={this.props.onClickSearch}>Search</button>
        </form>
      </div>


    )
  }


}
