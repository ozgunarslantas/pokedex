import { useRef } from "react"
import { useInfinitePokemonList } from "../../api"
import useIntersectionObserver from "../../hooks/useIntersectionObserver"
import { Pokemon } from "../pokemon"

const InfinitePokedex = () => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfinitePokemonList()
  const loadMoreElementRef = useRef()

  useIntersectionObserver({
    target: loadMoreElementRef,
    onIntersect: () => setTimeout(fetchNextPage, 1000),
    enabled: !!hasNextPage,
  })

  const dataFlattened = data?.pages.map(({ results }) => results).flat()

  return (
    <div className="flex flex-col overflow-auto">
      <h1 className="text-3xl font-bold underline">InfinitePokedex</h1>
      <div className="flex flex-wrap gap-4 p-2">
        {dataFlattened?.map(pokemon => (
          <Pokemon key={pokemon.name} pokemon={pokemon} />
        ))}
      </div>
      <div
        ref={loadMoreElementRef as any}
        className="px-2 py-1 mx-auto mt-4 border bg-blue-400"
      >
        {isFetchingNextPage ? "Fetching Next Page" : "Loading More"}
      </div>
    </div>
  )
}

export default InfinitePokedex
