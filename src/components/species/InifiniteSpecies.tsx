import InfiniteScroll from 'react-infinite-scroller'
import { Specie, Species } from './Species'
import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'

const initialUrl = 'https://swapi.dev/api/species/'
const fetchUrl = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export function InfiniteSpecies() {
  // TODO: get data for InfiniteScroll via React Query

  const { data, fetchNextPage, hasNextPage, isLoading, isFetching, isError } =
    useInfiniteQuery({
      queryKey: ['sw-species'],
      queryFn: ({ pageParam = initialUrl }: { pageParam?: string }) =>
        fetchUrl(pageParam!),
      getNextPageParam: (lastPage) => lastPage.next || undefined,
      initialPageParam: initialUrl
    })

  if (isLoading) return <div className='loading'>Loading...</div>
  if (isError) return <div className='error'>Error!</div>

  return (
    <>
      {isFetching && <div className='loading'>Loading...</div>}
      <InfiniteScroll
        loadMore={() => !isFetching && fetchNextPage()}
        hasMore={hasNextPage}
        initialLoad={false}
      >
        {data?.pages?.map((page, i) => (
          <div key={i}>
            {page.results.map((specie: any) => (
              <Species
                key={specie.name}
                name={specie?.name}
                averageLifespan={specie?.average_lifespan}
                language={specie?.language}
              />
            ))}
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}
