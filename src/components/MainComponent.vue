<template>
  <div class="maincomponent">
    <JumboComponent />
    <div class="main">
      <FoodieJournalComponent />
    </div>
    <PopularRecipes />
    <CulinaryCollection />
    <FarmToTable />
    <PostComponent />
  </div>
</template>

<script>
import JumboComponent from "./MainComponents/JumboComponent.vue";
import FoodieJournalComponent from "./MainComponents/FoodieJournalComponent.vue";
import PopularRecipes from "./MainComponents/PopularRecipes.vue";
import CulinaryCollection from "./MainComponents/CulinaryCollection.vue";
import FarmToTable from "./MainComponents/FarmToTable.vue";
import PostComponent from "./MainComponents/PostComponent.vue";

export default {
  components: {
    JumboComponent,
    FoodieJournalComponent,
    PopularRecipes,
    CulinaryCollection,
    FarmToTable,
    PostComponent,
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
