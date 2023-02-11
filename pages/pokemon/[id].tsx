import { Pokemon } from "@/src/Pokemon"
import { GetStaticProps } from "next"

export const getStaticPaths = async () => {
  const pokemon = require("../../src/pokemon.json");
  const paths = pokemon.map((p: Pokemon) => ({
    params: {
      id: p.id.toString(),
    },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({params}) => {
  const allPokemon = require("../../src/pokemon.json");
  const pokemon = allPokemon.find((p: Pokemon) => p.id === parseInt(params?.id as string));
  return {
    props: { pokemon },
  };
};

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

export default PokemonDetail;
