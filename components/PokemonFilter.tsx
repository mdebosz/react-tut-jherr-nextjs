import { observer } from "mobx-react";
import store from "../src/store";

export const PokemonFilter = observer(() => {
  return (
    <input
      className="text-lg p-1 w-full"
      value={store.filter}
      onChange={(e) => store.setFilter(e.target.value)}
    />
  );
});
