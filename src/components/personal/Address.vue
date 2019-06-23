<template>
  <div class="shipping-wrap">
    <div class="shipping">
      <div class="title">
        <img src="../../assets/images/person/product.png">Shipping Address
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="name" label="NAME" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="400" align="center"></el-table-column>
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
    <div class="shipping">
      <div class="title">
        <img src="../../assets/images/person/bill.png">Billing Address
      </div>
      <div class="item">
        <el-table
          header-row-class-name="shipping-address-box"
          :data="tableData"
          style="width: 100%"
        >
          <el-table-column prop="name" label="NAME" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="ADDRESS" width="400" align="center"></el-table-column>
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
  }
}
</script>
<style lang="less" scoped>
.shipping-wrap {
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
