<template>
  <div id="app">
    <!-- <main>
      <div class="search-box">
        <input type="text" class="search-bar" placeholder="Search..." />
      </div>
    </main> -->

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/myplate">Myplate</router-link> |
      <router-link to="/Dashboard">Dashboard</router-link> |
      <router-link to="/nutrition">Nutrition</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "montserrat", sans-serif;
}

main {
  min-height: 80vh;
  padding: px;

  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  color: #2c3e50;
}

#nav {
  padding: 20px;
  position: fixed;
  bottom: 0px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

