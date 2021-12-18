import { usePokemonData } from "../../api"
import type { Pokemon as PokemonT } from "../../types"

const Pokemon = ({ pokemon }: { pokemon: PokemonT }) => {
  const { data, isSuccess, isLoading } = usePokemonData(pokemon)

  return (
    <div className="w-36 h-36 shrink-0 flex flex-col items-center select-none rounded shadow-xl hover:shadow-sm transition-shadow duration-200">
      <span className="capitalize">{pokemon.name}</span>
      {isSuccess && (
        <div className="h-full flex justify-center items-center">
          <img
            alt={pokemon.name + " image"}
            src={data?.sprites.front_default}
          />
        </div>
      )}
    </div>
  )
}

export default Pokemon
