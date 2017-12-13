// , { Component } is same as constr Component = React.Component
import React, { Component } from 'react';


// define new class SearchBar and has all functionality that React.Component class has
class SearchBar extends Component {
  // class must have render method that returns JSX
  render() {
    // javascript variables are put in {}; pass event handler onInputChange to the element that we want to watch for the event
    // onChange is a react property
    return <input onChange={this.onInputChange} />;
  }

  // event handler
  onInputChange(event){
    console.log(event);
  }
}

// makes this class available to all other files that import SearchBar
export default SearchBar;
