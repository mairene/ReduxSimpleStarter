// Explicitly say you want access to React module in this file. Find library 'react' and assign to variable React
import React from 'react';
import ReactDOM from 'react-dom';

// SearchBar = to component defined in search_bar
// files must have relative path vs. packages are namespaced
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC7qdDmQsOFBDXRN0imvOle1w9Qciq3uAU';


// Create a new component. This comp should produce some HTML.

// ES6 const = declaring a variable that is the final variable; it's constant
// App is a class, not an instance; can create instances eg. <App />
// ES6 () => is equivalent to function() except def of 'this' is different
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}

// Take this comp's generated HTML and put it on the page (in the DOM).
ReactDOM.render(<App />, document.querySelector('.container'));
