<!--
 * @Description: 设备维护
 * @Author: shenxh
 * @Date: 2022-12-06 21:57:40
 * @LastEditors: shenxh
 * @LastEditTime: 2022-12-06 22:32:24
-->

<template>
  <div class="plant-maintenance">
    <div class="plant-maintenance-form">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="用户号">
          <el-input v-model="form.userNo" placeholder="请输入用户号"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addData">新增</el-button>
    </div>

    <el-table :data="tableData" height="580" border style="width: 100%">
      <el-table-column prop="hh" label="户号"> </el-table-column>
      <el-table-column prop="yhmc" label="用户名称"> </el-table-column>
      <el-table-column prop="sbly" label="设备来源"> </el-table-column>
      <el-table-column prop="sblx" label="设备类型"> </el-table-column>
      <el-table-column prop="cs" label="厂商"> </el-table-column>
      <el-table-column prop="pp" label="品牌"> </el-table-column>
      <el-table-column prop="bjxh" label="表具型号"> </el-table-column>
      <el-table-column prop="sbbh" label="设备编号"> </el-table-column>
      <el-table-column prop="azwz" label="安装位置"> </el-table-column>
      <el-table-column prop="azsj" label="安装时间"> </el-table-column>
      <el-table-column prop="gmrq" label="购买日期"> </el-table-column>
      <el-table-column prop="scrq" label="生产日期"> </el-table-column>
      <el-table-column prop="bxnx" label="保修年限"> </el-table-column>
      <!-- <el-table-column prop="cz" label="操作"> </el-table-column> -->
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="setRowData(scope.row)" type="text" size="small">
            修改
          </el-button>
          <el-button
            class="button-del"
            type="text"
            size="small"
            @click="delRowData(scope.row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[10, 50, 100, 500]"
      :page-size="50"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  name: 'plant-maintenance',
  components: {},
  props: {},
  data() {
    return {
      form: {},
      tableData: [],
      currentPage: 1,
      total: 100,
    }
  },
  computed: {},
  watch: {},
  created() {
    this.mockData()
  },
  mounted() {},
  beforeDestroy() {},
  methods: {
    onSubmit() {
      console.log('submit!')
    },

    onReset() {
      console.log('reset!')
    },

    addData() {
      console.log('新增')
    },

    setRowData(row) {
      console.log(row)
    },

    delRowData(row) {
      console.log(row)
    },

    handleSizeChange(val) {
      console.log(`每页 ${val} 条`)
    },

    handleCurrentChange(val) {
      console.log(`当前页: ${val}`)
    },

    mockData() {
      let arr = []

      for (let i = 0; i < 100; i++) {
        const obj = {
          hh: '123456',
          yhmc: '胡明明',
          sbly: '测试',
          sblx: '测试',
          cs: '测试',
          pp: '测试',
          bjxh: '测试',
          sbbh: '测试',
          azwz: '测试',
          azsj: '测试',
          gmrq: '测试',
          scrq: '测试',
          bxnx: '测试',
          cz: '测试',
        }

        arr.push(obj)
      }

      this.tableData = arr
    },
  },
}
</script>

<style lang="less" scoped>
.plant-maintenance {
  .plant-maintenance-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button-del {
    color: #f00;
  }
}
</style>
