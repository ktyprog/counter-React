//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/Counter.js";

//render your react application
let counter = 0;
setInterval(() => {
	const numOne = Math.floor(counter / 100000) % 10;
	const numTwo = Math.floor(counter / 10000) % 10;
	const numThree = Math.floor(counter / 1000) % 10;
	const numFour = Math.floor(counter / 100) % 10;
	const numFive = Math.floor(counter / 10) % 10;
	const numSix = Math.floor(counter / 1) % 10;
	counter++;
	ReactDOM.render(
		<Counter
			numberOne={numOne}
			numberTwo={numTwo}
			numberThree={numThree}
			numberFour={numFour}
			numberFive={numFive}
			numberSix={numSix}
		/>,
		document.querySelector("#app")
	);
}, 1000);
