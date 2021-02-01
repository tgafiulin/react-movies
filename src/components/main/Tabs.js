import React, { Fragment, useState } from 'react';
import TabContent from './TabContent'


function Tabs () {
    const [showMovies, toggleShowMovies] = useState(true);

    let classNameMovies = "tab tab-movies";
    let classNameTv = "tab tab-tv";

    if (showMovies) {
        classNameMovies += ' tab--active';
    } else {
        classNameTv += ' tab--active';
    }

    return (
        <Fragment>
            <div className="tabs">
                <div className={classNameMovies} onClick={() => toggleShowMovies(true)}>Фильмы</div>
                <div className={classNameTv} onClick={() =>toggleShowMovies(false)}>Телеканалы</div>
            </div>
            <TabContent showMovies={showMovies} />
        </Fragment>
    )
}

export default Tabs;