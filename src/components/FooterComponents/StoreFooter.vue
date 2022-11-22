<template>
  <div class="store">
    <p>Get our app</p>
    <a
      href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=xRqTnB3OzxyNT7OTPiwKfypUUkA0Q3w%3AhXxM0s0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius"
      target="_blank"
      ><img src="/images/download-android.png" alt=""
    /></a>
    <a
      href="https://themeforest.net/item/avada-responsive-multipurpose-theme/2833226?irgwc=1&clickid=xRqTnB3OzxyNT7OTPiwKfypUUkA0Q3yuhXxM0s0&iradid=275988&irpid=1292887&iradtype=ONLINE_TRACKING_LINK&irmptype=mediapartner&mp_value1=&utm_campaign=af_impact_radius_1292887&utm_medium=affiliate&utm_source=impact_radius"
      target="_blank"
    >
      <img src="/images/download-app-store.png" alt="" />
    </a>
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
