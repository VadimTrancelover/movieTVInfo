import React , {useEffect, useState} from 'react'
import { SearchMovie, fetchMovies } from '../../../redux/actions/SearchActions';
import { useDispatch, useSelector} from 'react-redux';

function SearchForm() {
    const dispatch = useDispatch();
    const text = useSelector((state) => state.text)

    // const onChange = (e) => {
    //     dispatch(SearchMovie(e.target.value))
    // }

    const onSubmit = (e) => {
      e.preventDefault();
        dispatch(fetchMovies(text))

    }
    const [inputValue, setInputValue] = useState(''); // Для диспатча значения поля по нажатию кнопки "Search"

    const newValue = (e) => {
        setInputValue(e.target.value)  
    }    

    const handledSearch = (e) => {
        e.preventDefault();
        dispatch(SearchMovie(inputValue));
        dispatch(fetchMovies(text))
        
    }
  


    return (
        <div className="jumbotron jumbotron-fluid mt-5 text-center">
        <div className="container">
          <h1 className="display-4 mb-3">
            <i className="fa fa-search" /> Search for a movie ,TV series ..
          </h1>
          <div className="row">{text}</div>
          <form
          id="searchForm"
          onSubmit={handledSearch}>
            <input
              type="text"
              className="form-control"
              name="searchText"
              placeholder="Search Movies, TV Series ..."
              onChange={newValue}
              
            />
            <button 
            type="submit" 
            className="btn btn-primary btn-bg mt-3"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    )
}

export default SearchForm
