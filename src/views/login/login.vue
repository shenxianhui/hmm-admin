<!--
 * @Description: 登录页
 * @Author: shenxh
 * @Date: 2022-11-28 21:26:51
 * @LastEditors: shenxh
 * @LastEditTime: 2022-11-30 20:47:45
-->

<template>
  <div class="login">
    <el-form ref="form" :model="form" :rules="rules" label-width="80px">
      <el-form-item label="用户名" prop="username">
        <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="form.password"
          show-password
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-button class="login-button" type="primary" @click="submitForm">
        登录
      </el-button>
      <div class="other-button">
        <el-button type="text" @click="handleRegister">注册</el-button>
        <el-button type="text" @click="findPassword">找回密码</el-button>
      </div>
    </el-form>
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
        // username: 'admin',
        // password: '123456',
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
    handleRegister() {
      this.$router.push('/login/register')
    },
    findPassword() {
      this.$router.push('/login/find-password')
    },
  },
}
</script>

<style lang="less" scoped>
.login {
  .other-button {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 20px;
  }
  .login-button {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
