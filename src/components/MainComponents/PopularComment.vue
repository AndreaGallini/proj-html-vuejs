<template>
  <div class="slider">
    <section class="left" @click="store.changeCommentPopularArray">
      <p>Popular</p>
    </section>
    <section class="right" @click="store.changeCommentRecentArray">
      <p>Recent</p>
    </section>
  </div>
  <div class="comment">
    <div class="my-card flex" v-for="card in store.commentArrayNew">
      <img :src="card.img" alt="" />
      <section class="text">
        <p>{{ card.title }}</p>
        <p class="subtitle">{{ card.date }}</p>
      </section>
    </div>
    <div class="addnewcomment">
      <p>Add Your Comment</p>
      <h6>Add Your image</h6>
      <input type="text" placeholder="My image" v-model="store.imguser" />
      <h6>Add Your Comment</h6>
      <input
        type="text"
        placeholder="Your comment"
        v-model="store.commentuser"
      />
      <h6>Add Date</h6>
      <input type="text" placeholder="Date" v-model="store.dateuser" />
      <button @click="store.addUserComment">Write your comment</button>
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
  mounted() {
    store.inizioComment();
  },
};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.right,
.left {
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  text-align: center;
  cursor: pointer;
  &:hover {
    color: $brandColor;
  }
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
.addnewcomment {
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
