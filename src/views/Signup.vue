<template>
<div>
  <h1> Singup </h1>
   <p>Please fill in this form to create an account.</p>
 <form class="container">
    <label for="Fname">First Name </label>
    <input type="text" placeholder="First Name" name="Fname" required>

    <label for="Lname">Last Name </label>
    <input type="text" placeholder="Last Name" name="Lname" required>

    <label for="email">Email</label>
    <input type="text" placeholder="Enter Email" name="email" required>

    <label for="street">Street Adress</label>
    <input type="text" placeholder="Street Adress" name="street" required>

     <label for="city">City</label>
    <input type="text" placeholder="City" name="city" required>

    <label for="psw"><b>Password</b></label>
    <input type="password" placeholder="Enter Password" name="psw" required>

    <label for="psw-repeat"><b>Repeat Password</b></label>
    <input type="password" placeholder="Repeat Password" name="psw-repeat" required>

    <label>
      <input type="checkbox" checked="checked" name="remember" style="margin-bottom:15px"> Remember me
    </label>

    <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p>

    <div class="clearfix">
      <button type="button" class="btn"> Cancel </button>
      <button type="submit" class="btn"> Sign Up </button>
    </div>
</form>
</div>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Work+Sans:wght@700&display=swap");
* {
  font-family: "Work Sans", sans-serif;
}

h1 {
  background-color: #E5E5E5;
  color: #888888;
}

.container {
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  background-color: #EEEEEE;
  padding: 1rem;
  align-items: center;
  margin-left: 15rem;
}

.btn {
  background-color: #F79E1B;
  color: white;
  padding: 1rem;
  border-radius: 2%;
  border: none;
}

</style>