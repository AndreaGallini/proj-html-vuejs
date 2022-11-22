<template>
  <div>
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

<style lang="scss" scoped></style>
