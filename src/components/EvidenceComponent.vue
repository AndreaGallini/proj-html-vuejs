<template>
  <div class="upper">
    <section
      class="upper1"
      @mouseenter="changeShow2()"
      @mouseleave="removeShow2()"
    >
      <TransitionGroup name="demos">
        <i v-if="show2" class="fa-solid fa-book"></i>
        <i v-else="show2" class="fa-solid fa-book"></i>
      </TransitionGroup>
      <p>Demos</p>
    </section>

    <section
      class="upper2"
      @mouseenter="changeShow()"
      @mouseleave="removeShow()"
    >
      <section class="green-number trans">
        <TransitionGroup name="list">
          <p v-if="show"><i class="fa-solid fa-cart-shopping"></i></p>
          <p v-else><span class="apice">$</span><span>39</span></p>
        </TransitionGroup>
      </section>
      <p>On Sale</p>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      show2: false,
    };
  },
  methods: {
    changeShow() {
      this.show = !this.show;
    },
    removeShow() {
      this.show = false;
    },
    changeShow2() {
      this.show2 = !this.show2;
    },
    removeShow2() {
      this.show2 = false;
    },
  },
};
</script>

<style lang="scss" scoped>
@use "../assets/partials/partials" as *;
.upper {
  position: fixed;
  top: 100px;
  right: 10px;
}
.upper1,
.upper2 {
  height: 70px;
  width: 70px;
  box-shadow: 0px 0px 20px -3px #000000;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  z-index: 1000;
  background-color: white;
}
.upper1 {
  margin-bottom: 10px;
}
.apice {
  vertical-align: super;
}
.green-number {
  font-weight: bolder;
  font-size: 20px;
  color: $green;
}
p {
  margin-bottom: 0;
}
.trans {
  i,
  p {
    padding-top: 5px;
    height: 30px;
    font-size: 18px;
  }
}

i {
  color: black;
}
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
  position: absolute;
}
.demos-move, /* apply transition to moving elements */
.demos-enter-active,
.demos-leave-active {
  transition: all 0.5s ease;
}

.demos-enter-from,
.demos-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.demos-leave-active {
  position: absolute;
}
.upper1 {
  i {
    font-size: 20px;
    padding-top: 5px;
  }
}
</style>
