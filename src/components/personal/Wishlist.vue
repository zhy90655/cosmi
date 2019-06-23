<template>
  <div class="wishlist-wrap">
    <el-table border="false" header-row-class-name="wishlist-box" :data="cartlist" style="width: 100%">
      <el-table-column label="Product">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column prop="img" width="100" align="center">
          <template slot-scope="scope">
            <span class="product-img">
              <img :src="scope.row.img">
            </span>
          </template>
        </el-table-column>
         <el-table-column prop="name" align="center" width="380"></el-table-column>
      </el-table-column>
      <el-table-column label="Unit Price">
        <el-table-column prop="price" align="center" width="80"></el-table-column>
        <el-table-column prop="address" align="center">
          <template >
            <span class="product-img">
              <img src="../../assets/images/person/trashcan.png">
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <el-pagination
    layout="prev, pager, next"
    :total="total.counts">
  </el-pagination>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapState(['cartlist']),
    total () {
      let total = { counts: 0, subtotal: 0 }
      this.cartlist.forEach(_ => {
        total.counts += _.count
        total.subtotal += _.price * _.count
      })
      return total
    }
  }
}
</script>
<style lang="less">
.wishlist-wrap {
  margin-top: 32px;
  .el-table thead.is-group th {
    background-color: #ffffff;
  }
  .wishlist-box:last-child {
    display: none;
  }
  th,tr,td{
    border: none;
  }
  .el-table--border, .el-table--group{
    border: none;
  }
  .el-table--border::after, .el-table--group::after{
    width: 0;
  }
  .el-table::before{
   z-index: 0;
  }
}
</style>
