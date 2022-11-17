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
        <button>{{ num }}</button>
      </div>
    </div>

    <!-- 计算属性 -->
    <div class="demo-item">
      <h2>计算属性</h2>
      <div class="demo-item-content">
        {{ num }} + {{ num1 }} + {{ num2 }} = {{ total }}
      </div>
    </div>

    <!-- 侦听器 -->
    <div class="demo-item">
      <h2>侦听器</h2>
      <div class="demo-item-content">
        {{ watchData }}
      </div>
    </div>

    <!-- class 绑定 -->
    <div class="demo-item">
      <h2>class 绑定</h2>
      <div class="demo-item-content">
        <!-- 两种颜色切换 -->
        <!-- 方式1 -->
        <div
          class="demo-item-content-box"
          :class="{ active: isActive }"
          @click="handleBox()"
        ></div>
        <!-- 方式2 -->
        <!-- :class="isActive ? 'active' : ''" -->
      </div>
    </div>

    <!-- class 绑定扩展 -->
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

    <!-- style 绑定 -->
    <div class="demo-item">
      <h2>style 绑定</h2>
      <div class="demo-item-content">
        <div
          class="demo-item-content-box"
          :style="{
            background: `rgb(${randomColor[0]}, ${randomColor[1]}, ${randomColor[2]})`,
          }"
          @click="handleBox2()"
        ></div>
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
      isActive: false,
      colorNum: 0,
      randomColor: [255, 255, 255],
    }
  },
  // 计算属性
  computed: {
    total() {
      return this.num + this.num1 + this.num2
    },
    boxColor() {
      let color = ''
      let num = this.colorNum % 3

      if (num === 0) {
        color = 'red'
      }
      if (num === 1) {
        color = 'green'
      }
      if (num === 2) {
        color = 'blue'
      }

      return color
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
    handleBox() {
      this.isActive = !this.isActive
    },
    handleBox1() {
      this.colorNum++
    },
    handleBox2() {
      let arr = []

      arr[0] = Math.floor(Math.random() * 256)
      arr[1] = Math.floor(Math.random() * 256)
      arr[2] = Math.floor(Math.random() * 256)

      this.randomColor = arr
    },
  },
}
</script>

<style lang="scss" scoped>
.demo {
  padding: 20px;
  background: #efefef;
  .demo-item {
    padding: 20px;
    border-radius: 10px;
    background: #fff;
    &:not(:last-child) {
      margin-bottom: 20px;
    }
    h2 {
      margin-bottom: 10px;
    }
    .demo-item-content {
      font-size: 22px;
      .demo-item-content-box {
        cursor: pointer;
        width: 100px;
        height: 100px;
        border: 1px solid #000;
        background: #fff;
        &.active {
          background: lightblue;
        }
        &.red {
          background: #f00;
        }
        &.green {
          background: #0f0;
        }
        &.blue {
          background: #00f;
        }
      }
    }
  }
}
</style>
