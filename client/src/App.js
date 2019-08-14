import React, {Component} from "react";
import {BrowserRouter as Router, Route} from "react-router-dom";
import './App.css';

import Home from "./components/Home.js"; 

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Home />
			</div>
		);
	}
}


export default App;
