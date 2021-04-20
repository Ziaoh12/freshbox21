<template>
  <div class="Myplate">
    <p id="head">My Plate</p>
    <div class="grid grid-cols-1 gap-8 p-10">
      <div class="shadow-lg grid grid-cols-3 rounded-full h-20">
        <img
          id="spinachimg1"
          src="https://ucarecdn.com/6448a1b6-77c8-4278-b71c-bb2baffe75f9/Untitled401.png"
          alt=""
        />
        <p class="foodname1">Spinach</p>
        <p class="foodprice1">$11</p>
      </div>

      <div class="shadow-lg grid grid-cols-3 rounded-full h-20">
        <img
          class="flex-1"
          id="avocadoimg1"
          src="https://ucarecdn.com/5828a6e9-6375-4dff-86fa-c4f287ec2621/Untitledz02removebgpreview.png"
          alt=""
        />
        <p class="foodname1">Avocado cube</p>
        <p class="foodprice1">$8</p>
      </div>

      <div class="shadow-lg grid grid-cols-3 rounded-full h-20">
        <img
          id="blueberryimg1"
          src="https://ucarecdn.com/523dd1d4-a4ed-4b4f-8e88-f00282d7ada6/Untitledz03removebgpreview1.png"
          alt=""
        />
        <p class="foodname1">Blue berry</p>
        <p class="foodprice1">$10</p>
      </div>

      <div class="shadow-lg grid grid-cols-3 rounded-full h-20">
        <img
          id="potatoimg1"
          src="https://ucarecdn.com/5bfc6390-ff0e-464e-b075-a570980143ae/Untitled404.png"
          alt=""
        />
        <p class="foodname1">Sweet potato</p>
        <p class="foodprice1">$16</p>
      </div>
    </div>
    <div id="Ordermyplate">
      <router-link to="/"
        ><button
          id="Ordermyplatebtn"
          class="p-3 m-5 w-2/3 text-white rounded-full"
        >
          Order my plate
        </button></router-link
      >
    </div>

    <div id="Signin">
      <div id="Signin">
        <button id="Signinbtn" class="p-3 w-2/3 text-white rounded-full">
          Save my order
        </button>
      </div>
    </div>
  </div>
</template>

<script>
</script>

 
 <style>
#head {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  line-height: 40px;
  padding-left: 0px;
  padding-top: 50px;
  color: #8759f2;
}

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
  padding-top: 19px;
}

#Ordermyplatebtn {
  background-color: #8759f2;
  margin-bottom: 20px;
}

#Ordermyplate {
  text-align: center;
}

#Signinbtn {
  color: #8759f2;
  border: 2px solid #8759f2;
  margin-bottom: 20px;
}

#Signin {
  text-align: center;
}

#taco {
  padding-top: 20px;
}

#spinachimg1 {
  width: 55%;
  display: block;
  padding-top: 14px;
  margin-left: 20px;
}

#potatoimg1 {
  width: 60%;
  display: block;
  padding-top: 18px;
  margin-left: 20px;
}

#blueberryimg1 {
  width: 60%;
  display: block;
  padding-top: 20px;
  margin-left: 20px;
}

#avocadoimg1 {
  width: 50%;
  display: block;
  padding-top: 14px;
  margin-left: 20px;
}

.foodname1 {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  align-content: center;
  padding-top: 30px;
}

.foodprice1 {
  color: #8759f2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  padding-top: 30px;
}
</style>

