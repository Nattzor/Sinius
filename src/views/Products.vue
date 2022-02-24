<template>
  <div>
    <Category class="Category" @changeCategory='category' />
    <div class="productPlacement">
      <article class="productGrid">
        <ProductCard v-for="item in items" :key="item.id" :singleItem="item"/>
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
      category: 'all'
    }
    },
    mounted() {
     this.$store.dispatch('fetchItems')
     },
     changeCategory(showCategory) {
      this.category = showCategory
      this.$emit('chooseCategory', this.showCategory);
    }, 
   computed: {
    items() {
      if (this.category == 'all') {
    return this.$store.state.items;
      } else {return this.$store.state.items.filter(items => items.category == this.category)}
      },
    }
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