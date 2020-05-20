import React from "react";
import { withRouter } from "react-router-dom";

// Component
import MovieDetailContainer from "../../Container/MovieDetailContainer/MovieDetailContainer";

const MovieDetailPage = (props) => {
	const { match: { params: { id } } } = props;

	return <MovieDetailContainer id={id} />;
};

export default withRouter(MovieDetailPage);
