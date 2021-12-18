import type { Pokemon as PokemonT } from "../../types"

const Pokemon = ({ pokemon }: { pokemon: PokemonT }) => (
  <p className="capitalize">{pokemon.name}</p>
)

export default Pokemon
