import React from "react";

// component
import Card from "../Card/Card";

const CardList = (props) => {
	const { list, imageConfig } = props;

	return list.map((item) => <Card key={item.id} item={item} imageConfig={imageConfig} />);
};

export default CardList;
