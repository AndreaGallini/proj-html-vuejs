<template>
  <div class="contacts">
    <p class="title">contacts</p>
    <ul>
      <li>
        <i class="fa-solid fa-location-dot"></i>
        <p class="adressText">
          775 New York Ave, Brooklyn,Kings,New York 11203
        </p>
      </li>
      <li>
        <i class="fa-solid fa-phone my-align"></i>
        <p class="adressText">+ 0100-505-0000</p>
      </li>
      <li>
        <i class="fa-solid fa-envelope my-align"></i>
        <p class="adressText">info@your-domain.com</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@use "../../assets/partials/partials" as *;
.title {
  color: $brandColor;
  text-transform: uppercase;
  font-weight: bold;
}
.contacts {
  border-left: 1px dotted $iconColor;
  padding-left: 2rem;
}
.my-align {
  align-self: center;
}
ul {
  list-style: none;
  padding-left: 0;
  padding-right: 1rem;
  a {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
  li {
    padding: 1rem 0;
    display: flex;
    align-items: flex-start;
  }
  p {
    margin-left: 1rem;
    margin-bottom: 0;
  }
}
</style>
