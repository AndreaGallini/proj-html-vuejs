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
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
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
</style>
