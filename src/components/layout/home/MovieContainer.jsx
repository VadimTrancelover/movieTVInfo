import React from 'react';
import { useSelector} from 'react-redux';
import MovieCart from './MovieCart';

function MovieContainer() {

    const movies  = useSelector(({search}) => search.movies);
    let content = '';

    content = movies.length > 0 ? movies.map((movie, index) => <MovieCart key={index} movie={movie}/>) : null;

    return (
        <div className="row">
            {content}
        </div>
    )
}

export default MovieContainer
