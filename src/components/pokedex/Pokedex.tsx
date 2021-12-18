import { useState } from "react"
import { usePokemonList } from "../../api"
import { Pokemon } from "../pokemon"

const Pokedex = () => {
  const [limit] = useState(25)
  const [page, setPage] = useState(1)

  const pokemonList = usePokemonList(limit, page)

  return (
    <div className="flex flex-col">
      <h1 className="text-3xl font-bold underline">Pokedex</h1>
      <div className="flex justify-center select-none mb-4">
        <span
          children="<-"
          onClick={() => page > 1 && setPage(p => p - 1)}
          className="cursor-pointer"
        />
        <span className="mx-2">Page {page}</span>
        <span
          children="->"
          onClick={() =>
            page < (pokemonList.data?.count || 0) / limit && setPage(p => p + 1)
          }
          className="cursor-pointer"
        />
      </div>
      <div className="flex flex-wrap gap-4 p-2">
        {pokemonList.data?.results.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
    </div>
  )
}

export default Pokedex
