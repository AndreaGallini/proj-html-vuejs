<template>
  <div class="farm container-lg">
    <div class="left">
      <h3>Farm to table</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odio porro rem
        earum architecto! Minima praesentium maxime assumenda nulla consequuntur
        perspiciatis.
      </p>
    </div>
    <div class="right">
      <button>read our blog <i class="fa-brands fa-blogger-b"></i></button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.right,
.left {
  width: 50%;
}
.farm {
  display: flex;
  justify-content: space-between;
}
.right {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
button {
  background-color: $brandColor;
  border: 0;
  padding: 0.75rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
}
h3 {
  text-transform: uppercase;
  font-size: 20px;
}
p {
  padding-bottom: 5rem;
}
</style>
