<template>
<div class="container">
  <div class="login-form">
    <h1 class="login-title">LOGIN</h1>
    <div class="user-name">
       <h1>Username</h1>
       <br>
      <input class="input-field" type="text"  placeholder="Type username here"> 
    </div>
    <div class="password">
       <h1 class="">Password</h1>
       <br>
      <input class="input-field" type="text" placeholder="Type password here">
    </div>
    <button class="btn">Submit</button>
    <fa icon="fa-regular fa-lock" />
    <h2>
    <router-link to="/Signup">Signup</router-link>
    </h2>
    <Signup />
  </div>
  </div>

</template>

<script>
export default {
};
</script>

<style>
.container{
  display: flex;
  align-content: center;
  justify-content: center; 
}
h1{
  font-family: "Work Sans", sans-serif;
}
.login-title{
  margin-top: 3rem;
  margin-bottom: 1rem;
}
.login-form{
  margin-top: 3rem;
  width: 588px;
  height: 604px;
	display: flex;
  flex-direction: column;
	align-items: center;
	justify-content: space-between;
	

background: #E5E5E5;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
border-radius: 10px;

}
.input-field{
width: 380px;
height: 58px;
background: rgba(204, 204, 204, 0.5);
border: 3px solid rgba(0, 0, 0, 0.5);
box-sizing: border-box;
border-radius: 100px;
}
.input-field:active,
.input-field:focus,
.input-field:hover {
	border-color: #1e16af;
	outline: none;
}
.btn{
display: flex;
width: 324px;
height: 51px;
background: #C4C4C4;
border-radius: 100px;
margin-top: 30px;
padding: 16px 20px;
font-weight: 700;
box-shadow: 0px 2px 2px #2f2f36;
cursor: pointer;
transition: .2s;
font-family: sans-serif;
font-size: 25px;
align-items: center;
justify-content: center;
}
.btn:active,
.btn:focus,
.btn:hover {
	border-color: #1e16af;
	outline: none;
}
.user-icon{
  height: 20px;
}


</style>