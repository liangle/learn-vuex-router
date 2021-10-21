<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view />
    <h3>路由</h3>
    <ul>
      <li>
        <!-- router-link 最终渲染成a链接 -->
        <router-link to="/products">产品列表</router-link>
      </li>
      <li><router-link to="/detail/1">产品详情</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
