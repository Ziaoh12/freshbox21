<template>
  <div>
    <div>
      <div id="search">
        <section class="bg-indigo-dark h-50 p-8">
          <div class="container mx-auto">
            <input
              class="w-full h-16 px-3 rounded-full focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
              type="search"
              placeholder="Search..."
            />
          </div>
        </section>

        <div class="Dashboard">
          <div id="DashboardHead">
            <h1>
              Hi, Chris <br />
              Welcome back
            </h1>
          </div>

          <div class="grid grid-cols-3 gap-2 pl-2 mt-4">
            <p id="protext">Protein</p>
            <p id="protext2">Sugar-free</p>
            <p id="protext2">Vegetarian</p>
          </div>

          <div class="grid grid-cols-2 gap-8 px-10 mt-8">
            <router-link to="/Nutrition">
              <div class="shadow-lg rounded-lg py-4">
                <img
                  id="dustimg"
                  src="https://ucarecdn.com/c043baf8-243c-43bf-b338-99392ff3d636/Untitled406.png"
                  alt=""
                />
                <p class="foodname">Sunflower <br />Seeds</p>
                <p class="foodprice">$11</p>
              </div>
            </router-link>

            <div class="shadow-lg rounded-lg py-4">
              <img
                id="avocadoimg"
                src="https://ucarecdn.com/5828a6e9-6375-4dff-86fa-c4f287ec2621/Untitledz02removebgpreview.png"
                alt=""
              />
              <p class="foodname">Avocado <br />cube</p>
              <p class="foodprice">$8</p>
            </div>

            <div class="shadow-lg rounded-lg py-4">
              <img
                id="blueberryimg"
                src="https://ucarecdn.com/523dd1d4-a4ed-4b4f-8e88-f00282d7ada6/Untitledz03removebgpreview1.png"
                alt=""
              />
              <p class="foodname">Blue berry</p>
              <p class="foodprice">$10</p>
            </div>

            <div class="shadow-lg rounded-lg py-4">
              <img
                id="potatoimg"
                src="https://ucarecdn.com/5bfc6390-ff0e-464e-b075-a570980143ae/Untitled404.png"
                alt=""
              />
              <p class="foodname">Sweet potato</p>
              <p class="foodprice">$16</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>




<style>
#protext {
  font-size: 12px;
  font-weight: bold;
  color: #8759f2;
  padding-left: 40px;
}

#protext2 {
  font-size: 10px;

  color: #706f72;
  padding-left: 22px;
}

#DashboardHead {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 30px;
  font-weight: bold;
  line-height: 40px;
  padding-left: 50px;
  padding-top: 20px;
}

#search {
}

#vegitarianbtn {
  padding-right: 12px;
}

#dustimg {
  width: 80%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
}

#potatoimg {
  width: 70%;
  padding-top: 30px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

#blueberryimg {
  width: 80%;
  padding-top: 40px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
}

#avocadoimg {
  width: 70%;

  display: block;
  margin-left: auto;
  margin-right: auto;
  padding-left: 10px;
}

.foodname {
  color: black;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding-top: 15px;
}

.foodprice {
  color: #8759f2;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
  font-size: 13px;
  text-align: center;
  padding-top: 10px;
}
</style>