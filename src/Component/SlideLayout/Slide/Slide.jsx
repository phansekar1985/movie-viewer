/* eslint-disable camelcase */
import React from "react";
import { withRouter } from "react-router-dom";
import {
	Grid,
	Image,
	Header,
	Button
} from "semantic-ui-react";

// components
import Badge from "../../Badge/Badge";

// consts
import LayoutType from "../../../Container/LayoutType.const";

// styles
import "./Slide.scss";

const Slide = (props) => {
	const { data, imageConfig, history } = props;
	const {
		id,
		vote_average,
		backdrop_path,
		title,
		overview,
		release_date,
		popularity
	} = data;
	const posterSize = "w780";
	const { secure_base_url } = imageConfig;

	const getScoreClass = (score) => {
		const scoreClass = {
			verdict: "",
			icon: ""
		};

		if (score > 7) {
			scoreClass.verdict = "good";
			scoreClass.icon = "fa-thumbs-up";
		// eslint-disable-next-line no-else-return
		} else if (score > 6) {
			scoreClass.verdict = "average";
			scoreClass.icon = score >= 6.5 ? "fa-thumbs-up" : "fa-thumbs-down";
		} else {
			scoreClass.verdict = "bad";
			scoreClass.icon = "fa-thumbs-down";
		}

		return scoreClass;
	};

	const onClickHandle = () => {
		history.push(`/detail/${id}`);
	};

	const scoreClass = getScoreClass(vote_average);
	const { banner } = LayoutType;

	return (
		<div className="ui container swiper-slide">
			<Grid>
				<Grid.Column width={7}>
					<Image src={`${secure_base_url}${posterSize}${backdrop_path}`} alt={title} fluid bordered />
					<Badge layoutType={banner} vote={vote_average} />
				</Grid.Column>
				<Grid.Column width={8}>
					<Header size="large">{title}</Header>
					<p>{overview}</p>
					<p className="info">
						<span>Release Date:</span>
						{`${new Date(release_date).toLocaleDateString()}`}
					</p>
					<p className="info">
						<span>Popularity:</span>
						{popularity}
					</p>
					<p className="info vote">
						<span>Our Verdict:</span>
						<i className={`far ${scoreClass.icon} ${scoreClass.verdict}`} />
					</p>
					<Button primary className="btn-read-more" onClick={onClickHandle}>Read More</Button>
				</Grid.Column>
			</Grid>
		</div>
	);
};

export default withRouter(Slide);
