<template>
  <div class="slider">
    <section class="left">
      <p>Popular</p>
    </section>
    <section class="right">
      <p>Recent</p>
    </section>
  </div>
  <div class="comment">
    <div class="my-card flex" v-for="card in store.commentArray">
      <img :src="card.img" alt="" />
      <section class="text">
        <p>{{ card.title }}</p>
        <p class="subtitle">{{ card.date }}</p>
      </section>
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
.right,
.left {
  width: 50%;
  border: 1px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  p {
    margin-bottom: 0;
  }
}
.slider {
  display: flex;
  margin-top: 2rem;
}
img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.flex {
  display: flex;
}
.text {
  padding-left: 0.5rem;
}
.comment {
  width: 100%;
  margin-top: 2rem;
  .my-card {
    padding: 1rem 0;
    width: 100%;
    height: 80px;
    .subtitle {
      font-size: 12px;
    }
  }
}
</style>
