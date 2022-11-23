<template>
  <div class="demo">
    <div class="demo-item">
      <h2>模板语法</h2>
      <div class="demo-item-content">申贤慧喜欢吃{{ foods }}食物</div>
    </div>
    <div class="demo-item">
      <h2>点击事件</h2>
      <div class="demo-item-content" @click="handleNum()">
        <button>{{ num }}</button>
      </div>
    </div>
    <div class="demo-item">
      <h2>计算属性</h2>
      <div class="demo-item-content">
        {{ num }} + {{ num1 }} + {{ num2 }} = {{ total }}
      </div>
    </div>
    <div class="demo-item">
      <h2>侦听器</h2>
      <div class="demo-item-content">
        {{ watchData }}
      </div>
    </div>
    <div class="demo-item">
      <h2>class 绑定</h2>
      <div class="demo-item-content">
        <!-- 两种颜色切换 -->
        <div
          class="demo-item-content-box"
          :class="{ active: isActive }"
          @click="handleBox()"
        ></div>
      </div>
    </div>
    <div class="demo-item">
      <h2>class 绑定扩展</h2>
      <div class="demo-item-content">
        <!-- 三种颜色切换 -->
        <div
          class="demo-item-content-box"
          :class="boxColor"
          @click="handleBox1()"
        ></div>
  </div>
</div>
    </div>
</template>

<script>
export default {
  name: 'demo练习',
  components: {},
  props: {},
  data() {
    return {
      foods: '粑粑',
      num: 0,
      num1: 2,
      num2: 3,
      watchData: 0,
      isActive: true,
    }
  },
  computed: {
    total() {
      return this.num + this.num1 + this.num2
    },
  },
  watch: {
    num(val, oldval) {
      this.watchData = val + oldval
    },
  },
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleNum() {
      this.num++
    },
    handleBox() {
      this.isActive = !this.isActive
    },
    handleBox1(){

    }
  },
}
</script>

<style lang="scss" scoped>
.demo {
  .demo-item {
    .demo-item-content {
      .demo-item-content-box {
        &.active {
          background-color: aqua;
        }
      }
    }
  }
}
</style>
