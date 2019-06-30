<template>
  <div class="account-wrap" style="max-width:830px">
    <div class="title">
      <img src="../../assets/images/person/person.png" />Connnect Account
    </div>
    <el-form ref="form" :model="form" label-width="160px">
      <el-form-item label="First Name">
        <el-input v-model="form.firstName"></el-input>
      </el-form-item>
      <el-form-item label="Last Name">
        <el-input v-model="form.lastName"></el-input>
      </el-form-item>
      <el-form-item label="Gender">
        <el-radio v-model="form.gender" label="F">Female</el-radio>
        <el-radio v-model="form.gender" label="M">Male</el-radio>
      </el-form-item>
      <el-form-item label="Birthday">
        <el-col :span="4">
          <el-input v-model.number="form.year" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Year</el-col>
        <el-col :span="4">
          <el-input v-model.number="form.month" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Month</el-col>
        <el-col :span="4">
          <el-input v-model.number="form.day" placeholder="请输入内容"></el-input>
        </el-col>
        <el-col class="el-form--label-left cosmi-datastyle" :span="4">Day</el-col>
      </el-form-item>
      <el-form-item label="Telephone Number">
        <el-input v-model.number="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="Subscription Mail">
        <el-input v-model.number="form.phone"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">SAVE</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        firstName: '',
        lastName: '',
        gender: 'F',
        year: '',
        month: '',
        day: '',
        phone: '',
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
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
  .cosmi-datastyle {
    padding-left: 12px;
  }
}
</style>
