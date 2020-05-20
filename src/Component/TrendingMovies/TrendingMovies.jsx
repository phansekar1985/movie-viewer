import React from "react";
import { Header } from "semantic-ui-react";

// Component
import MovieListContainer from "../../Container/MovieListContainer/MovieListContainer";

// Const
import TrendingMovieConst from "./TrendingMovies.const";
import UrlConst from "../../url/url_list.const";

const TrendingMovies = () => {
	const { swiperConfig, headerInfo, name } = TrendingMovieConst;
	const { trending: { today } } = UrlConst.movies;

	return (
		<MovieListContainer
			name={name}
			swiperConfig={swiperConfig}
			headerInfo={headerInfo}
			urlPath={today}
		>
			<Header sub>See List..</Header>
		</MovieListContainer>
	);
};

export default TrendingMovies;
