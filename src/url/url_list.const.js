const URLListConst = {
	movies: {
		nowPlaying: "movie/now_playing",
		trending: {
			today: "trending/movie/day"
		},
		genre: "genre/movie/list",
		similar: "movie/:id/similar",
		search: {
			query: "search/multi",
			detail: "movie/:id"
		},
		popular: "movie/popular",
		topRated: "movie/top_rated",
		latest: "movie/latest",
		upcomming: "movie/upcoming",
		keywords: "movie/:id/keywords",
		review: "movie/:id/reviews"
	},
	config: "configuration"
};

export default URLListConst;
