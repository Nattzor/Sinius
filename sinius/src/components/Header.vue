<template>
  <div>
    <div class="Header">
      <router-link to="/">
        <img class="logo" src="@/assets/sinus-logo-landscape.svg" alt="" />
      </router-link>
        <router-link class="routerLinks" to="/Products"> Products </router-link>
        <router-link class="routerLinks" to=""> About us </router-link>
        <router-link class="routerLinks" to=""> Contact </router-link>
      <div class="rightLinks">
        <router-link class="routerLinks" to="/Login">
          <fa icon="fa-solid fa-user" />
        </router-link>
        <router-link class="routerLinks" to="/SavedProducts">
          <fa icon="fa-solid fa-heart" />
        </router-link>
        <router-link class="routerLinks" to="/Cart">
          <fa icon="fa-solid fa-bag-shopping" />
        </router-link>
      </div>
    </div>
    <div class="lowerHeader">
      <input class="searchBar" type="text" placeholder="search" />
      <div class="getApp">
        <fa class="downloadIcon" icon="fa-solid fa-download" />
        <p>Get mobile app</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
* {
  color: black;
}
.Header {
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
.lowerHeader {
  width: 100%;
  height: 5rem;
  background: linear-gradient(to bottom, rgba(204, 204, 204, 1), rgba(204, 204, 204, 0));
  display: flex;
  align-items: center;
  justify-content: center;
}
.logo {
  width: 15rem;
  padding-left: 2rem;
}
.routerLinks {
  padding: 2rem;
}
.getApp {
  display: flex;
  align-items: center;
  position: absolute;
  right: 0;
  padding-right: 2rem;
  color: black;
  font-family: "Work Sans", sans-serif;
  font-weight: bold;
}
.downloadIcon {
  width: 4rem;
  font-size: 32px;
}
.searchBar {
  border-radius: 100px;
  border-color: #cccccc;
  height: 50px;
  width: 424px;
  background:#ececec;
  font-size: 18px;
}
</style>