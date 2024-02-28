import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
const apiKey = '3cc9a88ec300e48a658908c57523e58b';

export const fetchFilms = async (configParams = {}) => {
  try {
    const { data } = await axios.get('/3/trending/all/day', {
      params: {
        api_key: apiKey,
        language: 'en-US',

        ...configParams,
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching trending movies:', error);
    throw error;
  }
};
export const fetchDetails = async (configParams = {}) => {
  try {
    const { data } = await axios.get(`/3/movie/${configParams.movie_id}`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
    });
    const movieDetails = {
      title: data.title,
      overview: data.overview,
      image: `https://image.tmdb.org/t/p/w500${data.poster_path}`,
      genres: data.genres.map(genre => genre.name).join(', '),
      userScore: data.vote_average,
    };

    return movieDetails;
  } catch (error) {
    console.error('Error fetching movie details:', error);
    throw error;
  }
};
export const fetchCast = async movieId => {
  try {
    const { data } = await axios.get(`/3/movie/${movieId}/credits`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
      },
    });

    return data.cast.map(actor => ({
      id: actor.id,
      name: actor.name,
      character: actor.character,
      profile_path: actor.profile_path
        ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
        : null,
    }));
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};
export const fetchReviews = async movieId => {
  try {
    const { data } = await axios.get(`/3/movie/${movieId}/reviews`, {
      params: {
        api_key: apiKey,
        language: 'en-US',
        page: 1,
      },
    });

    return data;
  } catch (error) {
    console.error('Error fetching movie cast:', error);
    throw error;
  }
};
