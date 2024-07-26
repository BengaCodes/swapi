import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { InfinitePeople } from './components/people/InfinitePeople'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { InfiniteSpecies } from './components/species/InifiniteSpecies'

const queryClient = new QueryClient()

function App() {
  return (
    <div className='App'>
      <QueryClientProvider client={queryClient}>
        <h1>Infinite SWAPI</h1>
        {/* <InfinitePeople /> */}
        <InfiniteSpecies />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  )
}

export default App
