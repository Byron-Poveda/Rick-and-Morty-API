<template>
  <ul class="filter">
    <li class="filter__status"><div @click="filterByStatus('')">All</div></li>
    <li class="filter__status">
      <div @click="filterByStatus('Alive')">Alive</div>
    </li>
    <li class="filter__status">
      <div @click="filterByStatus('Dead')">Dead</div>
    </li>
    <li class="filter__status">
      <div @click="filterByStatus('unknown')">Unknown</div>
    </li>
  </ul>
</template>

<script>
import { useCardStore } from '@/store/CardStore.js';
export default {
  setup() {
    const cardStore = useCardStore();
    const filterByStatus = (status) => {
      cardStore.filterByStatus(status);
    };
    return {
      filterByStatus,
    };
  },
};
</script>

<style lang="scss" scoped>
.filter {
  display: flex;
  background-color: #292828;
  border-radius: 12px;
  margin-bottom: 20px;
  &__status {
    color: #fff;
    transition: all 0.2s;
    border-right: 1px solid rgb(97, 98, 100);
    & div {
      padding: 15px;
    }
    &:last-child {
      border: none;
    }
    &:hover {
      color: orange;
      cursor: pointer;
    }
  }
}
</style>
