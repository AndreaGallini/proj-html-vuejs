<template>
  <div class="store">
    <p>Get our app</p>
    <img src="/images/download-android.png" alt="" />
    <img src="/images/download-app-store.png" alt="" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
img {
  width: 200px;
  margin-bottom: 2rem;
}
p {
  color: $brandColor;
  text-transform: uppercase;
  font-weight: bold;
}
.store {
  border-left: 1px dotted $iconColor;
  padding-left: 2rem;
}
</style>
