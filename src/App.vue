<template>
  <div>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <MainComponent />
    </main>

    <footer>
      <FooterComponent />
    </footer>
  </div>
</template>

<script>
import FooterComponent from "./components/FooterComponent.vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";

export default {
  components: { HeaderComponent, MainComponent, FooterComponent },
};
</script>

<style lang="scss" scoped>
@use "./assets/partials/partials" as *;
header {
  background-color: $secondaryBackground;
}
</style>
