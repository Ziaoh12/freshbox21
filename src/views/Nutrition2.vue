<template>
  <div>
    <div>
      <div id="spinachimage">
        <img
          id="spinach"
          src="https://ucarecdn.com/6448a1b6-77c8-4278-b71c-bb2baffe75f9/Untitled401.png"
        />
        <div class="relative h-20 w-60">
          <div class="absolute inset-r-2 right-2 w-8 flex-Justify">
            <router-link to="/Nutrition3"
              ><i class="el-icon-arrow-right"></i
            ></router-link>
          </div>
        </div>
      </div>

      <div>
        <div>
          <p id="NutritionHead">Spinach</p>
          <h2 id="Dollar">$16</h2>
        </div>

        <div id="content">
          <p id="nut">Nutrition info</p>
          <p class="info">
            Sunflower seeds are high in protein and rich in healthy fats, as
            well as antioxidants that can lower your risk of developing serious
            conditions. It's also an excellent source of: Vitamin E.
          </p>
          <p id="nut">You can enjoy with these menu</p>
          <p class="info">
            I sit at my window this morning where the world like a passer-by
            stops for a moment, nods to me and goes.
          </p>
        </div>

        <div>
          <div id="AddToMyPlate">
            <button
              id="AddToMyPlatebtn"
              class="p-3 m-5 w-2/3 text-white rounded-full"
              href="/Dashboard"
            >
              Add to My plate
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>


<style>
#AddToMyPlatebtn {
  background-color: #8759f2;
}

#AddToMyPlate {
  text-align: center;
  padding-bottom: 20px;

  padding-bottom: 20px;
}

#spinachimage {
  width: 50%;
  padding-top: 49px;
  margin: auto;
  display: block;
}

#NutritionHead {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: bold;
  text-align: center;
}

#Dollar {
  color: #8759f2;
  text-align: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  padding-right: 30px;
}

.info {
  color: #a8a7a7;
  text-align: justify;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding-left: 40px;
  margin-block-end: 20px;
}

#nut {
  color: #8759f2;
  text-align: start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  font-weight: bold;
  padding-left: 40px;
  margin-block: 10px;
}

#bottomtext {
  color: #a8a7a7;
  text-align: start;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 14px;
  padding-left: 40px;
  margin-block-end: 20px;
}

#content {
  width: 90%;
}
</style>