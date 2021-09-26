import React from "react";
import { Link } from "react-router-dom";

function MovieCart(movies) {
    const {Title, Year, imdbID, Type, Poster} = movies;

    console.log(movies)

  return (
    <div>
      <div className="col-md-3 mb-5">
        <div className="card card-body bg-dark text-center h-100">
          <img className="w-100 mb-2" src={Poster} alt="Movie Cover" />
          <h5 className="text-light card-title"> {Title} -{Year} </h5>
          <Link className="btn btn-primary" to={"/movie/" + ""}>
            Movie Details
            <i className="fas fa-chevron-right" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MovieCart;
