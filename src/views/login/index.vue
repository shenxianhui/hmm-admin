<!--
 * @Description: 登录页容器
 * @Author: shenxh
 * @Date: 2022-11-29 21:40:48
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-29 22:30:26
-->

<template>
  <div class="login-container">
    <div class="login-container-box">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login-container',
  components: {},
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {},
}
</script>

<style lang="scss" scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  .login-container-box {
    width: 500px;
    min-height: 300px;
    padding: 60px 50px 20px;
    border-radius: 10px;
    box-shadow: 0px 5px 30px #00000015;
    background: #fff;
  }
}
</style>
