<template>
  <div class="invoice-title">
    <div class="invoice-title-form">
      <el-form :inline="true" :model="form" class="demo-form-inline">
        <el-form-item label="用户号">
          <el-input v-model="form.userNo" placeholder="请输入用户号"></el-input>
        </el-form-item>
        <el-form-item label="发票抬头">
          <el-input
            v-model="form.userNo"
            placeholder="请输入发票抬头"
          ></el-input>
        </el-form-item>
        <el-form-item label="税号">
          <el-input v-model="form.userNo" placeholder=""></el-input>
        </el-form-item>
        <el-form-item label="是否专属">
          <el-input v-model="form.userNo" placeholder=""></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
      <el-button type="primary" @click="addData">新增</el-button>
    </div>

    <el-table :data="tableData" height="580" border style="width: 100%">
      <el-table-column prop="yhh" label="用户号"> </el-table-column>
      <el-table-column prop="yhmc" label="用户名称"> </el-table-column>
      <el-table-column prop="fptt" label="发票抬头"> </el-table-column>
      <el-table-column prop="sh" label="税号"> </el-table-column>
      <el-table-column prop="dwdz" label="单位地址"> </el-table-column>
      <el-table-column prop="dhhm" label="电话号码"> </el-table-column>
      <el-table-column prop="khyh" label="开户银行"> </el-table-column>
      <el-table-column prop="yhzh" label="银行账户"> </el-table-column>
      <el-table-column prop="dzyx" label="电子邮箱"> </el-table-column>
      <el-table-column prop="sfzp" label="是否专票"> </el-table-column>
      <el-table-column fixed="right" label="操作" width="150">
        <template slot-scope="scope">
          <el-button @click="setRowData(scope.row)" type="text" size="small">
            修改
          </el-button>
          <el-button @click="copyRowData(scope.row)" type="text" size="small">
            复制
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
  name: 'invoice-title',
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
    copyRowData(row) {
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
          yhh: '测试',
          yhmc: '测试',
          fptt: '测试',
          sh: '测试',
          dwdz: '测试',
          dhhm: '测试',
          khyh: '测试',
          yhzh: '测试',
          dzyx: '测试',
          sfzp: '测试',
        }

        arr.push(obj)
      }

      this.tableData = arr
    },
  },
}
</script>

<style lang="less" scoped>
.invoice-title {
  .invoice-title-form {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .button-del {
    color: #f00;
  }
}
</style>
