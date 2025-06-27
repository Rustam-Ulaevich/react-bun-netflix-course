import { useState } from 'react'
import { MovieCard } from './MovieCard'
import { MOVIES } from './movies.data.js'
import { useDebounce } from './hooks/useDebounce.js'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearch = useDebounce(searchTerm, 500)

  const movies = MOVIES.filter( movie => 
    movie.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
 


  return (
    <div className="min-h-screen w-full bg-black text-white px-6 py-5">
      <header className="mb-10 flex items-center justify-between">
        <img 
          src="/netflix.png"
          alt="Netflix"
          className='h-8 w-auto'
        />

        <input 
          type="search"
          value={searchTerm}
          onChange={e=>{
            setSearchTerm(e.target.value)
          }}
          placeholder='Search...'
          className='border border-white/15 px-2 py-1 rounded outline-0'
        />

      </header>
      <main className="flex gap-6">
        {MOVIES.filter( movie => movie.name.includes(searchTerm)).map(movie => (
          <MovieCard 
          key={movie.name}
          image={movie.image}
          rating={movie.rating}
        />
        ) )}
        
      </main>      
    </div>
  )
}

export default App
