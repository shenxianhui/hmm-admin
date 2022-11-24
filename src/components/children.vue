<!--
 * @Description: 子组件
 * @Author: shenxh
 * @Date: 2022-11-24 21:27:03
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-24 22:35:43
-->

<template>
  <div class="children">
    我是孩子, 现在{{ age }}岁了, 我是一个{{ sex }}孩, 我身高{{ height }}厘米,
    我喜欢吃{{ fruit }}, 我有{{ family.father }}和{{ family.mother }},
    这次期末我考的很{{ test ? '好' : '差' }}

    <br />
    <button @click="handleButton()">点这里{{ childrenNum }}</button>
  </div>
</template>

<script>
export default {
  name: 'children',
  components: {},
  props: {
    // 年龄
    age: Number,
    // 性别
    sex: String,
    // 身高
    height: [Number, String],
    // 考试结果
    test: Boolean,
    // 水果
    fruit: {
      type: String, // 类型
      default: '苹果', // 默认值
    },
    // 家庭
    family: {
      type: Object,
      default() {
        return {
          father: '父亲',
          mother: '母亲',
        }
      },
    },
  },
  data() {
    return {
      childrenNum: 0,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    handleButton() {
      this.childrenNum++

      this.$emit('handle-button', this.childrenNum)
    },
  },
}
</script>

<style lang="scss" scoped></style>
