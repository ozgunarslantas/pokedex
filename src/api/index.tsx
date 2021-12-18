import axios from "axios"
import { useQuery } from "react-query"
import { PokemonListResponse } from "../types"

const usePokemonList = (limit = 10, page = 1, enabled = true) =>
  useQuery<PokemonListResponse>(
    ["pokemons", limit, page],
    async () => {
      const offset = limit * (page - 1)

      const { data } = await axios.get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`,
      )
      return data
    },
    { cacheTime: Infinity, staleTime: Infinity, enabled },
  )

const usePokemonData = (pokemon: string | undefined) =>
  useQuery(
    ["pokemon-data", pokemon],
    () => axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}`),
    { enabled: !!pokemon },
  )

export { usePokemonData, usePokemonList }
