/* eslint-disable camelcase */
import React from "react";
import { Accordion } from "semantic-ui-react";
import ReactNumberFormat from "react-number-format";

const MoreInfo = (props) => {
	const {
		activeIndex,
		budget,
		revenue,
		runtime,
		spokenLanguage,
		productionCompany,
		secure_base_url,
		imdb_id,
		handleClickIndex,
		getProductionCompanies,
		getSpokenLanguage,
		getRuntimeText
	} = props;

	const imdbLink = `https://www.imdb.com/title/${imdb_id}`;

	getData = (index) => {
		let content = null;
		let title = null;

		switch (index) {
			case 0:
				title = "Total Budget";
				content = <ReactNumberFormat value={budget} displayType="text" thousandSeparator="," prefix="$" />;
				break;
			case 1:
				title = "Total Revenue";
				content = <ReactNumberFormat value={revenue} displayType="text" thousandSeparator="," prefix="$" />;
				break;
			case 2:
				title = "External Link";
				content = (
					<a
						href={imdbLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						IMDB Link
					</a>
				);
				break;
			case 3:
				title = "Total Runtime";
				content = {
					getRuntimeText(runtime)
				};
				break;
			case 4:
				title = "Language";
				content = {
					getSpokenLanguage(spokenLanguage)
				};
				break;
			default:
				break;
		}

		return { content, title };
	};

	return (
		<Accordion fluid styled>
			
			<Accordion.Title
				active={activeIndex === 4}
				index={4}
				onClick={handleClickIndex}
			>
				Language
			</Accordion.Title>
			<Accordion.Content active={activeIndex === 4}>
				{getSpokenLanguage(spokenLanguage)}
			</Accordion.Content>
			<Accordion.Title
				active={activeIndex === 5}
				index={5}
				onClick={handleClickIndex}
			>
				Production Companies
			</Accordion.Title>
			<Accordion.Content active={activeIndex === 5}>
				{getProductionCompanies(productionCompany, secure_base_url)}
			</Accordion.Content>
		</Accordion>
	);
};

export default MoreInfo;
