<template>
  <div class="container-lg post-container">
    <div class="left">
      <div class="col-12 my-main-card">
        <img src="/images/single-post-img3-600x395.jpg" alt="" />
        <div class="card-text">
          <h3>Food Corner: Top Japanese Resturants for Sushi</h3>
          <p>By admin | March 25,2019</p>
          <hr />
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur
            molestiae quas nobis quo, dicta veritatis dignissimos perferendis
            ipsa voluptate ab, quibusdam eligendi. Recusandae, totam. Enim
            provident possimus cum at asperiores aliquid quod vitae laboriosam
            nemo perferendis illum sunt hic odio vero quis praesentium
            voluptatum cumque non sapiente voluptatem, molestiae exercitationem
            vel.
          </p>
          <section class="options">
            <button>Read More ></button>
            <p><i class="fa-regular fa-comments"></i> 0</p>
          </section>
        </div>
      </div>
      <div class="posts">
        <div class="my-card" v-for="card in store.PostsArray">
          <img :src="card.img" alt="" />
          <h3>{{ card.title }}</h3>
          <p>{{ card.date }}</p>
        </div>
        <button>Load More Posts</button>
      </div>
    </div>
    <div class="right">
      <section class="recipes">
        <img src="/images/ad-bg.jpg" alt="" />
        <p>View our latest recipes</p>
      </section>
      <section class="singapore">
        <img src="/images/singapore-featured-image.jpg" alt="" />
        <p>City Guide : Singapore</p>
        <button>
          <i class="fa-solid fa-earth-americas"></i> View All City guide
        </button>
      </section>
      <hr />
      <input type="text" placeholder="Search" />
      <section class="follow-us">
        <p>Follow Us</p>
        <i class="fa-brands fa-facebook-f"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-youtube"></i>
        <i class="fa-brands fa-pinterest-p"></i>
      </section>
      <PopularComment />
      <TweetComponent />
    </div>
  </div>
</template>

<script>
import PopularComment from "./PopularComment.vue";
import { store } from "../../store";
import TweetComponent from "./TweetComponent.vue";
export default {
  components: {
    PopularComment,
    TweetComponent,
  },
  data() {
    return {
      store,
    };
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.post-container {
  display: flex;
}
.left {
  width: 70%;
}
.right {
  width: 25%;
  margin: 0 auto;
}
img {
  width: 100%;
}
.my-main-card {
  background-color: white;
}
.card-text {
  padding: 2rem;
}

.options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  p {
    margin-bottom: 0;
  }
  button {
    border: 0;
    background-color: transparent;
  }
}
.posts {
  display: flex;
  flex-wrap: wrap;
  padding-top: 2rem;
  button {
    width: 100%;
    height: 50px;
    margin-top: 2rem;
    background-color: buttonBackgroundPosts;

    text-transform: uppercase;
    font-weight: bold;
    border: 0;
  }
}

.my-card {
  background-color: white;
  width: calc(50% - 20px);
  margin: 10px;
  h3 {
    padding: 1rem 2rem 0;
    text-align: center;
  }
  p {
    text-align: center;
  }
}

.recipes {
  position: relative;
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
}
.singapore {
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  p {
    position: absolute;
    background-color: black;
    color: white;
    padding: 0.5rem;
    top: 50%;
  }
  button {
    background-color: $brandColor;
    border: 0;
    padding: 0.75rem;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
  }
}
input {
  width: 100%;
  border: 1px solid $iconColor;
  height: 40px;
}
.follow-us {
  p {
    color: $brandColor;
    font-size: 20px;
    font-weight: bold;
    margin: 1rem 0;
  }

  i {
    color: $grayIcon;
    border: 0.5px solid $iconBackground;

    background-color: $iconBackground;
    padding: 0.25rem;
    margin: 0 1rem;
  }
}
.post-container {
  padding-bottom: 3rem;
}
</style>
