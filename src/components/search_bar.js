// , { Component } is same as constr Component = React.Component
import React, { Component } from 'react';


// define new class SearchBar and has all functionality that React.Component class has
class SearchBar extends Component {
  // this function gets called every time instantiated
  constructor(props) {
    // Component already has constructor, and parent constructor is called w 'super'
    super(props);

    // define state as new object w term property
    this.state = { term: '' };
  }
  // class must have render method that returns JSX
  render() {
    // javascript variables are put in {}; pass event handler onInputChange to the element that we want to watch for the event
    // onChange is a react property
    // never set state like this.state.term = 'hi' -- use setState; but state can be referenced to get current state like this.state.term
    return (
      <div>
        <input onChange={(event) => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

// makes this class available to all other files that import SearchBar
export default SearchBar;
