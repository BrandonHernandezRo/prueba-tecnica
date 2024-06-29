import { useState } from "react";

interface Pokemon {
  img: string;
  title: string;
  pokedexNumber: number;
  types: any[];
  moves: any[];
}

export function useLocalStorage(key: string) {
  const initialPokemon: Pokemon = {
    img: "",
    title: "",
    pokedexNumber: 0,
    types: [],
    moves: [],
  };

  const [storageValue, setStorageValue] = useState<Pokemon>(() => {
    try {
      const pokemonItem = window.localStorage.getItem(key);
      return pokemonItem ? JSON.parse(pokemonItem) : initialPokemon;
    } catch (e) {
      return initialPokemon;
    }
  });

  const setValue = (value: Pokemon) => {
    setStorageValue(value);
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.error(err);
    }
  };

  return [storageValue, setValue] as const;
}

export default useLocalStorage;
