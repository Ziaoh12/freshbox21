<template>
  <div class="home mt-20">
    <div id="Mainlogo">
      <img
        id="logo"
        src="https://ucarecdn.com/d74a2add-4fc9-4ca5-a150-55910a98a292/freshboxlogo.png"
      />
    </div>

    <p id="landingPageMainText">
      Customize and get delivered <br />
      your own daily nutricious meal
    </p>

    <img
      id="taco"
      src="https://ucarecdn.com/ddb31747-8acb-4415-97d6-a4ab0ed40e7b/tacooo01.png"
    />

    <div id="GetStarted">
      <router-link to="/Dashboard"
        ><button
          id="GetStartedbtn"
          class="p-3 m-5 w-2/3 text-white rounded-full"
        >
          Get started
        </button></router-link
      >
    </div>

    <div></div>

    <div id="Signin">
      <div id="Signin">
        <button id="Signinbtn" class="p-3 w-2/3 text-white rounded-full">
          Sign in
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: "Home",
  components: {
    // HelloWorld
  },
};
</script>

 
 <style>
#Mainlogo {
}

#logo {
  width: 40%;
  margin: auto;
  display: block;
}

#landingPageMainText {
  color: #8759f2;
  font-family: "SF Pro Display";
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding-top: 0px;
}

#GetStartedbtn {
  background-color: #8759f2;
}

#GetStarted {
  text-align: center;
  padding-top: 20px;
}

#Signinbtn {
  color: #8759f2;
  border: 2px solid #8759f2;
}

#Signin {
  text-align: center;
}

#taco {
  padding-top: 20px;
}
</style>

