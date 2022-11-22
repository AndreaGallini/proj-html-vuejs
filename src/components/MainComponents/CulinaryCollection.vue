<template>
  <div class="culinaryCollection container-lg">
    <div class="culinaryText">
      <h3>Culinary collection</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illum, saepe,
        tempora nulla praesentium eaque in illo cupiditate molestias ipsa ipsum
        doloremque? Dolorem natus fuga ipsam similique mollitia eos accusamus
        obcaecati!
      </p>
    </div>
    <div class="my-container">
      <div
        class="my-col culinary-card"
        v-for="card in store.culinaryCollection"
      >
        <img :src="card.image" alt="" />
        <p>{{ card.title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from "../../store";
export default {
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.culinaryCollection {
  text-align: center;
  p {
    padding-top: 20px;
    line-height: 30px;
  }
}
.culinary-card {
  background-color: white;
  margin: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 200px;
  p {
    text-transform: uppercase;
    background-color: transparent;
    transition: all 0.5s;
    width: 100%;
    margin-bottom: 0;
    padding-bottom: 1rem;
    cursor: pointer;
    &:hover {
      background-color: $buttonHover;
      color: white;
    }
  }
  img {
    width: 40%;
    transition: all 1s;
    cursor: pointer;
    &:hover {
      width: 50%;
    }
  }
}
.culinaryText {
  padding: 0 100px;
  padding-top: 200px;
}
.my-col {
  width: calc((100% - 80px) / 4);
  margin: 10px;
}
.my-container {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-top: 20px;
  padding-bottom: 150px;
}
h3 {
  text-transform: uppercase;
  font-size: 20px;
}
</style>
