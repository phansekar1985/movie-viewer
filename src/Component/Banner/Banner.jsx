import React from "react";

// Component
import MovieListContainer from "../../Container/MovieListContainer/MovieListContainer";

// Const
import BannerConst from "./Banner.const";
import LayoutTypeConst from "../../Container/LayoutType.const";
import UrlConst from "../../url/url_list.const";

const Banner = () => {
	const { swiperConfig, headerInfo, name } = BannerConst;
	const { banner } = LayoutTypeConst;
	const { nowPlaying } = UrlConst.movies;

	return (
		<MovieListContainer
			name={name}
			swiperConfig={swiperConfig}
			headerInfo={headerInfo}
			typeOfLayout={banner}
			urlPath={nowPlaying}
		/>
	);
};

export default Banner;
