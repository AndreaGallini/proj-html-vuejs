<template>
  <div class="jumboCards">
    <div class="my-card" v-for="card in store.cardsJumboArray">
      <section class="over">
        <img :src="card.img" alt="" />
        <div class="card__overlay">
          <div class="overlay__text">
            <span class="round">
              <a href="#">
                <i class="fa-solid fa-link"></i>
              </a>
            </span>

            <p>{{ card.text }}</p>
          </div>
        </div>
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
@use "../../assets/partials/partials" as *;
.jumboCards {
  display: flex;
}
.my-card {
  width: calc(100% / 4);

  img {
    width: 100%;
  }
}
.over {
  position: relative;
}
.card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: none;
  transition: 0.5s ease;

  background: $backgroundOver;
  background: $backgroundLinear;
}
.over:hover .card__overlay {
  opacity: 1;
}
.round {
  background-color: white;
  width: 50px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  border-radius: 50%;
  color: $brandColor;
  a {
    text-decoration: none;
    color: $brandColor;
  }
}
.overlay__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    color: white;
    font-family: "Vidaloka", serif;
    font-weight: bold;
    font-size: 20px;
    padding-top: 2rem;
    text-align: center;
  }
}
</style>
