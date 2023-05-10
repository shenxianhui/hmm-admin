<!--
 * @Description: 练习题1
 * @Author: shenxh
 * @Date: 2022-11-23 21:18:51
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-23 23:05:44
-->

<template>
  <div class="test1">
    <div
      class="test1-box"
      :style="{
        width: width + 'px',
        height: height + 'px',
        background: color,
        transform: `scale(${newRange})`,
        borderRadius: change === 'square' ? '0' : '50%',
      }"
    ></div>
    <div class="test1-form">
      <div class="test1-form-item">
        宽度 <input v-model="width" type="number" />px
        <br />
        <br />
        高度 <input v-model="height" type="number" />px
      </div>
      <div class="test1-form-item">
        颜色 <input v-model="color" type="color" />
      </div>
      <div class="test1-form-item">
        缩放 <input v-model="range" type="range" /> {{ newRange }}
      </div>
      <div class="test1-form-item">
        转换
        <input v-model="change" type="radio" id="square" value="square" />
        <label for="square"> 正方形</label>
        <input
          v-model="change"
          type="radio"
          id="round"
          value="round"
          @click="handleRound"
        />
        <label for="round"> 圆形</label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test1',
  components: {},
  props: {},
  data() {
    return {
      width: 100,
      height: 100,
      color: '#ff6700',
      range: 50,
      change: 'square',
    }
  },
  computed: {
    newRange() {
      return this.range / 50
    },
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleRound(e) {
      if (this.width != this.height) {
        e.preventDefault() // 阻止默认事件
        alert('宽高相等时才能变为圆形')
      }
    },
  },
}
</script>

<style lang="less" scoped>
.test1 {
  width: 100vw;
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  .test1-box {
    border: 1px solid #000;
  }
  .test1-form {
    margin-top: 10px;
    .test1-form-item {
      margin-top: 20px;
      label {
        margin-right: 20px;
      }
    }
  }
}
</style>
