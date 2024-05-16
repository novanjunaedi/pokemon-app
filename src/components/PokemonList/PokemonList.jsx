import Item from "../Item/Item";

const PokemonList = ({ pokemons }) => {
    return (
        <section className="container-sm w-full flex flex-wrap justify-center align-middle p-5 gap-3">
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
        </section>
    )
}

export default PokemonList