import React, { Component } from 'react';
import Genre from './Genre'

class GenreList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            genres: [
                {
                    id: 1,
                    icon: '/icon/😁.png',
                    name: 'Комедии',
                    classGenre: 'genre--comedy'
                },
                {
                    id: 2,
                    icon: '/icon/😭.png',
                    name: 'Драмы',
                    classGenre: 'genre--drama'
                },
                {
                    id: 3,
                    icon: '/icon/👽.png',
                    name: 'Фантастика',
                    classGenre: 'genre--fantasy'
                },
                {
                    id: 4,
                    icon: '/icon/👻.png',
                    name: 'Ужасы',
                    classGenre: 'genre--horror'
                }
            ]
        };
    }

    render() {
        const genres = this.state.genres;
        return (
            <div className="genres">
                {genres.map((genre) =>
                    <Genre 
                        key={genre.id}
                        value={genre} />
                )}
            </div>
        )
    }
}

export default GenreList;