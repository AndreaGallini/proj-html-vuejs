<template>
  <div class="tweet">
    <section class="title">
      <section class="subtitle">
        <h3>Tweets</h3>
        <p>By <span>@Theme_Fusion</span></p>
      </section>
      <i class="fa-solid fa-circle-info"></i>
    </section>
    <section class="textBody">
      <section class="textTitle">
        <section class="nameTitle">
          <img
            src="images/3a74ce3d0532b7773b174c45ca3bd05a_normal.png"
            alt=""
          />
          <section class="name">
            <p>ThemeFusion</p>
            <p class="tag">@Theme_Fusion</p>
          </section>
        </section>
        <i class="fa-brands fa-twitter"></i>
      </section>
      <p>
        The #Avada #BlackFriday sale has begun! Buy Avada for $45 (35% Off) for
        a limited time & start designing beautiful websites
        https://bit.ly/3tNhNPg #blackfridaysale #blackfriday2022
        #BlackFridayDeals #Sales #WebsiteBuilder #WordPress
      </p>
      <img src="/images/avada_sales.jpeg" alt="" />
      <section class="opt">
        <section class="action">
          <i class="fa-regular fa-heart"></i>
          <i class="fa-solid fa-right-from-bracket"></i>
        </section>
        <p>21h</p>
      </section>
    </section>
  </div>
  <div class="addnewpost">
    <p>Add New Post</p>
    <h6>Add Post Image</h6>
    <input type="text" placeholder="Post Image" v-model="store.imgpost" />
    <h6>Add Post Description</h6>
    <input
      type="text"
      placeholder="Post Description"
      v-model="store.textpost"
    />
    <h6>Add Post Date</h6>
    <input type="text" placeholder="Add Post Date" v-model="store.datepost" />
    <button @click="store.addUserPost">Write your Post</button>
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
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.subtitle {
  display: flex;
  align-items: baseline;
  p {
    margin-bottom: 0;
  }
}
.textTitle {
  display: flex;
  justify-content: space-between;
}
.nameTitle {
  display: flex;
  p {
    margin-bottom: 0;
    padding-left: 1rem;
  }
}
.opt {
  display: flex;
  justify-content: space-between;
  width: 100%;
  i,
  p {
    padding: 1rem 1rem;
  }
}
.tweet {
  background-color: white;
  width: 100%;
  margin: 2rem 0;
  padding: 1rem;
  font-size: 14px;
  img {
    width: 100%;
  }
}
h3 {
  font-size: 20px;
}
.subtitle {
  p {
    font-size: 12px;
  }
}
.tag {
  font-size: 12px;
}
.addnewpost {
  display: flex;
  flex-direction: column;
  p {
    color: $brandColor;
    font-size: 20px;
    font-weight: bold;
    margin: 1rem 0;
  }
  input {
    width: 100%;
  }
  h6 {
    margin-bottom: 0;
    padding-top: 1rem;
    color: $brandColor;
    font-weight: bold;
  }
  button {
    margin-top: 1rem;
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
}
</style>
