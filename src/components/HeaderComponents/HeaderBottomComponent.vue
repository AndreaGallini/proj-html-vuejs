<template>
  <div>
    <ul>
      <li v-for="(item, index) in store.navbarArray" :key="index">
        <a href="#">{{ item }}</a>
      </li>
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
  cursor: pointer;
  a {
    font-weight: bold;
    text-decoration: none;
    color: black;
    transition: all 0.5s;
  }
}
a:hover {
  color: $brandColor;
  padding-bottom: 30px;
  border-bottom: 2px solid $brandColor;
}
</style>
