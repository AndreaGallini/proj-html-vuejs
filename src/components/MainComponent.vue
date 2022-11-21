<template>
  <div>
    <JumboComponent />
    <FoodieJournalComponent />
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

<style lang="scss" scoped></style>
