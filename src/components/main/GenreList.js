import React from 'react';
import Genre from './Genre'

function GenreList () {

    const genres = [
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

export default GenreList;