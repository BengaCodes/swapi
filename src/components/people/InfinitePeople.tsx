import InfiniteScroll from 'react-infinite-scroller'

import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import { Person } from './People'

const initialUrl = 'https://swapi.dev/api/people/'
const fetchUrl = async (url: string) => {
  const response = await axios.get(url)
  return response.data
}

export function InfinitePeople() {
  const { data, fetchNextPage, hasNextPage, isFetching, isLoading, isError } =
    useInfiniteQuery({
      queryKey: ['sw-people'],
      queryFn: ({ pageParam = initialUrl }: { pageParam?: string }) =>
        fetchUrl(pageParam!),
      getNextPageParam: (lastPage) => lastPage.next || undefined,
      initialPageParam: initialUrl
    })

  if (isLoading) return <div className='loading'>Loading...</div>
  if (isError) return <div className='error'>Error!</div>

  // TODO: get data for InfiniteScroll via React Query
  return (
    <>
      {isFetching && <div className='loading'>Loading...</div>}
      <InfiniteScroll
        initialLoad={false}
        hasMore={hasNextPage}
        loadMore={() => !isFetching && fetchNextPage()}
      >
        {data?.pages.map((page, i) => (
          <div key={i}>
            {page.results.map((person: Person) => (
              <Person key={person.name} {...person} />
            ))}
          </div>
        ))}
      </InfiniteScroll>
    </>
  )
}
