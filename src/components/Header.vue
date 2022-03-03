<template>
  <div>
    <div class="header">
      <router-link to="/">
        <img class="logo" src="@/assets/sinus-logo-landscape.svg" alt="" />
      </router-link>
      <router-link class="router-links" to="/Products"> Products </router-link>
      <router-link class="router-links" to=""> About us </router-link>
      <router-link class="router-links" to=""> Contact </router-link>
      <div class="right-links">
        <router-link
          v-if="user.length > 0"
          class="router-links"
          to="/userAccount"
        >
          <fa icon="fa-solid fa-user" />
        </router-link>
        <router-link
          v-else-if="user.length <= 0"
          class="router-links"
          to="/Login"
        >
          <fa icon="fa-solid fa-user" />
        </router-link>
        <router-link class="router-links" to="/SavedProducts">
          <fa icon="fa-solid fa-heart" />
           <span class="total-liked">{{ likedItemCounter }}</span>
        </router-link>
        <router-link class="router-links" to="/Cart">
          <fa icon="fa-solid fa-bag-shopping" />
          <span class="total-amount">{{ cartItemCounter }}</span>
        </router-link>
      </div>
    </div>
    <div class="lower-header">
      <input class="search-bar" type="text" placeholder="search" />
      <div class="get-app">
        <fa class="download-icon" icon="fa-solid fa-download" />
        <p>Get mobile app</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    cartItemCounter() {
      return this.$store.getters.cartItemCounter;
    },
    likedItemCounter() {
      return this.$store.getters.likedItemCounter;
    },
    user() {
      return this.$store.getters.currentUser;
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
* {
  color: black;
}
.header {
  width: 100%;
  height: 10rem;
  background: #cccccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: "Work Sans", sans-serif;
  font-style: normal;
  font-size: 24px;
  font-weight: 700;
}
.lower-header {
  width: 100%;
  height: 5rem;
  background: linear-gradient(
    to bottom,
    rgba(204, 204, 204, 1),
    rgba(204, 204, 204, 0)
  );
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 15rem;
  padding-left: 2rem;
}
.router-links {
  padding: 2rem;
}
.get-app {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  padding-right: 2rem;
  color: black;
  font-family: "Work Sans", sans-serif;
  font-weight: bold;
}
.download-icon {
  width: 4rem;
  font-size: 32px;
}
.search-bar {
  border-radius: 100px;
  border-color: #cccccc;
  height: 50px;
  width: 424px;
  background: #ececec;
  font-size: 18px;
}
.total-amount {
  position: absolute;
  align-items: center;
  background: lightblue;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  height: 15px;
  width: 15px;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 15px;
  transform: translate(-14px, 23px);
}
.total-liked {
  position: absolute;
  align-items: center;
  background: #98002e;
  border-radius: 50%;
  display: flex;
  font-weight: bold;
  height: 12px;
  width: 12px;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 30px;
  top: 20px;
  font-size: 15px;
  transform: translate(-103px, 26px);
}
</style>
