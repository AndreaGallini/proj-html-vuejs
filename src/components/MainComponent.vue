<template>
  <div class="maincomponent">
    <JumboComponent />
    <div class="main">
      <FoodieJournalComponent />
    </div>
    <PopularRecipes />
  </div>
</template>

<script>
import JumboComponent from "./MainComponents/JumboComponent.vue";
import FoodieJournalComponent from "./MainComponents/FoodieJournalComponent.vue";
import PopularRecipes from "./MainComponents/PopularRecipes.vue";

export default {
  components: {
    JumboComponent,
    FoodieJournalComponent,
    PopularRecipes,
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
