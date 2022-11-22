<template>
  <div class="jumboCards">
    <div class="my-card" v-for="card in store.cardsJumboArray">
      <img :src="card" alt="" />
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
.jumboCards {
  display: flex;
}
.my-card {
  width: calc(100% / 4);
  img {
    width: 100%;
  }
}
</style>
