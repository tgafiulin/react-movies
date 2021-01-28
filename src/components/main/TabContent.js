import React, { Fragment } from 'react'
import MovieList from './MovieList'
import GenresList from './GenreList'
import ChannelList from './ChannelList'

function TabContent(props) {
    if (props.showMovies) {
        return (
            <Fragment>
                <h2><img src="/icon/fire.svg" alt=""/> Новинки</h2>
                <MovieList />
                <h2>Жанры</h2>
                <GenresList />
            </Fragment>
        );
    }
    return <ChannelList />;
}

export default TabContent;