<template>
  <div class="container-lg">
    <LogoFooter />
    <LinksFooterVue />
    <AdressFooter />
    <StoreFooter />
  </div>
</template>

<script>
import LogoFooter from "./FooterComponents/LogoFooter.vue";
import LinksFooterVue from "./FooterComponents/LinksFooter.vue";
import AdressFooter from "./FooterComponents/AdressFooter.vue";
import StoreFooter from "./FooterComponents/StoreFooter.vue";

export default {
  components: {
    LogoFooter,
    LinksFooterVue,
    AdressFooter,
    StoreFooter,
  },
};
</script>

<style lang="scss" scoped></style>
