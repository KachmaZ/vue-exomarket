<template>
  <div id="app">
    <Header />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  components: {
    Header,
    Footer,
  }
}
</script>


<style>
* {
  /* standart zero */
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  /* test borders */
  border: 1px solid black;
  border-radius: 5px;
}
</style>
