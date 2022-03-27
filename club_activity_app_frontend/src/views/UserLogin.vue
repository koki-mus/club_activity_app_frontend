<template>
  <div class="about">
    <h1>This is an login page</h1>
      <HelloMy msg="メッセージ"/>
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
console.log(Date().toLocaleString());
</script>

