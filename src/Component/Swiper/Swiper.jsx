/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Swiper from "swiper";
import { Header } from "semantic-ui-react";

// const
import SwiperConfigConst from "./Swiper.const";
import LayoutType from "../../Container/LayoutType.const";

// styles
import styles from "./Swiper.module.scss";

class SwiperComponent extends Component {
	componentDidMount = () => {
		const { name } = this.props;
		let { config } = this.props;

		config = { ...SwiperConfigConst, ...config };

		// eslint-disable-next-line no-unused-vars
		const swiper = new Swiper(`.swiper-container-${name}`, config);
	}

	render = () => {
		const {
			header:
			{ text, align = "center" },
			name,
			layoutType,
			children
		} = this.props;
		const { swiperContainer, showMore } = styles;

		let showMoreLink = "";

		if (layoutType === LayoutType.card) {
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			showMoreLink = <a className={showMore}>See Entire List </a>;
		}

		return (
			<div className={`${swiperContainer} swiper-container swiper-container-${name}`}>
				<Header size="huge" textAlign={align} sub>{text}</Header>
				<div className="swiper-wrapper">
					{children}
				</div>
				<div className="swiper-pagination" />
				<div className="swiper-button-prev" />
				<div className="swiper-button-next" />
				{showMoreLink}
			</div>
		);
	}
}

export default SwiperComponent;
