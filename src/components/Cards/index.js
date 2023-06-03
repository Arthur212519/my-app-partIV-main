import React, { useState } from "react"
import { Link } from "react-router-dom"
import { Header } from "../Header"
import "../../App.css"
import Imdb from "../../imagens/IMDb-icon.png"
import { Filmes } from "../../Filmes"
const CardsList = () => {
    const [filmes] = useState(Filmes);
    const [filteredMovies, setFilteredMovies] = useState(filmes);

    const handleSearch = searchTerm => {
        const filteredMovies = filmes.filter(filme =>
            filme.filme.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredMovies(filteredMovies);
    }
    return (
        <>
        <Header handleSearch={handleSearch}/>
        <section  id="main-slider" >
            {filteredMovies.map((filme) => (
                <div key={filme.id} class="swiper-slide">
                    <Link to={`/MovieDetails/${filme.id}`}>
                        <div class="main-slider-box">
                            <a href="" class="main-slider-overlay">
                                <i class="fas fa-play"></i>
                            </a>
                            <div class="main-slider-img">
                                <img src={filme.poster} alt={filme.filme} />
                            </div>
                            <div class="main-slider-text">
                                <span class="quality">Full HD</span>
                                <div class="botton-text">
                                    <div class="movie-name">

                                        <span>{filme.ano}</span>

                                        <strong>{filme.filme}</strong>

                                    </div>
                                    <div class="category-rating">

                                        <div class="category">

                                            <a href="#">{filme.categoria[0]}</a>

                                        </div>
                                        <div class="rating">
                                            {filme.nota}<img src={Imdb} alt="imbd" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </section >
        </>
        
    )
}
export { CardsList }