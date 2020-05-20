import axios from "axios";

import APIConst from "./api.const";

const { baseURL, apiKey } = APIConst;

const axiosInstance = axios.create({
	baseURL,
	params: {
		api_key: apiKey
	}
});

export const getDataMovieAndConfig = async (moviePath, config) => {
	const { all } = axios;
	const { get } = axiosInstance;

	let data = null;
	let imageConfig = [];

	try {
		const responses = await all(
			[
				get(moviePath, {
					params: {
						api_key: apiKey
					}
				}),
				get(config, {
					params: {
						api_key: apiKey
					}
				})
			]
		);

		if (responses[0].data.results) {
			data = responses[0].data.results;
		} else {
			data = responses[0].data;
		}
		imageConfig = responses[1].data.images;

		return {
			data,
			imageConfig
		};
	} catch {
		return {
			data,
			imageConfig
		};
	}
};

export const getData = async (path) => {
	const { get } = axiosInstance;
	let dataList = [];

	const response = await get(path, {
		params: {
			api_key: apiKey
		}
	});

	if (response.data.results) {
		dataList = response.data.results;
	}

	return dataList;
};


export default axiosInstance;
