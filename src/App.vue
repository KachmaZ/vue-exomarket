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
  border: 1px solid black;
  border-radius: 10px;
}
</style>
