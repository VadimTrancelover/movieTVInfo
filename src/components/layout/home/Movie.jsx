import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

function Movie() {

    const selectMovie = useSelector(({search}) => search.movie);
    const isLoaded = useSelector(({search}) => search.loading);

    useEffect(() => {
        
    })


  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={""} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{""}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {""}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {""}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {""}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + ""}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                View on IMDB
              </a>
              <Link to="/" className="btn btn-default text-light">
                Go Back To Search
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Movie;
