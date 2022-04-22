import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers : {
			'X-RapidAPI-Host' : 'bayut.p.rapidapi.com',
			'X-RapidAPI-Key'  : 'fbed4e2f52msh8741126649c25a6p106c76jsnab47ff6f5b06'
		}
	});

	return data;
};
