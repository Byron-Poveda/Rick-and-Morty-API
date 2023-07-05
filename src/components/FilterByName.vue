<template>
  <input
    v-model="name"
    type="text"
    name="name"
    id="name"
    placeholder="Search by name"
    autocomplete="off"
    class="input-filter"
    @input="filterByName(name)"
  />
</template>

<script>
import { useCardStore } from '@/store/CardStore.js';
import { ref } from 'vue';
export default {
  setup() {
    const cardStore = useCardStore();
    const name = ref('');
    const filterByName = (name) => {
      cardStore.filterByName(name);
    };
    return {
      filterByName,
      name,
    };
  },
};
</script>

<style lang="scss" scoped>
.input-filter {
  padding: 0 0 0 10px;
  width: 272px;
  height: 35px;
  border: none;
  border-radius: 8px;
}
</style>
