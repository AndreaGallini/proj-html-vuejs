<template>
  <div class="header container-md">
    <HeaderTopComponent />
    <LogoComponent />
    <HeaderBottomComponent />
  </div>
</template>

<script>
import { store } from "../store";
import HeaderBottomComponent from "./HeaderBottomComponent.vue";
import HeaderTopComponent from "./HeaderTopComponent.vue";
import LogoComponent from "./LogoComponent.vue";
export default {
  components: {
    HeaderTopComponent,
    LogoComponent,
    HeaderBottomComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/partials" as *;
</style>
