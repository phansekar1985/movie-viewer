import React from "react";

// component
import Banner from "../../Component/Banner/Banner";
import TrendingMovies from "../../Component/TrendingMovies/TrendingMovies";
import PopularMovies from "../../Component/PopularMovies/PopularMovies";
import TopRatedMovies from "../../Component/TopRatedMovies/TopRatedMovies";
import UpcommingMovies from "../../Component/UpcommingMovies/UpcommingMovies";


const LandingPage = () => (
	<>
		<Banner />
		<TrendingMovies />
		<PopularMovies />
		<TopRatedMovies />
		<UpcommingMovies />
	</>
);

export default LandingPage;
