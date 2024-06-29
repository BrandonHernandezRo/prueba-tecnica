// Definir la interfaz Pokemon
export interface Pokemon {
    id: string;
    name: string;
}

// Definir el array dataPokemons utilizando la interfaz Pokemon
const dataPokemons: Pokemon[] = [
    {
        id: "25", 
        name: "pikachu",
    },
    {
        id: "4", 
        name: "charmander",
    },
    {
        id: "1", 
        name: "bulbasaur",
    },
    {
        id: "7", 
        name: "squirtle",
    },
    {
        id: "150", 
        name: "mewtwo",
    },
    {
        id: "133", 
        name: "eevee",
    },
    {
        id: "143", 
        name: "snorlax",
    },
    {
        id: "39", 
        name: "jigglypuff",
    },
    {
        id: "94", 
        name: "gengar",
    },
    {
        id: "448", 
        name: "lucario",
    },
    {
        id: "121322", 
        name: "Floky",
    }
];

// Exportar el array como default
export default dataPokemons;