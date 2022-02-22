<template>
  <article class="container"> 
 <div class="topPart"  v-for="person in person" :key="person.id"> 
     <h1> HEAAAALLLLPPP </h1>
     <img :src="person.img">
     <h1> {{person.name}} </h1>
     <h3> {{person.quote}} </h3>
</div>
<div>
    <p> {{person.article}} </p>
</div>
  </article>
</template>

<script>
export default {
props: ['person']
}

</script>

<style scoped>
* {
     color: white;
}
.container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
}

img {
    height: 150px;
    width: 150px;
}

.topPart {
    background-color: #424242;
}
</style>