<template>
  <div class="container">
    <Header></Header>
    <Nav></Nav>

    <router-view/>
    <MyFooter></MyFooter>
  </div>
</template>

<style lang="scss">
</style>

<script>
import Nav from './components/Nav';
import MyFooter from './components/Footer';
import Header from './components/Header';

export default {
    components: {
      Nav, MyFooter, Header
    }
}
</script>