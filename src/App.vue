<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Inicio</router-link> |
      <router-link to="/read">Leer</router-link> |
      <router-link to="/eyachay">Eyachay</router-link>
      <!-- <router-link to="/quest">Quest</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  beforeMount(){
    this.$store.dispatch('loadStorage');
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

// @import "~bulma/sass/utilities/_all";

// // Set your colors
// $primary: #8c67ef;
// $primary-invert: findColorInvert($primary);
// $twitter: #4099ff;
// $twitter-invert: findColorInvert($twitter);

// // Setup $colors to use as bulma classes (e.g. 'is-twitter')
// $colors: (
//   "white": (
//     $white,
//     $black,
//   ),
//   "black": (
//     $black,
//     $white,
//   ),
//   "light": (
//     $light,
//     $light-invert,
//   ),
//   "dark": (
//     $dark,
//     $dark-invert,
//   ),
//   "primary": (
//     $primary,
//     $primary-invert,
//   ),
//   "info": (
//     $info,
//     $info-invert,
//   ),
//   "success": (
//     $success,
//     $success-invert,
//   ),
//   "warning": (
//     $warning,
//     $warning-invert,
//   ),
//   "danger": (
//     $danger,
//     $danger-invert,
//   ),
//   "twitter": (
//     $twitter,
//     $twitter-invert,
//   ),
// );

// // Links
// $link: $primary;
// $link-invert: $primary-invert;
// $link-focus-border: $primary;

// // Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";
</style>
