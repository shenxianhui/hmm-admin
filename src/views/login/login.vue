<!--
 * @Description: 登录页
 * @Author: shenxh
 * @Date: 2022-11-28 21:26:51
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-28 22:32:27
-->

<template>
  <div class="login">
    <div class="login-box">
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input
            v-model="form.username"
            placeholder="请输入用户名"
          ></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input
            v-model="form.password"
            show-password
            placeholder="请输入密码"
          ></el-input>
        </el-form-item>
        <div class="button-group">
          <el-button type="primary" @click="submitForm">登录</el-button>
          <el-button @click="resetForm">重置</el-button>
        </div>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  components: {},
  props: {},
  data() {
    return {
      form: {
        username: 'admin',
        password: '123456',
      },
      rules: {
        username: [
          { required: true, message: '请输入用户名', trigger: 'change' },
          {
            min: 3,
            max: 12,
            message: '长度在 3 到 12 个字符',
            trigger: 'change',
          },
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'change' },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'change',
          },
        ],
      },
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    submitForm() {
      this.$refs.form.validate(valid => {
        console.log(valid)
        if (valid) {
          // 登录成功
          this.$message.success('登录成功')
          // 路由跳转
          this.$router.push('/home')
        } else {
          // 登录失败
          this.$message.error('请输入正确的用户名和密码')
        }
      })
    },
    resetForm() {
      this.$refs.form.resetFields()
    },
  },
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  .login-box {
    width: 500px;
    height: 300px;
    padding: 60px 50px 0;
    border-radius: 10px;
    box-shadow: 0px 5px 30px #00000015;
    background: #fff;
    .button-group {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
