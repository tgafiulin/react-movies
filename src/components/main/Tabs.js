import React, { Fragment, useState } from 'react';
import TabContent from './TabContent'


function Tabs () {
    const [showMovies, toggleShowMovies] = useState(true);

    return (
        <Fragment>
            <div className="tabs">
                <div className={showMovies ? 'tab tab--active' : 'tab'} onClick={() => toggleShowMovies(true)}>Фильмы</div>
                <div className={!showMovies ? 'tab tab--active' : 'tab'} onClick={() =>toggleShowMovies(false)}>Телеканалы</div>
            </div>
            <TabContent showMovies={showMovies} />
        </Fragment>
    )
}

export default Tabs;