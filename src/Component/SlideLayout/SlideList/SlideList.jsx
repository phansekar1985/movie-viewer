import React, { Component } from "react";

// Component
import Slide from "../Slide/Slide";

// eslint-disable-next-line react/prefer-stateless-function
class SlideList extends Component {
	render = () => {
		const { list, imageConfig } = this.props;

		return list.map((d) => <Slide key={d.key} data={d} imageConfig={imageConfig} />);
	}
}

export default SlideList;
