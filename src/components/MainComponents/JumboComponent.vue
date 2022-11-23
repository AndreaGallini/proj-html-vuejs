<template>
  <div class="jumbo">
    <div class="card-jumbo">
      <p class="jumbo-title">today's pick</p>
      <div class="jumbo-text">
        <h2>Food Corner: Top Japanese Resturants for Sushi</h2>
        <p>March 25,2019</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.jumbo {
  background-image: url(/images/single-post-img3-1200x790.jpg);
  height: 600px;
  background-repeat: no-repeat;
  width: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}
.card-jumbo {
  background-color: white;
  height: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  width: 800px;
  border-radius: 10px;
}
.jumbo-title {
  background-color: $brandColor;
  text-transform: uppercase;
  color: white;
  font-weight: bold;
  padding: 0.75rem;
  border-radius: 5px;
  position: absolute;
  top: -25px;
}
.jumbo-text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  text-align: center;
  padding: 3rem;
  cursor: pointer;
  h2 {
    font-size: 50px;
    font-family: "Vidaloka", serif;
    transition: all 0.5s;
    &:hover {
      color: $brandColor;
    }
  }
}
</style>
