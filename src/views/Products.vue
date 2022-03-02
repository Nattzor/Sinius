<template>
  <div>
    <Category class="Category" @changeCategory="changeCategory" />
    <div class="productPlacement">
      <article class="productGrid">
        <ProductCard
          v-for="(item, index) in items"
          :key="index"
          :singleItem="item"
        />
      </article>
    </div>
  </div>
</template>

<script>
import Category from "@/components/Category.vue";
import ProductCard from "@/components/ProductCard.vue";

export default {
  components: { Category, ProductCard },
  data() {
    return {
      category: "all",
    };
  },
  methods: {
    changeCategory(choosenCategory) {
      this.category = choosenCategory;
      if (this.category ==  "hoodie" || this.category =="wheel" || this.category =="cap" || this.category =="tshirt" || this.category == "griptape" || this.category =="skateboard" || this.category =="totebag" || this.category =="socks") {
          return this.$store.dispatch("fakkOff",  {category: this.category});
    }
  },
  },
  mounted() {
    if (this.category == "all") {
    return this.$store.dispatch("fetchItems");
  }
},
  computed: {
    items() {
      if (this.category == "all") {
        return this.$store.state.items;
      } else{  return this.$store.state.itemList.filter(
          (itemList) => itemList.category == this.category
        );
        
      }
     
    }          
},
}
</script>

<style scoped>
.productGrid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;
  justify-content: center;
  justify-items: center;
  align-items: end;
}
.productPlacement {
  padding-left: 25rem;
  padding-top: 9.5rem;
}
.Category {
  position: absolute;
}
</style>
