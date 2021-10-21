<template>
  <div>
    <nav>
      <h3>vuex、vue-router</h3>
    </nav>
    <main>
        <div class="menu">
          <ul>
            <li><router-link to="/home">首页</router-link></li>
            <li><router-link to="/products">产品列表</router-link></li>
            <li><router-link to="/shoppingCart">购物车</router-link></li>
          </ul>
        </div>
        <div class="page">
          <router-view />
        </div>
    </main>
  </div>
</template>

<style scoped>
nav {
  height: 50px;
  border-bottom: 1px solid #eaecef;
}
main {
  display: flex;
}

.page {
  padding: 20px;
  flex: 1;
}

.menu {
  width: 140px;
  min-height: 600px;
  padding: 0 20px;
  border-right: 1px solid #eaecef;
}

ul {
  list-style: none;
  padding-left: 0;
}

li {
  padding: 10px 0;
}

a {
  text-decoration:none;
  color: #2c3e50;
}
</style>