<template>
  <div>
    <h3>产品列表</h3>
    <div class="list">
      <div
        class="cell"
        v-for="(item, index) in products"
        :key="`product_${index}`"
      >
        <div class="cell__bd">
          <a @click="viewDetail(item)">
            <span class="title">{{ item.title }}：</span>
          </a>
          <span class="price">￥{{ item.price }}</span>
        </div>
        <div>
          <button class="btn" @click="viewDetail(item)">详情</button>
          <button class="btn" @click="addProductToShoppingCart(item)">加入购物车</button>
        </div>
      </div>
    </div>

    <div class="toobar">
      <span class="payMoney">金额：￥{{ payMoney }}</span>
      <router-link to="/ShoppingCart">
        <span>购物车: </span>
      </router-link>
      <span class="count">（{{ shoppingCartCount }}）</span>
    </div>
  </div>
</template>

<script>
import "../../assets/style.css";
import { mapState, mapGetters, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["shoppingCart"]),
    ...mapGetters(["shoppingCartCount", "payMoney"]),
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "iPhone 13",
          price: 9000,
        },
        {
          id: 2,
          title: "iPhone 12",
          price: 5000,
        },
        {
          id: 3,
          title: "MackBook Pro",
          price: 14000,
        },
        {
          id: 4,
          title: "MackBook Air",
          price: 10000,
        },
      ],
    };
  },
  methods: {
    ...mapMutations(["addProductToShoppingCart"]), //mapMutations 映射为方法
    viewDetail(product) {
      // 通过push打开路由，加到全局路由栈里
      this.$router.push({ name: `/detail`, params: product });
    },
  },
};
</script>