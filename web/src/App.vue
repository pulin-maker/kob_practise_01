<template>
  <NavBar />
  <router-view/>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap"
import NavBar from './components/NavBarView.vue'

export default {
  name: "App",
  components: {
    NavBar
  },
  setup() {

  }
}
</script>


<style>
body {
  background-image: url("@/assets/images/image.png");
  background-size: cover;
}

</style>
