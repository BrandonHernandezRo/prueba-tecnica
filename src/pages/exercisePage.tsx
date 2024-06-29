import { useContext, useEffect, useState } from "react";
import { Dropdown } from "../components/dropdown/Dropdowns";
import { getData } from "../services/dataApi";
import dataPokemon from '../services/pokemon';
import { CardPokemonComp } from "../components/card/CardPokemonComp";
import { PokemonContext } from "../context/pokemonContext";
import useLocalStorage from "../hooks/useLocalStorage";

export const ExercisePage = () => {
  const [showCard, setShowCard] = useState(false);
  const [pokemonError, setPokemonError] = useState(false);
  const pokemonContext = useContext(PokemonContext) as any;
  const [pokemon, setPokemon] = useLocalStorage("pokemon");


  interface DropdownOption {
    label: string;
    name: string;
    value: string;
  }
  const dropdownOptions: DropdownOption[] = dataPokemon.map(pokemon => ({
    label: (pokemon.name).charAt(0).toUpperCase() + pokemon.name.slice(1),
    name: pokemon.name,
    value: pokemon.id
  }));

  const handlerClickOption = async (e: string) => {
    let response = await getData(`https://pokeapi.co/api/v2/pokemon/${e}`);

    if (response) {
      console.log(response);
      let { sprites, name, order, types, moves } = response;
      const newPokemon = {
        img: sprites?.front_shiny,
        title: name,
        pokedexNumber: order,
        types: types,
        moves: moves,
      };
      setPokemon(newPokemon);
      pokemonContext.setPokemon(newPokemon);
      setPokemonError(false)
    } else {
      setPokemonError(true)
    }
  };

  useEffect(() => {
    console.log("context", pokemonContext.pokemon);
    if (pokemon && pokemon.title) {
      setShowCard(false);
      setTimeout(() => {
        setShowCard(true);
        console.log("Local storage:", pokemon);
      }, 3000);
    }
  }, [pokemon, pokemonContext]);

  return (
    <div className="text-center">
      <Dropdown label="Pokemon" options={dropdownOptions} handlerClick={(e) => handlerClickOption(e)} />
  
      {pokemonError ? <h2>Aún no encontramos ese pokémon. 😟</h2> : !showCard ? (
        <div className="text-center spinner-border text-secondary" role="status">
          <span className="visually-hidden"></span>
        </div>
      ) : (
        pokemon.title && (
          <CardPokemonComp

            img={pokemon.img}
            title={pokemon.title}
            pokedexNumber={pokemon.pokedexNumber}
            types={pokemon.types}
            moves={pokemon.moves}
          />
        )
      )}
    </div>
  );
};

export default ExercisePage;