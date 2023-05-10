<template>
  <div class="hmm">
    <div class="hmm-item">
      <h2>模板语法</h2>
      <div class="hmm-item-content">申贤慧是{{ dog }}</div>
    </div>
    <div class="hmm-item">
      <h2>点击事件</h2>
      <div class="hmm-item-content" @click="handleNum()">{{ num }}</div>
    </div>
    <div class="hmm-item">
      <h2>计算属性</h2>
      <div class="hmm-item-content">{{ num1 }}+{{ num2 }}={{ total }}</div>
    </div>
    <div class="hmm-item">
      <h2>侦听器</h2>
      <div class="hmm-item-content">{{ watchData }}</div>
    </div>
    <div class="hmm-item">
      <h2>class绑定 两种颜色切换</h2>
      <div
        class="hmm-item-content content1"
        :class="{ active: isActive }"
        @click="handleBoxs()"
      ></div>
    </div>
    <div class="hmm-item">
      <h2>class绑定 三种颜色切换</h2>
      <div
        class="hmm-item-content content1"
        :class="boxColor"
        @click="handleBoxs1()"
      ></div>
    </div>
    <div class="hmm-item">
      <h2>style绑定</h2>
      <div
        class="hmm-item-content content1"
        :style="{
          background: `rgb(${randomColor[0]},${randomColor[1]},${randomColor[2]})`,
        }"
        @click="handleBoxs2()"
      ></div>
    </div>
    <div class="hmm-item">
      <h2>条件渲染</h2>
      <div class="hmm-item-content content1" @click="isShow = !isShow">
        <span v-if="isShow">啦啦啦</span>
      </div>
    </div>
    <div class="hmm-item">
      <h2>列表渲染</h2>
      <div class="hmm-item-content">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{ item.name }}{{ index + 1 }}
          </li>
        </ul>
      </div>
    </div>
    <div class="hmm-item">
      <h2>表单输入绑定</h2>
      <div class="hmm-item-content">
        <input v-model="inputNum" type="number" />+
        <input v-model="inputNum1" type="number" />={{ inputTotal }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hmm',
  components: {},
  props: {},
  data() {
    return {
      dog: '二狗子',
      num: 0,
      num1: 1,
      num2: 2,
      watchData: 0,
      isActive: false,
      colorNum: 0,
      randomColor: [0, 0, 0],
      isShow: false,
      list: [
        {
          name: '红',
        },
        {
          name: '绿',
        },
        {
          name: '蓝',
        },
      ],
      inputNum: '',
      inputNum1: '',
    }
  },
  computed: {
    total() {
      return this.num + this.num1 + this.num2
    },
    inputTotal() {
      return Number(this.inputNum) + Number(this.inputNum1)
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
    handleBoxs() {
      this.isActive = !this.isActive
    },
    handleBoxs1() {
      this.colorNum++
    },
    handleBoxs2() {
      let arr = []
      arr[0] = Math.floor(Math.random() * 256)
      arr[1] = Math.floor(Math.random() * 256)
      arr[2] = Math.floor(Math.random() * 256)

      this.randomColor = arr
    },
  },
}
</script>
<style lang="less" scoped>
.hmm {
  padding-left: 20px;
  .hmm-item {
    .content1 {
      width: 100px;
      height: 100px;
      border: 1px solid #000;
      &.active {
        background-color: aqua;
      }
      &.red {
        background-color: #f00;
      }
      &.green {
        background-color: #0f0;
      }
      &.blue {
        background-color: #00f;
      }
    }
  }
}
</style>
