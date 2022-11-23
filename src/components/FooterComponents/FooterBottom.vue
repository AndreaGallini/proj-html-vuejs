<template>
  <div class="footerbottom">
    <p>
      Copyright 2012-2020 | Avada Theme by ThemeFusion | All Rights Reserved |
      Powered by Wordpress
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.footerbottom {
  height: 75px;
  background-color: $backgroundBottomFooter;
  display: flex;
  align-items: center;
  justify-content: center;
  p {
    margin-bottom: 0;
  }
}
</style>
