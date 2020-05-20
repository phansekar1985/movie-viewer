import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

// component
import Navbar from "./Component/Navbar";
import LandingPage from "./Page/LandingPage/LandingPage";
import MovieDetailPage from "./Page/MovieDetailPage/MovieDetailPage";

// styles
import classes from "./App.module.scss";

function App() {
	const { main } = classes;

	return (
		<>
			<Router>
				<Navbar />
				<Container className={main}>
					<Route path="/detail/:id" component={MovieDetailPage} exact />
					<Route path="/" component={LandingPage} exact />
				</Container>
			</Router>
		</>
	);
}

export default App;
