<template>
  <div class="footer">
    <p>
      ADDRESS PO Box 149, <br />
      Korumburra VIC. 3950 Australia
    </p>
    <p>
      <b> <fa class="icon" icon="fa-solid fa-envelope" /> support@sinus.se</b>
    </p>
    <p><fa class="icon" icon="fa-solid fa-calendar" />80 days open purshase</p>
    <p><fa class="icon" icon="fa-solid fa-rotate-left" />Free return*</p>
    <p><fa class="icon" icon="fa-solid fa-truck" />Free Shipping*</p>
    <p>
      Payment methods <fa class="icon" icon="fa-brands fa-cc-mastercard" /><fa
        class="icon"
        icon="fa-brands fa-cc-visa"
      />
      <fa class="icon" icon="fa-brands fa-cc-amex" />
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
/* $FEEDBACK: Move font-imports to global styling */
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
.footer {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background-color: rgba(132, 176, 193, 1);
  align-items: center;
}

.icon {
  margin-right: 3px;
}

p {
  font-family: "Work Sans", sans-serif;
  font-size: 1rem;
  margin: 1rem;
}
</style>
