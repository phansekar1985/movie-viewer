/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable camelcase */
import React from "react";
import { withRouter } from "react-router-dom";
import { Card } from "semantic-ui-react";

// component
import Badge from "../../Badge/Badge";

// style
import "./Card.scss";

// const
import LayoutTypeConst from "../../../Container/LayoutType.const";

const CardComponent = (props) => {
	const {
		item,
		imageConfig,
		history
	} = props;

	const { secure_base_url } = imageConfig;
	const {
		id,
		title,
		vote_average,
		poster_path
	} = item;

	const imageUrl = `${secure_base_url}w185${poster_path}`;
	const { card } = LayoutTypeConst;

	const onClickHandle = () => {
		history.push(`/detail/${id}`);
	};

	return (
		<div className="swiper-slide card" onClick={() => onClickHandle()}>
			<Card
				header={title}
				image={imageUrl}
			/>
			<Badge layoutType={card} vote={vote_average} />
		</div>
	);
};

export default withRouter(CardComponent);
