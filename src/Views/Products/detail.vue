<template>
  <div>
    <h3>产品详情</h3>
    <div>ID：{{ model.id }}</div>
    <div>名称：{{ model.title }}</div>
    <div>价格：{{ model.price }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        title: "",
        price: "",
      },
    };
  },
  created() {
    this.model = this.$route.params;
  },
};
</script>
