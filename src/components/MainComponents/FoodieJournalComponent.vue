<template>
  <div class="container-lg my-container">
    <h2 class="title">Foodie journal</h2>
    <section class="row">
      <div class="my-cards" v-for="(card, id) in store.foodieJournalArray">
        <section class="over">
          <img :src="card.image" alt="" />
          <div class="card__overlay">
            <div class="overlay__text">
              <span class="round">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </span>

              <p>{{ card.title }}</p>
            </div>
          </div>
        </section>

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
@use "../../assets/partials/partials" as *;
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
  position: relative;
  width: calc(100% / 3);
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }
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

  background: rgb(255, 74, 0);
  background: linear-gradient(
    0deg,
    rgba(255, 74, 0, 0.9094012605042017) 0%,
    rgba(150, 51, 0, 0.8477766106442577) 85%
  );
}
.overlay__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 273px;
  color: white;
  p {
    font-family: "Vidaloka", serif;
    font-weight: bold;
    font-size: 20px;
    padding: 1rem 1rem;
  }
}
.over {
  position: relative;
  margin-bottom: 1rem;
}
.over:hover .card__overlay {
  opacity: 1;
}
.round {
  background-color: white;
  padding: 0.75rem;
  border-radius: 50%;
  color: $brandColor;
  a {
    text-decoration: none;
    color: $brandColor;
  }
}
</style>
