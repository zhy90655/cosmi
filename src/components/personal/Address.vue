<template>
  <div class="shipping-wrap" style="width:830px">
    <div class="shipping">
      <div class="person-center-title">
        <img src="../../assets/images/person/product.png">Shipping Address
        <el-button round style="float:right;" @click="toPushAddress = true">
          <i class="el-icon-plus"></i>ADD
        </el-button>
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="tableData"
          style="width: 830px"
        >
          <el-table-column prop="name" label="NAME" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="340" align="center"></el-table-column>
          <el-table-column prop="phone" label="PHONE" align="center"></el-table-column>
          <el-table-column align="center">
            <template slot-scope="scope">
              <div class="edit">
                <img src="../../assets/images/person/edit.png">
                <img
                  @click="deleteTheAddress(scope.row.id)"
                  src="../../assets/images/person/trashcan.png"
                >
              </div>
              <div
                class="address-state"
              >{{scope.row.state==='1'?'Default Address':'set To Default Address'}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div class="shipping" style="margin-top:48px">
      <div class="title person-center-title">
        <img src="../../assets/images/person/bill.png">Billing Address
        <el-button round style="float:right;">
          <i class="el-icon-plus"></i>ADD
        </el-button>
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="tableData"
          style="width: 830px"
        >
          <el-table-column prop="name" label="NAME" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="340" align="center"></el-table-column>
          <el-table-column prop="phone" label="PHONE" align="center"></el-table-column>
          <el-table-column align="center">
            <template slot-scope="scope">
              <div class="edit">
                <img src="../../assets/images/person/edit.png">
                <img src="../../assets/images/person/trashcan.png">
              </div>
              <div
                class="address-state"
              >{{scope.row.state==='1'?'Default Address':'set To Default Address'}}</div>
            </template>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <el-dialog
      title="Add Address"
      :visible.sync="toPushAddress"
      width="40%"
      custom-class="add-address"
    >
      <el-form :model="form">
        <el-form-item label="First Name" :label-width="formLabelWidth">
          <el-col :span="8">
            <el-input v-model="form.firstName" auto-complete="off"></el-input>
          </el-col>
          <el-col class="el-form-item__label" :span="5">Last Name</el-col>
          <el-col :span="8">
            <el-input v-model="form.lastName" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Country" :label-width="formLabelWidth">
          <el-col :span="8">
            <el-input v-model="form.country" auto-complete="off"></el-input>
          </el-col>
          <el-col class="el-form-item__label" :span="5">City</el-col>
          <el-col :span="8">
            <el-input v-model="form.city" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth">
          <el-col :span="21">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label=" " :label-width="formLabelWidth">
          <el-col :span="21">
            <el-input v-model="form.address" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="Post Code" :label-width="formLabelWidth">
          <el-col :span="8">
            <el-input v-model="form.mailingCode" auto-complete="off"></el-input>
          </el-col>
          <el-col class="el-form-item__label" :span="5">Telephone</el-col>
          <el-col :span="8">
            <el-input v-model="form.phone" auto-complete="off"></el-input>
          </el-col>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="onSubmitAddress">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      tableData: [
        {
          name: 'Radient Boost',
          address:
            'Radient Boost Face Base Then To The Next line Boost Face Radient Boost Face Base Then To The Next line Boost Face',
          phone: '0528-83662664',
          state: '1'
        },
        {
          name: 'Radient Boost',
          address:
            'Radient Boost Face Base Then To The Next line Boost Face Radient Boost Face Base Then To The Next line Boost Face',
          phone: '0528-83662664',
          state: '2'
        }
      ],
      toPushAddress: false,
      formLabelWidth: '120px',
      form: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        mailingCode: '',
        phone: '',
        addressType: '1'
      }
    }
  },
  created () {
    this.getAddress(1)
  },
  methods: {
    ...mapActions(['getAddress', 'delectedAddress', 'addTheAddress']),
    deleteTheAddress (id) {
      this.$confirm(
        "If you delete this address,you can't find it again",
        'Are you sure to delete this address?',
        {
          confirmButtonText: 'Cancel',
          cancelButtonText: 'Delete',
          customClass: 'cosmi-warn',
          type: 'warning'
        }
      )
        .then(() => {
          this.delectedAddress(id).then(() => {
            this.$message({
              type: 'success',
              message: '删除成功!'
            })
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    onSubmit () {
      console.log('submit!')
    },
    onSubmitAddress () {
      this.addTheAddress(this.form, res => {
        debugger
        console.log('res', res)
      })
    }
  }
}
</script>
<style lang="less" scoped>
.shipping-wrap {
  margin-top: 32px;
  .shipping {
    .item {
      .edit {
        > img:first-child {
          margin-right: 20px;
        }
        > img {
          height: 16px;
          width: 16px;
          cursor: pointer;
        }
      }
      .address-state {
        word-break: keep-all;
      }
    }
  }
  .add-address {
    padding: 0 26px;
  }
}
</style>
