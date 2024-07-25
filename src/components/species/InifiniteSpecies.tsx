import InfiniteScroll from 'react-infinite-scroller'
import { Species } from './Species'
import axios from 'axios'

const initialUrl = 'https://swapi-node.vercel.app/api/species/'
const fetchUrl = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query
  return <InfiniteScroll />
}
