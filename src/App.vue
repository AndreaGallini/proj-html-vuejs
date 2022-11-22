<template>
  <div class="main">
    <HeaderComponent />
    <MainComponent />
    <FooterComponent />
    <EvidenceComponent />
  </div>
</template>

<script>
import EvidenceComponent from "./components/EvidenceComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    EvidenceComponent,
  },
};
</script>

<style lang="scss" scoped>
@use "./assets/partials/partials" as *;
header {
  background-color: $secondaryBackground;
}
main,
footer {
  background-color: $mainBackground;
}
.main {
  position: relative;
}
</style>
