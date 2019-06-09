<template>
  <div id="app">
    <Top></Top>
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Top from './components/Top'
import Header from './components/Header'
export default {
  name: 'app',
  components: {
    Top,
    Header
  },
  data () {
    return {
      radio: 1
    }
  }
}
</script>
