<template>
  <div class="popularRecipes container-lg">
    <div class="title container-lg">
      <h2>Popular recipes</h2>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est sint
        eveniet ad autem laborum vero soluta culpa tempore nisi commodi? Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Ut, itaque.
      </p>
    </div>
    <div class="recipes">
      <div class="left">
        <div class="col-12 my-card">
          <section class="over">
            <img src="/images/Yogurt-Nan-600x395.jpg" alt="" />
            <div class="first_card__overlay">
              <div class="first_overlay__text">
                <span class="round">
                  <a href="#">
                    <i class="fa-solid fa-link"></i>
                  </a>
                </span>

                <p>Lunch Favorite With Salad , Nann And Beans</p>
              </div>
            </div>
          </section>

          <div class="card-text">
            <h3>Lunch Favorite With Salad , Nann And Beans</h3>
            <p>Bakery, Featured,Healthy, Latest Recipes,Staff Picks</p>
            <hr />
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur molestiae quas nobis quo, dicta veritatis dignissimos
              perferendis ipsa voluptate ab, quibusdam eligendi. Recusandae,
              totam. Enim provident possimus cum at asperiores aliquid quod
              vitae laboriosam nemo perferendis illum sunt hic odio vero quis
              praesentium voluptatum cumque non sapiente voluptatem, molestiae
              exercitationem vel. Explicabo hic voluptas iusto rem. Atque
              blanditiis unde quisquam facilis ratione enim minus sit doloremque
              voluptatem, eum quam provident.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="my-card-6" v-for="cards in store.popularRecipes">
          <img :src="cards.img" alt="" />
          <div class="card__overlay">
            <div class="overlay__text">
              <span class="round">
                <a :href="cards.link">
                  <i class="fa-solid fa-link"></i>
                </a>
              </span>

              <p>{{ cards.testo }}</p>
            </div>
          </div>
        </div>
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
.popularRecipes {
  padding-top: 700px;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 10rem;
  text-align: center;
  p {
    padding-top: 10px;
    line-height: 35px;
  }
}
.left,
.right {
  width: 50%;
}
img {
  width: 100%;
}
.my-card {
  background-color: white;
  position: relative;
}
.recipes {
  display: flex;
}
.right {
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  div {
    padding: 1rem;
    img {
      width: 100%;
    }
  }
}
.card-text {
  padding: 2rem;
}
button {
  background-color: $brandColor;
  border: 0;
  padding: 0.5rem 1rem;

  border-radius: 10px;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    background-color: $buttonHover;
  }
}
h2 {
  text-transform: uppercase;
  font-size: 20px;
}
h3 {
  font-family: "Vidaloka", serif;
}
.my-card-6 {
  position: relative;
  width: calc((100% - 1rem) / 2);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  img {
    width: 100%;
    height: 100%;
  }
  i {
    margin-bottom: 2rem;
  }
  p {
    color: white;
    font-family: "Vidaloka", serif;
    font-weight: bold;
    font-size: 18px;
  }
}
.card__overlay {
  position: absolute;
  top: 1rem;
  bottom: 1rem;
  left: 1rem;
  right: 0;
  height: calc(100% - 2rem);
  width: calc(100% - 2rem);
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
.over {
  position: relative;
}
.over:hover .first_card__overlay {
  opacity: 1;
}
.my-card-6:hover .card__overlay {
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
.first_card__overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 427px;
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
.first_overlay__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 427px;
  p {
    color: white;
    font-family: "Vidaloka", serif;
    font-weight: bold;
    font-size: 25px;
    padding-top: 2rem;
  }
}
</style>
