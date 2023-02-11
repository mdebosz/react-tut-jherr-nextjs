import { Pokemon } from "@/src/Pokemon"
import { NextPageContext } from "next"
import { withRouter } from "next/router"

export const getServerSideProps = async (context: NextPageContext) => {
  const allPokemon = await (await fetch('http://localhost:3000/pokemon.json')).json()
  const pokemon =allPokemon.find((found: Pokemon) => found.id.toString() === context.query.id)
  
  return {
    props: {
      pokemon
    }
  }
}

function PokemonDetail({pokemon}: {pokemon: Pokemon}) {
  return pokemon && (
    <div className="w-[800px] pt-4 m-auto grid grid-cols-4 gap-2">
      <h1>{pokemon?.name.english}</h1>
      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="border px-4 py-2">Attribute</th>
            <th className="border px-4 py-2">Value</th>
            </tr>
        </thead>
        <tbody>
          {Object.entries(pokemon.base)?.map(([key, value]) => (
            <tr key={`${key}`}>
              <td className="border px-4 py-2">{key}</td>
              <td className="border px-4 py-2">{value}</td>
            </tr>
          ))
       }
        </tbody>
      </table>
    </div>
  )
}

export default withRouter(PokemonDetail)
