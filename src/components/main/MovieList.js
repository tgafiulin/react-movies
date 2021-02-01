import React from 'react'
import Movie from './Movie'
import { useSelector } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import Loader from '../common/Loader'

function MovieList () {
    const movies = useSelector(state => state.movie.movies)
    const searchValue = useSelector(state => state.movie.searchValue)
    let filterMovies = [];

    if (searchValue) {
        filterMovies = movies.filter((movie) => movie.name.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1)
    } 

    if (!filterMovies.length) {
        filterMovies = movies
    }

    const params = {
        breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 10,
                observer: true,
            },
            768: {
                slidesPerView: 4,
                spaceBetween: 20,
                observer: true,
            }
        }
    };

    if (!movies) {
        return <Loader />
    }

    return (
        <div className="movies">
            <Swiper {...params} >
            {filterMovies.map((movie) =>
                <SwiperSlide key={movie.id}>
                    <Movie 
                        value={movie} />
                </SwiperSlide>
            )}
            </Swiper>
        </div>
    )
}

export default MovieList;