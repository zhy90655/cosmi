<template>
  <div class="account-wrap" style="max-width:830px">
    <div class="title">
      <img src="../../assets/images/person/person.png" />Connnect Account
    </div>
    <div class="userinfo-subtit">Required Fields</div>
    <el-form ref="userInfo" :rules="rules" :model="form" label-width="180px">
      <el-form-item label="First Name" prop="firstName">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last Name" prop="lastName">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Gender" prop="gender">
        <el-radio-group v-model="form.gender">
          <el-radio label="F">Female</el-radio>
          <el-radio label="M">Male</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="Birthday" required>
        <el-col :span="4">
          <el-form-item prop="year">
            <el-input v-model.number="form.year"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Year</el-col>
        <el-col :span="4">
          <el-form-item prop="month">
            <el-input v-model.number="form.month"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Month</el-col>
        <el-col :span="4">
          <el-form-item prop="day">
            <el-input v-model.number="form.day"></el-input>
          </el-form-item>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Day</el-col>
      </el-form-item>
      <el-form-item label="Telephone Number">
        <el-input v-model.number="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="Subscription Mail" prop="email">
        <el-input v-model.number="form.email"></el-input>
      </el-form-item>
      <el-form-item class="submit-account">
        <el-button type="primary" @click="onSubmit">SAVE</el-button>
      </el-form-item>
    </el-form>
    <div class="title">
      <img src="../../assets/images/person/password.png" />Change Password
    </div>
    <el-form ref="changePwd" status-icon :rules="rules" :model="pwd" label-width="210px">
      <el-form-item label="Current Password" prop="oldPwd">
        <el-input  type="password" v-model="pwd.oldPwd"></el-input>
      </el-form-item>
      <el-form-item label="New Password" prop="newPwd">
        <el-input  type="password" v-model="pwd.newPwd"></el-input>
      </el-form-item>
      <el-form-item label="Repeat New Password" prop="password">
        <el-input  type="password" v-model="pwd.password"></el-input>
      </el-form-item>
      <el-form-item class="submit-pwd">
        <el-button type="primary" @click="onSubmitPwd">SAVE</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { getUserInfo, updateUserInfo, updatePwd } from '../../api'
export default {
  data () {
    var validatePass = (rule, value, callback) => {
      console.log(value)
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.pwd.password !== '') {
          this.$refs.changePwd.validateField('password')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.pwd.newPwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        firstName: '',
        lastName: '',
        gender: 'F',
        year: '',
        month: '',
        day: '',
        phone: '',
        email: ''
      },
      pwd: {
        oldPwd: '',
        newPwd: '',
        password: ''
      },
      rules: {
        firstName: [
          {
            required: true,
            message: 'please enter first Name',
            trigger: 'blur'
          }
        ],
        lastName: [
          {
            required: true,
            message: 'please enter last Name',
            trigger: 'blur'
          }
        ],
        gender: [
          { required: true, message: 'please change gender', trigger: 'change' }
        ],
        year: [{ required: true, message: '年龄不能为空', trigger: 'blur' }],
        month: [{ required: true, message: '年龄不能为空', trigger: 'blur' }],
        day: [{ required: true, message: '年龄不能为空', trigger: 'blur' }],
        email: [
          { required: true, message: '请输入邮箱地址', trigger: 'blur' },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur,change'
          }
        ],
        oldPwd: [
          { required: true, message: '请选择活动资源', trigger: 'blur' }
        ],
        newPwd: [
          { validator: validatePass, trigger: 'blur' }
        ],
        password: [
          { validator: validatePass2, trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    getUserInfo().then(res => {
      if (res) {
        let {
          firstName,
          lastName,
          gender,
          year,
          month,
          day,
          phone,
          email
        } = res.data
        this.form = {
          firstName,
          lastName,
          gender,
          year,
          month,
          day,
          phone,
          email
        }
      }
    })
  },
  methods: {
    onSubmit () {
      this.$refs['userInfo'].validate(valid => {
        if (valid) {
          updateUserInfo(this.form)
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    onSubmitPwd () {
      this.$refs['changePwd'].validate(valid => {
        if (valid) {
          // let { newPwd, oldPwd } = this.pwd
          // if (newPwd === oldPwd) {
          updatePwd(this.pwd)
          // }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.account-wrap {
  .title {
    font-size: 16px;
    line-height: 52px;
    margin-top: 12px;
    font-weight: 600;
    > img {
      margin-right: 10px;
      vertical-align: middle;
    }
  }
  .userinfo-subtit {
    font-size: 12px;
    color: #565656;
    line-height: 20px;
    margin-bottom: 20px;
    &::before {
      content: "*";
      height: 20px;
      position: relative;
      left: 0px;
    }
  }
  .cosmi-datastyle {
    padding-left: 12px;
  }
}
</style>
