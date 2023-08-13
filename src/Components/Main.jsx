import React from "react";
import Card from "./Card"; 
import Pokeinfo from "./PokeInfo";
import axios from "axios"; 
import { useState, useEffect } from "react";

const Main = () => {
    const [pokeData, setPokeData] = useState([]); // Estado para almacenar los datos de los Pokémon
    const [loading, setLoading] = useState(true); // Estado para controlar la carga de datos
    const [url] = useState("https://pokeapi.co/api/v2/pokemon?limit=900&offset=0"); // URL de la API de Pokémon con límite de 150 Pokémon
    const [pokeDex, setPokeDex] = useState(); // Estado para almacenar los detalles de un Pokémon seleccionado

    // Función para obtener los datos de los primeros 150 Pokémon
    const pokeFun = async () => {
        setLoading(true); 
        const res = await axios.get(url); // Realizar petición a la API
        getPokemon(res.data.results); // Llamar a la función para obtener detalles de cada Pokémon
        setLoading(false); 
    };

    // Función para obtener los detalles de los Pokémon
    const getPokemon = async (res) => {
        const pokemonPromises = res.map(async (item) => {
            const result = await axios.get(item.url); // Obtener detalles individuales de un Pokémon
            return result.data;
        });

        // Esperar a que todas las promesas se resuelvan
        const pokemonData = await Promise.all(pokemonPromises);

        // Actualizar el estado con los detalles de los Pokémon ordenados por su ID
        setPokeData(pokemonData.sort((a, b) => a.id - b.id));
    };

    // Efecto para cargar los datos de los Pokémon al montar el componente
    useEffect(() => {
        pokeFun();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [url]);

    return (
        <div className="container">
            <div className="left-content">
                {/* Pasar datos y funciones a componente Card */}
                <Card pokemon={pokeData} loading={loading} infoPokemon={poke => setPokeDex(poke)} />
            </div>
            <div className="right-content">
                {/* Pasar datos del Pokémon seleccionado a componente Pokeinfo */}
                <Pokeinfo data={pokeDex} />
            </div>
        </div>
    );
};

export default Main;
