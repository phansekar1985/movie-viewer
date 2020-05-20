import React, { Component } from "react";
import { Dimmer, Loader } from "semantic-ui-react";

// Component
import Swiper from "../../Component/Swiper/Swiper";
import SlideList from "../../Component/SlideLayout/SlideList/SlideList";
import CardList from "../../Component/CardLayout/CardList/CardList";

// API
import { getDataMovieAndConfig } from "../../api/api";

// Const
import UrlList from "../../url/url_list.const";
import LayoutTypeConst from "../LayoutType.const";

class MovieListContainer extends Component {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		movieList: [],
		imageConfig: {}
	};

	componentDidMount = async () => {
		const { urlPath } = this.props;
		const { config } = UrlList;
		const { data, imageConfig } = await getDataMovieAndConfig(urlPath, config);

		this.setState({
			movieList: data,
			imageConfig
		});
	}

	render = () => {
		const { movieList: list, imageConfig } = this.state;
		const {
			name,
			swiperConfig,
			headerInfo,
			typeOfLayout = LayoutTypeConst.card
		} = this.props;

		let layout = null;

		if (typeOfLayout === LayoutTypeConst.banner) {
			layout = <SlideList list={list} imageConfig={imageConfig} />;
		} else {
			layout = <CardList list={list} imageConfig={imageConfig} />;
		}

		if (list.length) {
			return (
				<Swiper name={name} header={headerInfo} config={swiperConfig} layoutType={typeOfLayout}>
					{layout}
				</Swiper>
			);
		}

		return (
			<div>
				<Dimmer active inverted>
					<Loader />
				</Dimmer>
			</div>
		);
	}
}

export default MovieListContainer;
