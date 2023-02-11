import { PokemonFilter } from '@/components/PokemonFilter'
import { PokemonInfo } from '@/components/PokemonInfo'
import { PokemonTable } from '@/components/PokemonTable'
import { Pokemon } from '@/src/Pokemon'
import store from '@/src/store'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/pokemon.json')
  const pokemon = await res.json()
  
  return {
    props: {
      pokemon
    }
  }
}

export default function Home({pokemon}: {pokemon: Pokemon[]}) {
  store.setPokemon(pokemon);

  return (
    <div className="w-[800px] pt-4 m-auto grid grid-cols-4 gap-2">
      <div className="col-span-3">
        <h1 className="text-center">Pokemon Search</h1>
        <PokemonFilter />
        <PokemonTable />
      </div>
      <div className="col-span-1">{<PokemonInfo />}</div>
    </div>
  )
}
