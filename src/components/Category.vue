<template>
<div class="categoryTemplate">
  <div class="category">
    <h1>CATEGORY</h1>
    <div class="categoryPadding" @click="triangleIconDownClothes">
      <h2>
        Clothes
        <fa v-if="clothesDropdown" icon="fa-solid fa-caret-right" />
        <fa
          v-else-if="clothesDropdown === false"
          icon="fa-solid fa-caret-down"
        />
      </h2>
      <div class="categoryOptions" v-show="activeClothesDropdown">
        <button @click="hoodies">- Hoodie</button>
        <button @click="onlyTshirts">- T-shirt</button>
        <button @click="onlySocks">- Socks</button>
        <button @click="onlyCaps">- Caps</button>
      </div>
    </div>
    <div class="categoryPaddingBottom" @click="triangleIconDownAccessories">
      <h2>
        Accessories
        <fa v-if="accessoriesDropdown" icon="fa-solid fa-caret-right" />
        <fa
          v-else-if="accessoriesDropdown === false"
          icon="fa-solid fa-caret-down"
        />
      </h2>
      <div class="categoryOptions" v-show="activeAccessoriesDropdown">
  <button @click="onlySkateboardS"> Skateboard </button>
<button @click="onlyWheel"> Wheel </button>
<button @click="onlyGriptape"> Griptape </button>
<button @click="onlyTote"> Totebags </button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      clothesDropdown: true,
      accessoriesDropdown: true,
      activeClothesDropdown: false,
      activeAccessoriesDropdown: false,
    };
  },
  methods: {
    triangleIconDownClothes() {
      if (this.clothesDropdown) {
        this.clothesDropdown = false;
        this.activeClothesDropdown = true;
        document.querySelector(".categoryPaddingBottom").style.paddingTop =
          "2.5rem";
      } else if (this.clothesDropdown === false) {
        this.clothesDropdown = true;
        this.activeClothesDropdown = false;
        document.querySelector(".categoryPaddingBottom").style.paddingTop =
          "8rem";
      }
    },
    triangleIconDownAccessories() {
      if (this.accessoriesDropdown) {
        this.accessoriesDropdown = false;
        this.activeAccessoriesDropdown = true;
      } else if (this.accessoriesDropdown === false) {
        this.accessoriesDropdown = true;
        this.activeAccessoriesDropdown = false;
      }
    }
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
.categoryTemplate {
  padding-top: 150px;
  padding-left: 50px;
}
.category {
  height: 500px;
  width: 300px;
  background-color: rgba(204, 204, 204, 0.5);
}
.categoryPadding,
.categoryPaddingBottom {
  padding-top: 8rem;
}
.category h2 {
  font-family: "Roboto", sans-serif;
  font-weight: normal;
}
.category h1 {
  font-family: 'Russo One', sans-serif;
  font-weight: normal;
  font-size: 28px;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
}
.category h2 {
  padding-left: 1rem;
  margin-left: 10px;
}
.svg-inline--fa.fa-caret-right {
  font-size: 24px;
}
.svg-inline--fa.fa-caret-right:hover,
.svg-inline--fa.fa-caret-down:hover,
.category h2 {
  cursor: pointer;
}
.categoryOptions h3 {
  font-weight: normal;
  padding-left: 35%;
}
</style>