import React from "react";

// Component
import MovieListContainer from "../../Container/MovieListContainer/MovieListContainer";

// Const
import PopularMovieConst from "./PopularMovies.const";
import UrlConst from "../../url/url_list.const";

const PopularMovies = () => {
	const { swiperConfig, headerInfo, name } = PopularMovieConst;
	const { popular } = UrlConst.movies;

	return (
		<MovieListContainer
			name={name}
			swiperConfig={swiperConfig}
			headerInfo={headerInfo}
			urlPath={popular}
		/>
	);
};

export default PopularMovies;
