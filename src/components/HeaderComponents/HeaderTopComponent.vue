<template>
  <div class="my-container">
    <div class="left">
      <p>Download App</p>
      <p class="ios">ios</p>
      <p>Advertise with us</p>
    </div>
    <div class="right">
      <i class="fa-brands fa-facebook-f"></i>
      <i class="fa-brands fa-instagram"></i>
      <i class="fa-brands fa-twitter"></i>
      <i class="fa-brands fa-youtube"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
i {
  color: $iconColor;
  padding: 0 1rem;
}
//lato sinistro
.left {
  display: flex;
}
.ios {
  text-transform: uppercase;
  font-weight: bold;
  color: white;
  background-color: $brandColor;
  width: 40px;
  text-align: center;
  padding: 5px;
  border-radius: 6px;
  font-size: 12px;
  margin-right: 20px;
  margin-left: 5px;
}
.my-container {
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
}
</style>
