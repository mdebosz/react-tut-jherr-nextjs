import Link from "next/link";
import { Pokemon } from "../src/Pokemon";

export type PokemonRowProps = {
  pokemon: Pokemon;
  onSelect: (pokemon: Pokemon) => void;
};

export const PokemonRow = ({ pokemon, onSelect }: PokemonRowProps) => {
  return (
    <tr>
      <td className="border px-4 py-2"><Link href={`/pokemon/${pokemon.id}`}><span>{pokemon.name.english}</span></Link></td>
      <td className="border px-4 py-2">{pokemon.type.join(", ")}</td>
      <td className="border px-4 py-2">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => onSelect(pokemon)}
        >
          Select
        </button>
      </td>
    </tr>
  );
};
