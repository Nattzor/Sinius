<template>
   <div class="footer">
  <p> ADDRESS
PO Box 149, <br> Korumburra VIC. 3950 Australia </p>
<p><b> <font-awesome-icon icon="fa-solid fa-envelope" /> support@sinus.se</b></p>
<p>80 dagars öppet köp </p>
<p> Gratis retur* <font-awesome-icon icon="fa-solid fa-truck" /></p>
<p>Gratis Leverans* </p>
<p> Betal metoder</p>
   </div>
</template>

<script>
export default {

}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
.footer {
   display: grid;
   grid-template-columns: repeat(6, 1fr);
   background-color: rgba(132, 176, 193, 1);
  align-items: center;
}

p {
  font-family: "Work Sans", sans-serif;
   font-size: 1rem;
   margin: 1rem;
}

</style>