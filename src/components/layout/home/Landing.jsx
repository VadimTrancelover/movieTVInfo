import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../Spinner';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

function Landing() {

    const loading  = useSelector(({search}) => search.loading)
    console.log(loading)

    return (
        <div className="container">
            <SearchForm />
            {loading ? <Spinner /> : <MovieContainer />}
        </div>
    )
}

export default Landing;
