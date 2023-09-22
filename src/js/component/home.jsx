import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx"
import Card from "./Card.jsx"
import Footer from "./Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const dataCards = [
		{ title: 'First', content: 'First Picsum picture' },
		{ title: 'Second', content: 'Second Picsum picture' },
		{ title: 'Third', content: 'Third Picsum picture' },
		{ title: 'Fourth', content: 'Fourth Picsum picture' }
	]
	return (
		<>
			<Navbar />

			<div class='container'>
				<Jumbotron />


				<div class="container text-center">
					<div class="row">
						{dataCards.map((cardObject, index) => {
							return (
								<Card title={cardObject.title} content={cardObject.content} />
							)
						})}
					</div>
				</div>

			</div>

			<Footer />


		</>
	);
};

export default Home;