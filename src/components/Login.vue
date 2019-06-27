<template>
  <el-form
    :model="ruleForm"
    :rules="rules"
    label-position="top"
    ref="loginForm"
    label-width="100px"
    class="login-ruleForm"
  >
    <p class="title">{{showConfirm ? 'REGISTER' : 'LOGIN'}}</p>
    <el-form-item label="Email" prop="email">
      <el-input v-model="ruleForm.email"></el-input>
    </el-form-item>
    <el-form-item label="Password" prop="password">
      <el-input v-model="ruleForm.password" type="password"></el-input>
    </el-form-item>
    <el-form-item label="Confirm password" prop="confirmPassword" v-if="showConfirm">
      <el-input v-model="ruleForm.confirmPassword" type="password"></el-input>
    </el-form-item>
    <el-form-item style="text-align: center;margin-top:-2px">
      <el-button
        type="primary"
        @click="submitForm('loginForm')"
      >{{showConfirm ? 'REGISTER' : 'LOGIN'}}</el-button>
    </el-form-item>
    <el-form-item
      :label="showConfirm ? 'Don\'t have an account?' : 'Already have an account?'"
      style="margin-top:32px"
      class="change"
    >
      <el-button type="primary" @click="change">{{showConfirm ? 'LOGIN' : 'REGISTER'}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
      showConfirm: false,
      ruleForm: {
        email: '',
        password: '',
        confirmPassword: ''
      },
      rules: {
        email: [
          {
            required: true,
            message: 'Please enter your email address.',
            trigger: 'blur'
          },
          {
            type: 'email',
            message: 'Please enter your email address in the correct format.',
            trigger: ['blur', 'change']
          }
        ],
        password: [
          {
            required: true,
            message: 'Please enter your password.',
            trigger: 'blur'
          }
        ],
        confirmPassword: [
          {
            required: true,
            message: 'Please enter your password.',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    ...mapMutations(['set_login']),
    ...mapActions(['loginController']),
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          // if (this.showConfirm) {

          // }
          console.log('valid:', valid, this.ruleForm)
          this.loginController({ ...this.ruleForm })

          this.set_login(true)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    change () {
      this.showConfirm = !this.showConfirm
      this.$refs.loginForm.resetFields()
    }
  }
}
</script>
<style lang="less" scoped>
.login-ruleForm {
  margin-top: 20px;
  .title {
    margin: 0 0 20px 20px;
    font-size: 18px;
    font-weight: 500;
  }
}
</style>

<style lang="less">
.login-ruleForm {
  .el-form-item {
    padding: 0 18px 0 20px;
  }
  .change {
    margin: 32px 0 0 0;
    padding: 10px 25px 20px;
    color: #eee;
    background-color: #111518;
    text-align: center;
    box-shadow: 0 0 1px 1px #111518;
    .el-form-item__label {
      display: block;
      line-height: 20px;
      color: #fff;
    }
    .el-button--primary {
      background-color: #fff;
      color: #151515;
    }
  }
}
</style>
