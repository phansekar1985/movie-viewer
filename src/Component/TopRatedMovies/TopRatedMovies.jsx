import React from "react";

// Component
import MovieListContainer from "../../Container/MovieListContainer/MovieListContainer";

// Const
import TopRatedMovieConst from "./TopRatedMovies.const";
import UrlConst from "../../url/url_list.const";

const TopRatedMovies = () => {
	const { swiperConfig, headerInfo, name } = TopRatedMovieConst;
	const { topRated } = UrlConst.movies;

	return (
		<MovieListContainer
			name={name}
			swiperConfig={swiperConfig}
			headerInfo={headerInfo}
			urlPath={topRated}
		/>
	);
};

export default TopRatedMovies;
