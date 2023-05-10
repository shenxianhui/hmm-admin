<template>
  <div class="register">
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
      <el-form-item label="确认密码" prop="confirmPwd">
        <el-input
          v-model="form.confirmPwd"
          show-password
          placeholder="请再次输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="手机" prop="userTel">
        <el-input v-model="form.userTel" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="邮箱" prop="userEmail">
        <el-input
          v-model="form.userEmail"
          placeholder="请输入电子邮箱"
        ></el-input>
      </el-form-item>
      <div class="button-group">
        <el-button class="register-button" type="primary" @click="submitForm">
          注册
        </el-button>
        <el-button @click="$router.back()">返回</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'register',
  components: {},
  props: {},
  data() {
    let validateUserTel = (rule, value, callback) => {
      const reg = /^1[3456789]\d{9}$/
      const res = reg.test(value)

      if (res) {
        callback()
      } else {
        callback(new Error('请输入正确的手机号码'))
      }
    }
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.password) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {},
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
        confirmPwd: [
          { required: true, message: '请输入密码', trigger: 'change' },
          {
            min: 6,
            max: 18,
            message: '长度在 6 到 18 个字符',
            trigger: 'change',
          },
          { validator: validatePass2, trigger: 'change' },
        ],
        userTel: [
          { required: true, message: '请输入手机号码', trigger: 'change' },
          { validator: validateUserTel, trigger: 'change' },
        ],
        userEmail: [
          { required: true, message: '请输入邮箱', trigger: 'change' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
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
  },
}
</script>

<style lang="less" scoped>
.register {
  margin-bottom: 20px;
  .button-group {
    display: flex;
    justify-content: center;
    .register-button {
      margin-right: 20px;
    }
  }
}
</style>
