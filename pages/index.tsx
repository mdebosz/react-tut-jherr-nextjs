import { PokemonFilter } from '@/components/PokemonFilter'
import { PokemonInfo } from '@/components/PokemonInfo'
import { PokemonTable } from '@/components/PokemonTable'

export default function Home() {

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
