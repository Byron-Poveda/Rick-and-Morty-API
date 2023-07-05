import { defineStore } from 'pinia';

export const useCardStore = defineStore('CardStore', {
  state: () => ({
    // creamos dos arrays para no tener q hacer otra peticion a la data
    characters: [],
    charactersFilter: [],
  }),
  actions: {
    // payload es la data q le vamos a enviar
    setCharacters(payload) {
      this.characters = payload;
    },
    setCharactersFilter(payload) {
      this.charactersFilter = payload;
    },
    filterByStatus(status) {
      const results = this.characters.filter((character) => {
        return character.status.includes(status);
      });
      this.charactersFilter = results;
    },
    filterByName(name) {
      const results = this.characters.filter((character) => {
        return character.name.toLowerCase().includes(name.toLowerCase());
      });
      this.charactersFilter = results;
    },
  },
  getters: {
    // hacemos una funcion async/await para realizar una peticion a la data
    async getCharacters() {
      try {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        console.log(data);
        this.setCharacters(data.results);
        this.setCharactersFilter(data.results);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
export default useCardStore;
