<template>
  <div class="maincomponent">
    <JumboComponent />
    <div class="main">
      <FoodieJournalComponent />
    </div>
  </div>
</template>

<script>
import JumboComponent from "./MainComponents/JumboComponent.vue";
import FoodieJournalComponent from "./MainComponents/FoodieJournalComponent.vue";

export default {
  components: {
    JumboComponent,
    FoodieJournalComponent,
  },
};
</script>

<style lang="scss">
@use "../assets/partials/partials" as *;
.main {
  position: relative;
}
.maincomponent {
  background-color: $mainBackground;
}
</style>
