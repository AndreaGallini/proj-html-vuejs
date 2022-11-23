<template>
  <div class="linksFooter">
    <ul>
      <li v-for="link in store.footerLinks">
        <a href="#">{{ link }}</a>
      </li>
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
.linksFooter {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border-left: 1px dotted $iconColor;
  padding-left: 2rem;
}
ul {
  list-style: none;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
    border-right: 2px solid transparent;
    transition: all 0.5s;
    &:hover {
      color: $brandColor;
      border-right: 2px solid $brandColor;
      padding-right: 10rem;
    }
  }
  li {
    padding: 0.6rem 0;
  }
}
</style>
