import React from 'react';
import { useSelector } from 'react-redux';
import Spinner from '../spinner';
import SearchForm from './SearchForm';
import MovieContainer from './MovieContainer';

function Landing() {

    const { loading } = useSelector(({search}) => search.loading)

    return (
        <div className="container">
            <SearchForm />
            {loading ? <Spinner /> : <MovieContainer />}
        </div>
    )
}

export default Landing;
