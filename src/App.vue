<template>
  <div class="container">
    <h1 class="container__title">Rick And Morty</h1>
    <FilterByStatus />
    <FilterByName />
    <ListCharacters />
  </div>
</template>

<script>
import FilterByName from './components/FilterByName.vue';
import FilterByStatus from './components/FilterByStatus.vue';
import ListCharacters from './components/ListCharacters.vue';
export default {
  components: {
    ListCharacters,
    FilterByStatus,
    FilterByName,
  },
};
</script>

<style lang="scss">
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
body {
  background-color: rgb(23, 29, 39);
  font-family: 'Josefin Sans', sans-serif;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__title {
    color: white;
    font-weight: 700;
  }
}
</style>
