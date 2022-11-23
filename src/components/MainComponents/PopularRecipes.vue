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

                <p>Lunch Favourite With Salad , Naan And Beans</p>
              </div>
            </div>
          </section>

          <div class="card-text">
            <h3>Lunch Favorite With Salad , Naan And Beans</h3>
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
          <section class="over2">
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
          </section>
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
.over2 {
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
  padding: 0;

  background: $backgroundOver;
  background: $backgroundLinear;
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
.over {
  position: relative;
}
.over:hover .first_card__overlay {
  opacity: 1;
}
.over2:hover .card__overlay {
  opacity: 1;
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

  background: $backgroundOver;
  background: $backgroundLinear;
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
    font-size: 17px;
    padding-top: 1rem;
  }
}
</style>
