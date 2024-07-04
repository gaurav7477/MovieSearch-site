const API_KEY = '56efbd59';
const API_URL = 'https://www.omdbapi.com/';

export const searchMovies = async (query) => {
  const response = await fetch(`${API_URL}?s=${query}&apikey=${API_KEY}`);
  const data = await response.json();
  return data.Search || [];
};

export const getMovieDetails = async (id) => {
  const response = await fetch(`${API_URL}?i=${id}&apikey=${API_KEY}`);
  const data = await response.json();
  return data;
};
