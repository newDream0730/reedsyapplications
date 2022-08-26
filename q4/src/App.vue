<template>
  <router-view/>
</template>

<style lang="scss">
body {
  margin: 0;
  background-color: #fafaf3;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: white;
  width: 760px;
  margin: 0 auto;
  box-shadow: 0px 0px 4px grey;
  padding: 0px;
}

@media only screen and (max-width: 900px ) {
  #app {
    width: 95%;
  }  
}

h1 {
  margin: 0;
}
</style>
