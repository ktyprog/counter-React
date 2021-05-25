//import react al bundle
import React from "react";
import SecondsCounter from "./SecondsCounter";

//create your first component
// export function Home() {
// 	return (
// 		<div className=" container- fluid text-center mt-5">
// 			<SecondsCounter seconds="20" minutes="20" hour="25" />
// 		</div>
// 	);
// }

function Home({ number }) {
	let arrayNumber = Array.from(String(number), Number);
	return (
		<div>
			<h1>
				{(arrayNumber[1], arrayNumber[0])}

				{/* <div className="Clock">
					<i className="far fa-clock" />
				</div>
				{numbersArray.map((num, i) => (
					<div key={i}> {num}</div>
				))} */}
			</h1>
		</div>
	);
}

export default Home;
