import React from "react";

// Componente funcional que muestra la información detallada de un Pokémon
const Pokeinfo = ({ data }) => {
    return (
        <>
            {
            (!data) ? "" : (
                    // Si hay datos, mostrar la información del Pokémon
                    <>
                        {/* Mostrar el nombre del Pokémon */}
                        <h1>{data.name}</h1>
                        {/* Mostrar la imagen del Pokémon */}
                        <img src={data.sprites.front_default} alt="" />
                        <div className="abilities">
                            {/* Mapear y mostrar las habilidades del Pokémon */}
                            {data.abilities.map(poke => {
                                return (
                                    <div className="group" key={poke.ability.name}>
                                        {/* Mostrar el nombre de la habilidad */}
                                        <h2>{poke.ability.name}</h2>
                                    </div>
                                );
                            })}
                        </div>
                        <div className="base-stat">
                            {/* Mapear y mostrar las estadísticas base del Pokémon */}
                            {data.stats.map(poke => {
                                return (
                                    <h3 key={poke.stat.name}>
                                        {/* Mostrar el nombre de la estadística y su valor */}
                                        {poke.stat.name}: {poke.base_stat}
                                    </h3>
                                );
                            })}
                        </div>
                    </>
                )
            }
        </>
    );
};

export default Pokeinfo;
