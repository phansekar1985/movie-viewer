import React from "react";

// Component
import MovieListContainer from "../../Container/MovieListContainer/MovieListContainer";

// Const
import UpcommingMovieConst from "./UpcommingMovies.const";
import UrlConst from "../../url/url_list.const";

const UpcommingMovies = () => {
	const { swiperConfig, headerInfo, name } = UpcommingMovieConst;
	const { upcomming } = UrlConst.movies;

	return (
		<MovieListContainer
			name={name}
			swiperConfig={swiperConfig}
			headerInfo={headerInfo}
			urlPath={upcomming}
		/>
	);
};

export default UpcommingMovies;
