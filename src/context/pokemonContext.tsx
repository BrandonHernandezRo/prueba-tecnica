import { createContext, useState, useEffect } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

export const PokemonContext = createContext({});

export default function PokemonProvider({ children }: any) {
  const [pokemonSelected, setPokemonSelected] = useLocalStorage("pokemon");
  const [pokemon, setPokemon] = useState(pokemonSelected);

  useEffect(() => {
    setPokemonSelected(pokemon);
  }, [pokemon, setPokemonSelected]);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
}
