import React, { useEffect } from 'react';
import { useSelector} from 'react-redux';
import MovieCart from './MovieCart';

function MovieContainer() {

    const movies  = useSelector(({search}) => search.movies);

    const newMovies = JSON.parse(JSON.stringify(movies));

    let content = '';

    content = movies.length > 0 ? movies.map((movie, index) => <MovieCart key={index} movie={movie}/>) : null;
    console.log(movies);
    console.log(movies.length);
    console.log(newMovies.length)

    return (
        <div className="row">
            {content}
        </div>
    )
}

export default MovieContainer
