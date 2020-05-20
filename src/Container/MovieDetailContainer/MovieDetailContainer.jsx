/* eslint-disable camelcase */
import React, { Component } from "react";
import {
	Dimmer,
	Loader,
	Grid,
	Image,
	Header,
	Segment,
	Accordion
} from "semantic-ui-react";
import ReactNumberFormat from "react-number-format";

// comments
import Comments from "../../Component/Comments/Comments";
import MovieList from "../MovieListContainer/MovieListContainer";

// const
import URLConst from "../../url/url_list.const";
import { getDataMovieAndConfig, getData } from "../../api/api";
import MovieDetailContainerConst from "./MovieDetailContainer.const";

// styles
import styles from "./MovieDetailContainer.module.scss";

class MovieDetailContainer extends Component {
	// eslint-disable-next-line react/state-in-constructor
	state = {
		movie: null,
		activeIndex: 0,
		reviews: []
	};

	handleClickIndex = (e, titleProps) => {
		const { index } = titleProps;
		const { activeIndex } = this.state;
		const newIndex = activeIndex === index ? -1 : index;

		this.setState({ activeIndex: newIndex });
	};

	getRuntimeText = (runtime) => {
		let runtimeText = "";
		const hours = Math.floor(runtime / 60);
		const minute = Math.floor(runtime - (hours * 60));

		if (hours) {
			runtimeText += `${hours} hour`;
		}
		if (hours && minute) {
			runtimeText += ` and ${minute} minute`;
		}
		if (!hours && minute) {
			runtimeText = `${minute} minute`;
		}

		return runtimeText;
	}

	getSpokenLanguage = (spokenLanguage) => {
		return spokenLanguage.map((language) => <div>{language.name}</div>);
	}

	getProductionCompanies = (companies, url) => companies.map((company) => (
		<Grid columns={2} divided>
			<Grid.Row>
				<Grid.Column>
					<Image size="tiny" src={`${url}original${company.logo_path}`} />
				</Grid.Column>
				<Grid.Column>
					<div>{company.name}</div>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	));

	getGenre = (genres) => genres.map(
		(genre) => <div className={styles.genreItem}>{genre.name}</div>
	);

	setMovieInfo = async (id) => {
		const { movies: { search: { detail } }, config } = URLConst;
		const path = detail.replace(":id", id);

		const { data, imageConfig } = await getDataMovieAndConfig(path, config);

		this.setState({
			movie: data,
			imageConfig
		});
	}

	setMovieReview = async (id) => {
		const { movies: { review } } = URLConst;
		const path = review.replace(":id", id);

		const reviews = await getData(path);

		this.setState({ reviews });
	}

	getData = (id) => {
		this.setMovieInfo(id);
		this.setMovieReview(id);

		// Scroll to top
		window.scrollTo(0, 0);
	}

	// eslint-disable-next-line react/no-deprecated
	componentWillReceiveProps = async (props) => {
		const { id } = props;

		this.setState({
			movie: null
		});

		this.getData(id);
	}

	componentDidMount = async () => {
		const { id } = this.props;

		this.getData(id);
	}

	render = () => {
		const {
			movie,
			imageConfig,
			activeIndex,
			reviews
		} = this.state;

		if (movie && imageConfig) {
			const { secure_base_url } = imageConfig;
			const { movies: { similar } } = URLConst;

			const {
				id,
				budget,
				genres,
				homepage,
				imdb_id,
				title,
				tagline,
				status,
				runtime,
				revenue,
				release_date,
				production_companies: productionCompany,
				production_countries,
				poster_path,
				overview,
				original_title,
				backdrop_path,
				spoken_languages: spokenLanguage,
				vote_average
			} = movie;

			const similarPathUrl = similar.replace(":id", id);

			const posterImage = `${secure_base_url}original${poster_path}`;

			return (
				<div className={styles.movieDetailContainer}>
					<Grid columns={2} divided>
						<Grid.Row>
							<Grid.Column className={styles.imageContainer}>
								<Image src={posterImage} size="large" fluid className={styles.poster}/>
								<div className={styles.genre}>
									{this.getGenre(genres)}
								</div>
							</Grid.Column>
							<Grid.Column>
								<Header textAlign="center" size="large">{title}</Header>
								<hr />
								<Header textAlign="center" sub>{tagline}</Header>
								<Segment placeholder>
									<Header sub size="medium">Overview</Header>
									<p>{overview}</p>
									<p className={styles.moreInfo}>
										<Header sub size="medium">Status</Header>
										{status}
									</p>
									<p className={styles.moreInfo}>
										<Header sub size="medium">Release Date </Header>
										{new Date(release_date).toLocaleDateString()}
									</p>
								</Segment>
								<Accordion fluid styled>
									<Accordion.Title
										active={activeIndex === 0}
										index={0}
										onClick={this.handleClickIndex}
									>
										Total Budget
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 0}>
										<ReactNumberFormat value={budget} displayType="text" thousandSeparator="," prefix="$" />
									</Accordion.Content>
									<Accordion.Title
										active={activeIndex === 1}
										index={1}
										onClick={this.handleClickIndex}
									>
										Total Revenue
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 1}>
										<ReactNumberFormat value={revenue} displayType="text" thousandSeparator="," prefix="$" />
									</Accordion.Content>
									<Accordion.Title
										active={activeIndex === 2}
										index={2}
										onClick={this.handleClickIndex}
									>
										External Link
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 2}>
										<a
											href={`https://www.imdb.com/title/${imdb_id}`}
											target="_blank"
											rel="noopener noreferrer"
										>
											IMDB Link
										</a>
									</Accordion.Content>
									<Accordion.Title
										active={activeIndex === 3}
										index={3}
										onClick={this.handleClickIndex}
									>
										Total Runtime
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 3}>
										{this.getRuntimeText(runtime)}
									</Accordion.Content>
									<Accordion.Title
										active={activeIndex === 4}
										index={4}
										onClick={this.handleClickIndex}
									>
										Language
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 4}>
										{this.getSpokenLanguage(spokenLanguage)}
									</Accordion.Content>
									<Accordion.Title
										active={activeIndex === 5}
										index={5}
										onClick={this.handleClickIndex}
									>
										Production Companies
									</Accordion.Title>
									<Accordion.Content active={activeIndex === 5}>
										{this.getProductionCompanies(productionCompany, secure_base_url)}
									</Accordion.Content>
								</Accordion>
							</Grid.Column>
						</Grid.Row>
					</Grid>
					<Grid>
						<Grid.Row>
							<Accordion fluid styled>
								<Accordion.Title
									active={activeIndex === 6}
									index={6}
									onClick={this.handleClickIndex}
								>
									Reviews
								</Accordion.Title>
								<Accordion.Content active={activeIndex === 6}>
									<Comments reviews={reviews} />
								</Accordion.Content>
							</Accordion>
						</Grid.Row>
						<Grid.Row>
							<MovieList
								name="similar_movies"
								swiperConfig={MovieDetailContainerConst.swiperConfig}
								headerInfo={MovieDetailContainerConst.headerInfo}
								urlPath={similarPathUrl}
							/>
						</Grid.Row>
					</Grid>
				</div>
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

export default MovieDetailContainer;
