<template>
  <div>
    <div class="characters">
      <h2 class="characters__title">Characters</h2>
      <ul class="characters__list">
        <li
          v-for="character in characters"
          :key="character.id"
          class="characters__item"
        >
          <ItemCharacter :character="character" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { useCardStore } from '@/store/CardStore.js';
import ItemCharacter from './ItemCharacter.vue';
import { computed, onMounted } from 'vue';
export default {
  setup() {
    const cardStore = useCardStore();
    const characters = computed(() => {
      return cardStore.charactersFilter;
    });
    // ejecutamos la funcion getCharacters desde q se monta la pagina
    onMounted(() => {
      cardStore.getCharacters;
    });
    return {
      characters,
    };
  },
  components: {
    ItemCharacter,
  },
};
</script>

<style lang="scss">
.characters {
  display: flex;
  align-items: center;
  flex-direction: column;
  &__title {
    color: white;
  }
  &__list {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
    margin: 3rem 0;
    flex-wrap: wrap;
  }
  &__item {
    background-color: rgba(29, 29, 66, 0.555);
    border: 0.5px solid white;
    border-radius: 12px;
    overflow: hidden;
    max-width: 300px;
    transition: all 0.2s;
    &:hover {
      cursor: pointer;
      transform: scale(1.08);
    }
    &:hover .character__info-title {
      color: orange;
    }
  }
}
</style>
