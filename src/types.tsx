export type Pokemon = {
  name: string
  url: string
}

export type PokemonListResponse = {
  count: number
  next: null | string
  previous: null | string
  results: Pokemon[]
}
