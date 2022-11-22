<template>
  <div class="upper">
    <section class="upper1">
      <i class="fa-solid fa-book"></i>
      <p>Demos</p>
    </section>
    <section class="upper2">
      <section class="green-number">
        <span class="apice">$</span><span>39</span>
      </section>
      <p>On Sale</p>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../assets/partials/partials" as *;
.upper {
  position: fixed;
  top: 100px;
  right: 10px;
}
.upper1,
.upper2 {
  height: 70px;
  width: 70px;
  box-shadow: 0px 0px 20px -3px #000000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  background-color: white;
}
.upper1 {
  margin-bottom: 10px;
}
.apice {
  vertical-align: super;
}
.green-number {
  font-weight: bolder;
  font-size: 20px;
  color: $green;
}
p {
  margin-bottom: 0;
}
</style>
