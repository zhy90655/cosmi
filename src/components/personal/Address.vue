<template>
  <div class="shipping-wrap" style="width:830px">
    <div class="shipping">
      <div class="person-center-title">
        <img src="../../assets/images/person/product.png" />Shipping Address
        <el-button round style="float:right;" @click="addAddressBtn(1)">
          <i class="el-icon-plus"></i>ADD
        </el-button>
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="shippingAddress"
          style="width: 830px"
        >
          <el-table-column label="NAME" width="180" align="center">
            <template slot-scope="scope">{{scope.row.firstName+' '+scope.row.lastName}}</template>
          </el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="340" align="center"></el-table-column>
          <el-table-column prop="phone" label="PHONE" align="center"></el-table-column>
          <el-table-column align="center">
            <template slot-scope="scope">
              <div class="edit">
                <img @click="editTheAddress(scope.row,1)" src="../../assets/images/person/edit.png" />
                <img
                  @click="deleteTheAddress(scope.row.id)"
                  src="../../assets/images/person/trashcan.png"
                />
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
        <img src="../../assets/images/person/bill.png" />Billing Address
        <el-button round style="float:right;" @click="addAddressBtn(2)">
          <i class="el-icon-plus"></i>ADD
        </el-button>
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="billAddress"
          style="width: 830px"
        >
          <el-table-column label="NAME" width="180" align="center">
            <template slot-scope="scope">{{scope.row.firstName+' '+scope.row.lastName}}</template>
          </el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="340" align="center"></el-table-column>
          <el-table-column prop="phone" label="PHONE" align="center"></el-table-column>
          <el-table-column align="center">
            <template slot-scope="scope">
              <div class="edit">
                <img src="../../assets/images/person/edit.png" @click="editTheAddress(scope.row,2)" />
                <img src="../../assets/images/person/trashcan.png" />
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
      :before-close="handleClose"
    >
      <el-form :model="form" ref="AddressForm" :rules="rules">
        <el-form-item label="First Name" :label-width="formLabelWidth">
          <el-col :span="9">
            <el-form-item prop="firstName">
              <el-input v-model="form.firstName" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col class="el-form-item__label" :span="6">Last Name</el-col>
          <el-col :span="9">
            <el-form-item prop="lastName">
              <el-input v-model="form.lastName" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="Country" :label-width="formLabelWidth">
          <el-col :span="9">
            <el-form-item prop="country">
              <el-input v-model="form.country" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col class="el-form-item__label" :span="6">City</el-col>
          <el-col :span="9">
            <el-form-item prop="city">
              <el-input v-model="form.city" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
        <el-form-item label="address" :label-width="formLabelWidth" prop="address">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label=" " :label-width="formLabelWidth">
          <el-input v-model="form.address" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="Post Code" :label-width="formLabelWidth">
          <el-col :span="9">
            <el-form-item prop="postCode">
              <el-input v-model="form.postCode" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col class="el-form-item__label" :span="6">Telephone</el-col>
          <el-col :span="9">
            <el-form-item prop="phone">
              <el-input v-model="form.phone" auto-complete="off"></el-input>
            </el-form-item>
          </el-col>
        </el-form-item>
      </el-form>

      <div slot="footer" class="dialog-footer">
        <el-checkbox
          :checked="form.isDefault==='Y'"
          @change="val => { form.isDefault = val?'Y':'N' }"
        >Set the default address</el-checkbox>
        <el-button type="primary" @click="onSubmitAddress">SAVE</el-button>
        <el-button @click="handleClose">CANCEL</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { mapActions, mapState } from 'vuex'
import { updateAddress, addAddress } from '../../api'
export default {
  data () {
    return {
      toPushAddress: false,
      formLabelWidth: '120px',
      isEdit: false,
      form: {
        firstName: '',
        lastName: '',
        country: '',
        city: '',
        address: '',
        postCode: '',
        phone: '',
        addressType: 1,
        isDefault: 'N'
      },
      rules: {
        firstName: [
          {
            required: true,
            message: 'please enter First Name',
            trigger: 'blur'
          }
        ],
        lastName: [
          { required: true, message: 'please enter Last Name', trigger: 'blur' }
        ],
        country: [
          { required: true, message: 'please enter country', trigger: 'blur' }
        ],
        city: [
          { required: true, message: 'please enter city', trigger: 'blur' }
        ],
        address: [
          { required: true, message: 'please enter address', trigger: 'blur' }
        ],
        postCode: [
          { required: true, message: 'please enter postCode', trigger: 'blur' }
        ],
        phone: [
          { required: true, message: 'please enter phone', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    window._this = this
    // 获取shipping地址
    this.getAddress(1)
    // 获取bill地址
    this.getAddress(2)
  },
  computed: {
    ...mapState(['shippingAddress', 'billAddress'])
  },
  methods: {
    ...mapActions(['getAddress', 'delectedAddress']),
    deleteTheAddress (id) {
      this.$confirm(
        "If you delete this address,you can't find it again",
        'Are you sure to delete this address?',
        {
          confirmButtonText: 'Delete',
          cancelButtonText: 'Cancel',
          confirmButtonClass: 'address-delete-Btn',
          cancelButtonClass: 'close-address-delete',
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
            this.getAddress(this.form.addressType)
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    handleClose () {
      this.toPushAddress = false
      this.$refs['AddressForm'].resetFields()
    },
    onSubmitAddress () {
      // let {
      //   id,
      //   firstName,
      //   lastName,
      //   address,
      //   city,
      //   country,
      //   isDefault,
      //   postCode,
      //   phone,
      //   addressType
      // } = this.form
      // let data = {
      //   id,
      //   firstName,
      //   lastName,
      //   address,
      //   city,
      //   country,
      //   isDefault,
      //   postCode,
      //   phone
      // }
      this.$refs['AddressForm'].validate(valid => {
        if (valid) {
          console.log(this.form)
          if (this.isEdit) {
            updateAddress(this.form).then(res => {
              this.getAddress(this.form.addressType)
              this.handleClose()
            })
          } else {
            addAddress(this.form).then(res => {
              this.getAddress(this.form.addressType)
              this.handleClose()
            })
          }
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    addAddressBtn (addressType) {
      this.isEdit = false
      this.form.addressType = addressType
      this.toPushAddress = true
    },
    editTheAddress (item, addressType) {
      this.form.addressType = addressType
      this.isEdit = true
      this.$nextTick(() => {
        this.$nextTick(() => {
          this.form = { ...item }
        })
      })
      this.toPushAddress = true
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
  .el-dialog__body {
    padding: 30px 26px;
  }
  .dialog-footer {
    .el-checkbox {
      position: absolute;
      left: 20px;
      font-size: 14px;
      height: 40px;
      line-height: 40px;
    }
    .el-button--primary {
      width: 108px;
      color: #fff;
      background-color: #000000;
    }
  }
}
</style>
