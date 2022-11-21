<template>
  <div>
    <ul>
      <li v-for="item in store.navbarArray">{{ item }}</li>
      <li><i class="fa-solid fa-magnifying-glass"></i></li>
    </ul>
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
@use "../../assets/partials/partials" as *;

ul {
  list-style: none;
  display: flex;
  justify-content: center;
}
li {
  padding: 3rem 4rem;
  font-weight: bold;
}
</style>
