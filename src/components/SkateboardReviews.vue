<template>
  <article class="container">
      <div  v-for="person in person" :key="person.id">
    <div class="topPart">
      <img :src="person.img" />
      <h1>{{ person.name }}</h1>
      <h4>{{ person.quote }}</h4>
    </div>
    <div class="bottomPart">
      <p>{{ person.article }}</p>
    </div>
    </div>
    <h3 class="center">Our mission</h3>
  </article>
</template>

<script>
export default {
  props: ["person"],
};
</script>

<style scoped>
.container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  margin: 0rem 5rem 0rem 5rem;
}

h1,
h4 {
  color: white;
  padding: 1rem;
}

img {
  height: 350px;
  width: 250px;
}

.topPart {
  background-color: #b4b4b4;
  padding: 1rem;
}

.bottomPart {
  display: grid;
  place-items: center;
  background-color: White;
  height: 20rem;
}
</style>
