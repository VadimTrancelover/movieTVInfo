import React from 'react';
import { useSelector} from 'react-redux';

function MovieContainer() {

    const movie = useSelector(({search}) => search.movie)
    return (
        <div>
            
        </div>
    )
}

export default MovieContainer
