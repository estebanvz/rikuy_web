<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Portal</router-link> |
      <router-link to="/read">{{ text.play }}</router-link> |
      <!-- <b-icon icon="earth" size="is-small"> </b-icon> -->

      <router-link to="/help">{{ text.help }}</router-link> |
      <router-link to="/eyachay">Eyachay</router-link> |

      <!-- <router-link to="/quest">Quest</router-link> | -->
      <!-- <router-link to="/about">About</router-link> -->
      <p>
        <button class="button is-small" @click="setLang('es')">Español</button>
        |
        <button class="button is-small" @click="setLang('po')">
          Português
        </button>
      </p>
    </div>
    <router-view :key="test" />
  </div>
</template>
<script>
export default {
  methods: {
    setLang(lang) {
      this.$store.state.language = lang;
      this.test+=1;
    },
  },
  beforeMount() {
    this.$store.dispatch("loadStorage");
    if (this.$store.state.language == "es") {
      this.text.play = "Jugar";
      this.text.home = "Portal";
      this.text.help = "Colaborar";
    }
    if (this.$store.state.language == "po") {
      this.text.play = "Jogar";
      this.text.help = "Colaborar";
      this.text.home = "Portal";
    }
  },
  data() {
    return {
      text: {},
      test:0
    };
  },
};
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
