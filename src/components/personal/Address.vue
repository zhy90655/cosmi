<template>
  <div class="shipping-wrap" style="width:830px">
    <div class="shipping">
      <div class="title">
        <img src="../../assets/images/person/product.png">Shipping Address
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
      <div class="title">
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
      ]
    }
  },
  created () {
    this.getAddress()
  },
  methods: {
    ...mapActions(['getAddress', 'delectedAddress']),
    deleteTheAddress (id) {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
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
    }
  }
}
</script>
<style lang="less" scoped>
.shipping-wrap {
  margin-top: 32px;
  .shipping {
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
}
</style>
<style lang="less">
.shipping-address-box {
  background-color: #fff4e8 !important;
  > th {
    background-color: #fff4e8 !important;
  }
}
</style>
