<template>
  <div class="container-lg my-footer">
    <LogoFooter />
    <LinksFooterVue />
    <AdressFooter />
    <StoreFooter />
  </div>
  <FooterBottom />
</template>

<script>
import LogoFooter from "./FooterComponents/LogoFooter.vue";
import LinksFooterVue from "./FooterComponents/LinksFooter.vue";
import AdressFooter from "./FooterComponents/AdressFooter.vue";
import StoreFooter from "./FooterComponents/StoreFooter.vue";
import FooterBottom from "./FooterComponents/FooterBottom.vue";

export default {
  components: {
    LogoFooter,
    LinksFooterVue,
    AdressFooter,
    StoreFooter,
    FooterBottom,
  },
};
</script>

<style lang="scss" scoped>
.my-footer {
  padding-top: 4rem;
  padding-bottom: 4rem;
  display: flex;
  * {
    width: calc(100% / 4);
  }
}
</style>
