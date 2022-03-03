<template>
<article>
  <h1>ALL PRODUCTS THAT I LIKE</h1>
  <li class="liked-li" v-for="likedItem in liked" :key="likedItem.id">
            <img
              class="liked-img"
              :src="'http://localhost:5000//images/' + likedItem.imgFile"
              alt="The image of the product"
            />
            <label class="liked-desc">
              <h1>Name : {{ likedItem.title }}</h1>
              <h1>Gender: {{ likedItem.shortDesc }}</h1>
              <h1>description: {{ likedItem.longDesc }}</h1>
            </label>
            <label class="liked-price"
              ><h2>Price: {{ likedItem.price | toCurrency }}</h2></label>
          </li>
          </article>
</template>

<script>
export default {
computed: { 

  liked() {
      return this.$store.getters.liked;
    },
},
};
</script>

<style>
.liked-li{
   display: grid;
  grid-template-columns: repeat(3, 2fr);
  gap: 20px;
}
.liked-img{
  height: 15rem;
  width: 15rem;
}
</style>
