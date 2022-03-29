<template>
  <div class="about">
    <h1>This is an login page</h1>
      <HelloMy :msg="Date().toLocaleString()"/>
      <p>{{Date().toLocaleString()}}</p>

  </div>


</template>

<script>

import HelloMy from '@/components/HelloMy.vue'
export default {
  name: 'UserLogin',
  components: {
    HelloMy
  }
}
console.log("なんと");

import {apireq_test, test} from '@/modules/module';
apireq_test();
test()

</script>


