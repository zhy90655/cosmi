<template>
  <div class="account-wrap">
    <div class="title">
      <img src="../../assets/images/person/person.png" />Connnect Account
    </div>
    <el-form ref="form" :model="form" label-width="120px">
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
        </el-col>
      </el-form-item>
      <el-form-item label="即时配送">
        <el-switch v-model="form.delivery"></el-switch>
      </el-form-item>
      <el-form-item label="活动性质">
        <el-checkbox-group v-model="form.type">
          <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
          <el-checkbox label="地推活动" name="type"></el-checkbox>
          <el-checkbox label="线下主题活动" name="type"></el-checkbox>
          <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="特殊资源">
        <el-radio-group v-model="form.resource">
          <el-radio label="线上品牌商赞助"></el-radio>
          <el-radio label="线下场地免费"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
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
        delivery: false,
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
  .cosmi-datastyle{
    padding-left: 12px;
  }
}
</style>
