<template>
  <div class="character">
    <img class="character__img" :src="character.image" :alt="character.name" />
    <div class="character__info">
      <h3 class="character__info-title">{{ character.name }}</h3>
      <div class="wrapper">
        <div class="wrapper__status">
          <span
            :class="
              character.status === 'Alive'
                ? 'alive ball'
                : character.status === 'Dead'
                ? 'dead ball'
                : 'default ball'
            "
          ></span>
          <span>{{ character.status }} - {{ character.species }}</span>
        </div>
        <div class="wrapper__origin">
          <span>
            Origin:
            {{ character.origin.name }}
          </span>
        </div>
        <div class="wrapper__location">
          <span>
            Location:
            {{ character.location.name }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['character'],
};
</script>

<style lang="scss" scoped>
.character {
  &__img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
  &__info {
    padding: 12px;
    letter-spacing: 0.5px;
    &-title {
      transition: all 0.2s;
      color: white;
      margin: 0 0 10px;
    }
  }
}
.wrapper {
  color: rgb(145, 142, 142);
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 12px;
  &__status {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  &__location {
    color: white;
    font-weight: 700;
  }
}
.ball {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: flex;
}
.alive {
  background-color: rgb(14, 221, 14);
}
.dead {
  background-color: red;
}
.default {
  background-color: gray;
}
</style>
