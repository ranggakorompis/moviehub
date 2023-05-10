import axios from 'axios';

const apiKey = '4b813d48920e88172814e13457a8cd35';
const baseUrl = 'https://api.themoviedb.org/3';

export const getMovieList = async () => {
  const movie = await axios.get(`${baseUrl}/movie/popular?api_key=${apiKey}`);
  return movie.data.results;
};

export const getSeriesList = async () => {
  const series = await axios.get(`${baseUrl}/tv/popular?api_key=${apiKey}`);
  return series.data.results;
};

export const searchMovieAndSeries = async q => {
  const search = await axios.get(
    `${baseUrl}/search/multi?api_key=${apiKey}&query=${q}`,
  );
  return search.data;
};
