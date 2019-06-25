<template>
  <div>
    <button @click="test1">test1</button>
    <!-- <button @click="test2">test2</button>
    <button @click="test3">test3</button> -->
  </div>
</template>

<script>
import { isEmailRegister } from '../../api'
export default {
  methods: {
    test1 () {
      isEmailRegister({ email: '666@1.com' }).then(res => {
        console.log(res)
      })
    }
  }
}
</script>
