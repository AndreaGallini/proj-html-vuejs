<template>
  <div class="secondaryJumbo">
    <h3>Subscribe <span class="orange">&</span> Receive A Free eBook</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      ducimus explicabo cum obcaecati adipisci tempora.
    </p>
    <section class="emailsub">
      <input type="text" placeholder="Insert Your email...*" />
      <button>subscribe</button>
    </section>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;

.orange {
  color: $brandColor;
}
.secondaryJumbo {
  background-color: white;
  background-image: url(/images/subscribe-sec-bg.png);
  min-height: 300px;
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 10rem;
}
button {
  background-color: $brandColor;
  border: 0;
  padding: 0.75rem;
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  &:hover {
    background-color: $buttonHover;
  }
}
input {
  height: 49px;
  width: 600px;
  margin-right: 1.5rem;
  &:hover {
    border: 2px solid $brandColor;
  }
}
.emailsub {
  margin: 2rem 0;
}
h3 {
  margin-top: 10rem;
}
p {
  padding: 0 20rem;
  text-align: center;
}
</style>
