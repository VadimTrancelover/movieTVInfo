import axios from 'axios';
import { APIKey } from '../../APIkey';

export const SearchMovie = (text) => (
    {
        type: 'SEARCH_MOVIE',
        payload: text
    }
)

export const fetchMovies = (text) => (dispatch) =>
    {
       axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${text}`)
            .then(responce => {
                dispatch({
                    type: 'FETCH_MOVIES',
                    payload: responce.data.Search
                })
            })
            .catch(err => console.log(err))
    }       

export const fetchMovie = (id) => (dispatch) => 
    {
        axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}`)
            .then(responce => {
                dispatch({
                    type: 'FETCH_MOVIE',
                    payload: responce.data
                })
            })
            .catch(err => console.log(err))
    }

export const setLoading = () => (
    {
        type: 'LOADING'
    }
)
