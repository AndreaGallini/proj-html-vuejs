<template>
  <div class="header container-md">
    <HeaderTopComponent />
    <LogoComponent />
    <HeaderBottomComponent />
  </div>
</template>

<script>
import { store } from "../store";
import HeaderBottomComponent from "./HeaderComponents/HeaderBottomComponent.vue";
import HeaderTopComponent from "./HeaderComponents/HeaderTopComponent.vue";
import LogoComponent from "./HeaderComponents/LogoComponent.vue";
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
