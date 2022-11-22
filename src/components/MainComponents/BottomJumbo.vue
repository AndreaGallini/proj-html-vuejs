<template>
  <div class="secondaryJumbo">
    <h3>Subscribe <span>&</span> Receive a free Eboook</h3>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
      ducimus explicabo cum obcaecati adipisci tempora.
    </p>
    <section class="emailsub">
      <input type="text" placeholder="Insert Your email" />
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
}
input {
  height: 49px;
  width: 600px;
  margin-right: 1.5rem;
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
