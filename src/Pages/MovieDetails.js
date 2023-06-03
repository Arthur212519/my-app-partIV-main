import { Link } from "react-router-dom"
import React from 'react';
import { Filmes } from "../Filmes";
import { useParams } from 'react-router-dom';

const MovieDetails = () => {
    const { id } = useParams();
    return (
        <div className="Details-container">
            <Link className="link-movieDetails" to={'/'}>Voltar</Link>
            <h2>{Filmes[id].filme}</h2>
            <p>{Filmes[id].sinopse}</p>
            <iframe width="560" height="315" src={Filmes[id].trailer} title={Filmes[id].filme} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    );
};

export { MovieDetails };