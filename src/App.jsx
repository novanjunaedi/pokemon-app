import { useEffect, useState } from "react"
import axios from "axios"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Item from "./components/Item/Item"

const App = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const getPokemons = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=8");
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
        <div className="container-sm w-full flex flex-wrap justify-center align-middle p-5 gap-3">
          {pokemons.map((pokemon, index) => {
            const paddedIndex = String(index + 1).padStart(3, '0');
            const thumbnail = `https://raw.githubusercontent.com/HybridShivam/Pokemon/master/assets/images/${paddedIndex}.png`;

            return (
              <Item
                key={paddedIndex}
                name={pokemon.name}
                thumbnail={thumbnail}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  )
}

export default App