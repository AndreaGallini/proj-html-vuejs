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
          <img src="/images/Yogurt-Nan-600x395.jpg" alt="" />
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
        <div class="col-6" v-for="cards in store.popularRecipes">
          <img :src="cards" alt="" />
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
}
.recipes {
  display: flex;
}
.right {
  display: flex;
  flex-wrap: wrap;
  padding: 0 2rem;
  div {
    padding: 0.5rem;
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
</style>
