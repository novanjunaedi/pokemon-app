import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import PokemonList from "./components/PokemonList/PokemonList"

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=12");
        if (response.status === 200) {
          setPokemons(response.data.results);
        };
      } catch (error) {
        throw new Error(error.message);
      };
    };

    getPokemons();
  }, []);

  return (
    <>
      <Header />
      <main className="w-full min-h-[600px] bg-slate-50">
        <PokemonList
          pokemons={pokemons}
        />
      </main>
      <Footer />
    </>
  )
}

export default App