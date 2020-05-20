import React from "react";

// style
import style from "./Badge.module.scss";

const getScoreClass = (score) => {
	let scoreClass = "";

	if (score > 7) {
		scoreClass = "good";
		// eslint-disable-next-line no-else-return
	} else if (score > 6) {
		scoreClass = "average";
	} else {
		scoreClass = "bad";
	}

	return scoreClass;
};

const Badge = (props) => {
	const { vote, layoutType } = props;
	const classList = `${style.vote} ${style[getScoreClass(vote)]} ${style[layoutType]}`;
	let badge = null;

	if (vote) {
		badge = <i className={classList}>{vote}</i>;
	}

	return badge;
};

export default Badge;
