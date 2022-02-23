<template>
  <article class="container" > 
 <div class="topPart"> 
     <img :src="person.img">
     <h1> {{person.name}} </h1>
     <h4> {{person.quote}} </h4>
</div>
<div class="bottomPart" v-for="person in person" :key="person.id">
    <p> {{person.article}} </p>
</div>
<h3 class="center"> Our mission </h3>
  </article>
</template>

<script>
export default {
props: ['person']
}

</script>

<style scoped>
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 3rem;
    margin: 0rem 3rem 0rem 3rem;
}

h1, h4 {
    color: white;
}

img {
    height: 250px;
    width: 200px;
}

.topPart {
    background-color: #6d6d6d;
    padding: 1rem;
}

.bottomPart {
    display: grid;
    place-items: center;
    background-color: White;
    height: 20rem;
}

</style>