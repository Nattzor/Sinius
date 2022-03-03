<template>
  <article>
    <div
      class="hero"
      v-bind:style="{ 'background-image': 'url(' + backgroundImage + ')' }"
    >
      <h1>
        Welocme to Swedens biggest online skateboard store! <br />
        We have everything you want and more
      </h1>
      <button class="toShopBtn">
        <router-link class="toShopBtn" to="/Products">
          CHECK OUT THE STORE</router-link
        >
      </button>
    </div>
    <div>
      <Reviews v-bind:person="person" />
    </div>
  </article>
</template>

<script>
import Reviews from "@/components/SkateboardReviews.vue";
export default {
  components: { Reviews },
  data() {
    return {
      backgroundImage: require("@/assets/hero.png"),
      person: [
        {
          id: 0,
          name: "Nathalie Larsson",
          quote: "Att åka skatebord är det bästa jag vet. Det är det jag brinner för",
          article:
            "Jag älskar att åka skateboard. När jag inte är i skolan så är jag med mina vänner vid skate parken.",
          img: require("@/assets/skateboard1.jpeg"),
        },
        {
          id: 1,
          name: "Hernik Larsson",
          quote: "Jag har precis börjat men det är väldigt roligt.",
          article:
            "Jag har inte åkt  så länge så jag är inte så bra jag än. Men jag fick en ny skateboard när jag fyllde år så nu kan jag åka mycke bättre.",
          img: require("@/assets/skateboard2.jpeg"),
        },
        {
          id: 2,
          name: "Torsten Borsten",
          quote: "Det är svårt ibland men det är ändå välldigt kul.",
          article:
            "Jag gillar skateboard. Det är svårt att hålla balancen ibland, men det är roligt ändå. När jag inte är i skolan går jag till skateparken med mina kompisar.",
          img: require("@/assets/skateboard3.jpeg"),
        },
      ],
    };
  },
};
</script>

<style scoped>
* {
  font-family: "Work Sans", sans-serif;
  text-align: center;
  color: white;
}
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  background-size: cover;
  padding: 20rem;
  background-repeat: no-repeat;
}

.toShopBtn {
  border-color: white;
  padding: 1rem;
  margin: 5rem;
  border-radius: 100px;
  background-color: Transparent;
  align-self: center;
}
</style>
