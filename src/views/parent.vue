<!--
 * @Description: 父组件
 * @Author: shenxh
 * @Date: 2022-11-24 21:23:56
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-24 22:55:00
-->

<template>
  <div class="parent">
    我是爸爸
    <!-- <my-children></my-children> -->
    <MyChildren
      ref="myChildren"
      :age="18"
      sex="女"
      height="150"
      :family="family"
      test
      @handle-button="getChildrenData"
    >
      <!-- 传入默认插槽的内容 -->
      <div class="content">
        这是默认区域
      </div>
      <!-- 传入具名插槽的内容, 用 "v-slot:插槽名" 来匹配 -->
      <!-- 缩写: #box -->
      <template v-slot:box>
        <div class="content">
          这是特定区域
        </div>
      </template>
    </MyChildren>
    <br />
    这是接收子组件传过来的值: {{ num }}
  </div>
</template>

<script>
import MyChildren from '@/components/children.vue'

export default {
  name: 'parent',
  components: {
    MyChildren,
  },
  props: {},
  data() {
    return {
      family: {
        father: '爸爸',
        mother: '妈妈',
      },
      num: 0,
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    // 获取子组件数据
    getChildrenData(childrenNum) {
      this.num = childrenNum
    },
  },
}
</script>

<style lang="less" scoped></style>
