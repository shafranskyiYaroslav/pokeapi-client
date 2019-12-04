export const getPokemonPrimaryStat = (pokedex, stat) => pokedex && pokedex[stat];

export const getPokemonImage = (pokedex) => pokedex && pokedex.sprites && pokedex.sprites.front_default;

export const getPokemponTypes = (pokedex) => pokedex &&
    pokedex.types &&
    pokedex.types.sort((a, b) => a && b && a.slot > b.slot ? 1 : -1)
            .map(item => item && item.type && item.type.name);

export const getPokemonStat = (pokedex, stat) => {
        const stats = pokedex &&
            pokedex.stats &&
            pokedex.stats.find(item => item.stat.name === stat)
        return stats && stats.base_stat
    };

export const getPokemonMoves = (pokedex) => pokedex && pokedex.moves && pokedex.moves.length;
