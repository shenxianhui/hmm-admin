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
      <div class="demo-item-content">
        <button @click="handleNum()">{{ num }}</button>
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
        <ul class="demo-item-content-text">
          <li>1. 创建box元素, 宽高各100px</li>
          <li>2. 给box元素添加点击事件 @click="handleBox1()"</li>
          <li>
            3. 在 handleBox1 事件中使变量 colorNum (事先在 data 中定义) 累加
          </li>
          <li>4. 定义一个计算属性 boxColor 动态赋值给 class</li>
          <li>
            5. boxColor 中利用 colorNum % 3 来分出三种颜色对应的 class,
            之后返回该 class
          </li>
          <li>6. 在 style 里面定义三种 class, 名称要与上一步对应</li>
        </ul>
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
        <ul class="demo-item-content-text">
          <li>1. 创建box元素, 宽高各100px</li>
          <li>2. 给box元素添加点击事件 @click="handleBox2()"</li>
          <li>
            3. 在 handleBox2 事件中定义一个三项的数组(每项都是0-255的随机整数),
            并将该数组赋值给 randomColor (事先在 data 中定义)
          </li>
          <li>
            4. 给box元素使用 style 绑定, 给 style 添加一个 background 属性,
            对应属性值为 rgb(255, 255, 255)
          </li>
          <li>5. 把 randomColor 的每项依次赋值给 rgb</li>
        </ul>
      </div>
    </div>

    <!-- 条件渲染 -->
    <div class="demo-item">
      <h2>条件渲染</h2>
      <div class="demo-item-content">
        <div class="demo-item-content-box" @click="isShow = !isShow">
          <span v-if="isShow">v-if 显示隐藏示例</span>
        </div>
        <div class="demo-item-content-box" @click="isShow1 = !isShow1">
          <span v-show="isShow1">v-show 显示隐藏示例</span>
        </div>
        <ul class="demo-item-content-text">
          <li>相同点:</li>
          <li>v-if 和 v-show 都可以动态控制DOM元素的显示隐藏</li>
          <li>不同点:</li>
          <li>
            <b>1. 编译方面：</b>
            按控制手段和官方文献可知，v-if是惰性的，若最初指令值为false，它是不会编译的，直至指令值为true才开始局部编译存入缓存；v-show不管最初指令值为真假都会马上编译存入缓存，保留DOM
          </li>
          <li>
            <b>2. 消耗方面：</b>
            v-if 切换性能消耗较大；v-show 最初渲染消耗较大
          </li>
          <li>
            <b>3. 适用场景：</b>
            v-if 适用切换条件、项目需求稳定；v-show 适用频繁需要切换
          </li>
          <li>
            <b>4. 语法方面：</b>
            v-if 可与 v-else、 v-else-if
            配合使用进行判断执行，但一定需要相邻，不可中断；v-show 无特殊语法
          </li>
        </ul>
      </div>
    </div>

    <!-- 列表渲染 -->
    <div class="demo-item">
      <h2>列表渲染</h2>
      <div class="demo-item-content">
        <ul>
          <li v-for="(item, index) in list" :key="index">
            {{ item.name }}{{ index + 1 }}
            {{ item.name + (index + 1) }}
          </li>
        </ul>

        <ul>
          <li
            v-show="index % 2 === 0"
            v-for="(item, index) in list1"
            :key="index"
          >
            {{ item }}{{ index + 1 }}
          </li>
        </ul>
        <ul class="demo-item-content-text">
          <li>
            不推荐同时使用 v-if 和 v-for
          </li>
          <li>
            当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级
          </li>
        </ul>
      </div>
    </div>

    <!-- 表单输入绑定 -->
    <div class="demo-item">
      <h2>表单输入绑定</h2>
      <div class="demo-item-content">
        <div class="demo-item-content-test">
          <input v-model="inputNum" type="number" /> +
          <input v-model="inputNum1" type="number" /> = {{ inputTotal }}
        </div>
        <ul class="demo-item-content-text">
          <li>
            你可以用 v-model 指令在表单 input、textarea 及 select
            元素上创建双向数据绑定。
            <br />
            它会根据控件类型自动选取正确的方法来更新元素。
            <br />
            尽管有些神奇，但 v-model 本质上不过是语法糖。
            <br />
            它负责监听用户的输入事件以更新数据，并对一些极端场景进行一些特殊处理。
          </li>
        </ul>
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
      isShow: true,
      isShow1: true,
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
      list1: ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'],
      inputNum: '',
      inputNum1: '',
    }
  },
  // 计算属性
  computed: {
    total() {
      return this.num + this.num1 + this.num2
    },
    inputTotal() {
      let total = Number(this.inputNum) + Number(this.inputNum1)
      let res = Number(total.toFixed(3))

      return res
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

<style lang="less" scoped>
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
      .demo-item-content-text {
        margin-top: 20px;
        font-size: 14px;
        color: #999;
        li {
          margin-top: 5px;
          line-height: 1.5;
        }
      }
    }
  }
}
</style>
