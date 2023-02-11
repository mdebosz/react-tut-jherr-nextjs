import { PokemonInfo } from "@/components/PokemonInfo"
import { withRouter } from "next/router"

import store from "../../src/store"

function PokemonDetail({router}) {
  const { id } = router.query
  const pokemon = store.pokemon.find((pokemon) => pokemon.id === parseInt(id))

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
