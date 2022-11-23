<template>
  <div class="container-lg post-container">
    <div class="left">
      <div class="col-12 my-main-card">
        <div class="over">
          <img src="/images/single-post-img3-600x395.jpg" alt="" />
          <div class="card__overlay">
            <div class="overlay__text">
              <span class="round">
                <a href="#">
                  <i class="fa-solid fa-link"></i>
                </a>
              </span>

              <p>Food Corner: Top Japanese Resturants for Sushi</p>
            </div>
          </div>
        </div>
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
          <section class="over_post">
            <img :src="card.img" alt="" />
            <div class="post__overlay">
              <div class="post__text">
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
      <input type="text" placeholder="Search" v-model="store.filterComment" />
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
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
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
    font-weight: 800;
    font-size: 20px;
  }
  button {
    background-color: $brandColor;
    border: 0;
    padding: 0.75rem;
    color: white;
    text-transform: uppercase;
    font-weight: 700;
    width: 100%;
    &:hover {
      background-color: $buttonHover;
    }
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
h3 {
  font-family: "Vidaloka", serif;
  transition: all 0.5s;
  cursor: pointer;
  &:hover {
    color: $brandColor;
  }
}
.over {
  position: relative;
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
  &:hover .card__overlay {
    opacity: 1;
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
      font-size: 25px;
      padding-top: 2rem;
    }
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
}

.post__overlay {
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
.over_post {
  position: relative;
  &:hover .post__overlay {
    opacity: 1;
  }
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
.post__text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  p {
    color: white;
    font-family: "Vidaloka", serif;
    font-weight: bold;
    font-size: 25px;
    padding-top: 2rem;
  }
}
</style>
