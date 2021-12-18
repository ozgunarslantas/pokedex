import axios from "axios"
import { useInfiniteQuery, useQuery } from "react-query"
import { Pokemon, PokemonDataResponse, PokemonListResponse } from "../types"

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

const usePokemonData = (pokemon: Pokemon) =>
  useQuery<PokemonDataResponse>(
    ["pokemon-data", pokemon.name],
    () => axios.get(pokemon.url).then(({ data }) => data),
    { cacheTime: Infinity, staleTime: Infinity },
  )

const useInfinitePokemonList = () =>
  useInfiniteQuery<PokemonListResponse>(
    ["infinite-pokemons"],
    ({ pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=25" }) =>
      axios.get(pageParam).then(({ data }) => data),
    {
      getNextPageParam: current => current.next,
      cacheTime: Infinity,
      staleTime: Infinity,
    },
  )

export { usePokemonData, usePokemonList, useInfinitePokemonList }
