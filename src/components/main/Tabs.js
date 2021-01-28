import React, { Component, Fragment } from 'react';
import TabContent from './TabContent'

class Tabs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showMovies: true,
        };

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick (movie) {
        this.setState({showMovies: movie});
    }

    render () {
        let classNameMovies = "tab tab-movies";
        let classNameTv = "tab tab-tv";
        let showMovies = this.state.showMovies;

        if (showMovies) {
            classNameMovies += ' tab--active';
        } else {
            classNameTv += ' tab--active';
        }

        return (
            <Fragment>
                <div className="tabs">
                    <div className={classNameMovies} onClick={(e) => this.handleClick(true, e)}>Фильмы</div>
                    <div className={classNameTv} onClick={(e) => this.handleClick(false, e)}>Телеканалы</div>
                </div>
                <TabContent showMovies={this.state.showMovies} />
            </Fragment>
        )
    }
}

export default Tabs;