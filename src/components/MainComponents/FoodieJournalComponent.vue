<template>
  <div class="container-lg my-container">
    <h2 class="title">Foodie journal</h2>
    <section class="row">
      <div
        class="col-4 my-cards"
        v-for="(card, id) in store.foodieJournalArray"
      >
        <img :src="card.image" alt="" />
        <h3>{{ card.title }}</h3>
        <p>{{ card.date }}</p>
      </div>
    </section>
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
img {
  width: 100%;
  margin-bottom: 10px;
}
.title {
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 18px;
  padding: 2rem 0;
}
.title::after,
.title::before {
  content: "";
  background-color: black;
  display: inline-block;
  height: 1px;
  vertical-align: middle;
  position: relative;
  width: 35%;
}
.title:before {
  right: 1rem;
  margin-left: -50%;
}

.title:after {
  left: 1rem;
  margin-right: -50%;
}
.my-cards {
  display: flex;
  text-align: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.my-container {
  position: absolute;
  top: -50px;
  background-color: white;
  left: 50%;
  translate: -50%;
}
h3 {
  font-family: "Vidaloka", serif;
}
</style>
