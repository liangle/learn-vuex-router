<template>
  <div>
    <h3>购物车</h3>
    <div class="list">
      <div class="empty" v-if="shoppingCart.length === 0">购物车为空。</div>
      <div
        class="cell"
        v-for="(item, index) in shoppingCart"
        :key="`product_${index}`"
      >
        <div class="cell__bd">
          <span class="title">{{ item.title }}：</span>
          <span class="price">￥{{ item.price }}</span>
        </div>
        <div>
          <button class="btn-del" @click="delProductFromShoppingCart(index)">删除</button>
        </div>
      </div>
    </div>
    <div class="toobar">
      <span class="payMoney">￥{{ payMoney }}</span>
      <button class="btn" @click="submitOrder">提交订单</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
import "../../assets/style.css";

export default {
  computed: {
    ...mapState(["shoppingCart"]),
    ...mapGetters(["payMoney"]),
  },
  methods: {
    ...mapMutations(["delProductFromShoppingCart"]),
    ...mapActions(["submitOrder"]),
  },
};
</script>