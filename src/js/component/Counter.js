//import react al bundle
import React from "react";
import propTypes from "prop-types";
//create your first component
// export function Home() {
// 	return (
// 		<div className=" container- fluid text-center mt-5">
// 			<SecondsCounter seconds="20" minutes="20" hour="25" />
// 		</div>
// 	);
// }

export const Counter = props => {
	return (
		<div className="row">
			<div className="far fa-clock fa-3x" id="icono"></div>
			<div className="contador1">{props.numberOne}</div>
			<div className="contador1">{props.numberTwo}</div>
			<div className="contador1">{props.numberThree}</div>
			<div className="contador1">{props.numberFour}</div>
			<div className="contador1">{props.numberFive}</div>
			<div className="contador1">{props.numberSix}</div>
		</div>
	);
};
Counter.propTypes = {
	numberOne: propTypes.number,
	numberTwo: propTypes.number,
	numberThree: propTypes.number,
	numberFour: propTypes.number,
	numberFive: propTypes.number,
	numberSix: propTypes.number
};
