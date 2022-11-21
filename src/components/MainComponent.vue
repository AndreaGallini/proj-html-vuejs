<template>
  <div class="maincomponent">
    <JumboComponent />
    <div class="main">
      <FoodieJournalComponent />
    </div>
    <PopularRecipes />
    <CulinaryCollection />
  </div>
</template>

<script>
import JumboComponent from "./MainComponents/JumboComponent.vue";
import FoodieJournalComponent from "./MainComponents/FoodieJournalComponent.vue";
import PopularRecipes from "./MainComponents/PopularRecipes.vue";
import CulinaryCollection from "./MainComponents/CulinaryCollection.vue";

export default {
  components: {
    JumboComponent,
    FoodieJournalComponent,
    PopularRecipes,
    CulinaryCollection,
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
