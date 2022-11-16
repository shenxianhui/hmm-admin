<template>
  <div class="demo">
    <!-- 模板语法 -->
    <div class="demo-item">
      <h2>模板语法</h2>
      <div class="demo-item-content">胡明明喜欢吃{{ foods }}食物</div>
    </div>

    <!-- 点击事件 -->
    <div class="demo-item">
      <h2>点击事件</h2>
      <div class="demo-item-content" @click="handleNum()">
        {{ num }}
      </div>
    </div>

    <!-- 计算属性 -->
    <div class="demo-item">
      <h2>计算属性</h2>
      <div class="demo-item-content">{{ num1 }} + {{ num2 }} = {{ total }}</div>
    </div>

    <!-- 侦听器 -->
    <div class="demo-item">
      <h2>侦听器</h2>
      <div class="demo-item-content">
        {{ watchData }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 组件名
  name: 'demo',
  // 组件注册
  components: {},
  // 接受父组件的值
  props: {},
  // 当前组件的数据
  data() {
    return {
      foods: '粑粑',
      num: 0,
      num1: 15,
      num2: 24,
      watchData: 0,
    }
  },
  // 计算属性
  computed: {
    total() {
      return this.num1 + this.num2
    },
  },
  // 数据监听
  watch: {
    num(val, oldVal) {
      this.watchData = val + oldVal
    },
  },
  // 生命钩子: 实例创建完成后且DOM(元素)渲染完成之前
  created() {},
  // 生命钩子: DOM(元素)渲染完成之后执行
  mounted() {},
  // 生命钩子: 实例及DOM(元素)销毁前执行, 此时能够使用DOM
  beforeDestroy() {},
  // 方法
  methods: {
    handleNum() {
      this.num++
    },
  },
}
</script>

<style lang="scss" scoped></style>
