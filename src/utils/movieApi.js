import axios from 'axios';

export async function getTrendMovie() {
  try {
    const response = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?api_key=388e7c1d810433186d944819803a330c'
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getQueryMovie(query) {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=388e7c1d810433186d944819803a330c&language=en-US&query=${query}&page=1&include_adult=false`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
}


