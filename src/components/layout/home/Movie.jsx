import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchMovie, setLoading } from "../../../redux/actions/SearchActions";
import Spinner from "../Spinner";

function Movie({ match }) {
  const dispatch = useDispatch();
  const movie = useSelector(({ search }) => search.movie);
  const loading = useSelector(({ search }) => search.loading);

  const {
    Poster,
    Genre,
    Title,
    Released,
    Rated,
    imdbRating,
    Director,
    Writer,
    Actors,
    Plot,
    imdbID,
  } = movie;

  useEffect(() => {
    dispatch(fetchMovie(match.params.id));
    dispatch(setLoading());
  }, []);

  const movieInfo = (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4 card card-body">
            <img src={Poster} className="thumbnail" alt="Poster" />
          </div>
          <div className="col-md-8">
            <h2 className="mb-4">{Title}</h2>
            <ul className="list-group">
              <li className="list-group-item">
                <strong>Genre:</strong> {Genre}
              </li>
              <li className="list-group-item">
                <strong>Released:</strong> {Released}
              </li>
              <li className="list-group-item">
                <strong>Rated:</strong> {Rated}
              </li>
              <li className="list-group-item">
                <strong>IMDB Rating:</strong> {imdbRating}
              </li>
              <li className="list-group-item">
                <strong>Director:</strong> {Director}
              </li>
              <li className="list-group-item">
                <strong>Writer:</strong> {Writer}
              </li>
              <li className="list-group-item">
                <strong>Actors:</strong> {Actors}
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="card card-body bg-dark my-5 text-light">
            <div className="col-md-12">
              <h3>About </h3>
              {Plot}
              <hr />
              <a
                href={"https://www.imdb.com/title/" + imdbID}
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

  let content = loading ? <Spinner /> : movieInfo;
  return <div>{content}</div>;
}

export default Movie;
