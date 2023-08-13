import React from "react";

// Componente funcional que muestra las tarjetas de los Pokémon
const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {
                loading ? ( // Mostrar mensaje de carga
                    <h1 className="card-loading">Cargando...</h1>
                ) : (              
                    pokemon.map((item) => {
                        return (
                            <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                                {/* Mostrar el número de ID del Pokémon */}
                                <h2>{item.id}</h2>
                                {/* Mostrar la imagen del Pokémon */}
                                <img src={item.sprites.front_default} alt="" />
                                {/* Mostrar el nombre del Pokémon */}
                                <h2>{item.name}</h2>
                            </div>
                        );
                    })
                )
            }
        </>
    );
};

export default Card;
