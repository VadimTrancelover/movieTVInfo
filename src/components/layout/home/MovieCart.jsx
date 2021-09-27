import React from "react";
import { fetchMovie } from '../../../redux/actions/SearchActions';

import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';


function MovieCart(movies) {
    const {Title, Year, imdbID, Poster} = movies.movie;

    const dispatch = useDispatch();

    const onClick = () => {
      dispatch(fetchMovie(imdbID))
    }

  return (
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={Poster} alt="Movie Cover" />
          <h5 className="text-light card-title"> {Title} -{Year} </h5>
          <Link 
            onClick = {onClick}
            className="btn btn-primary" to={'/movie/' + imdbID}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
  );
}

export default MovieCart;
