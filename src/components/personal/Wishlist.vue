<template>
  <div class="wishlist-wrap">
    <el-table ref="wishlistTable" @selection-change="changeSelectedDate" header-row-class-name="wishlist-box" :data="cartlist" style="width: 100%">
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
          <template slot-scope="scope">
            <span class="product-img" @click="deleteProduct(scope.row)">
              <img src="../../assets/images/person/trashcan.png">
            </span>
          </template>
        </el-table-column>
      </el-table-column>
    </el-table>
    <div class="edit-box">
      <div class="select-states">
        <el-checkbox :indeterminate="checked" @change='selectedAll'>SELECT ALL</el-checkbox>
         <el-button @click="delectAllSelect">DELETE</el-button>
      </div>
      <el-pagination layout=" pager" :total="total.counts"></el-pagination>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      checked: false,
      selectedDate: []
    }
  },
  computed: {
    ...mapState(['cartlist']),
    // ...mapActions([]),
    total () {
      let total = { counts: 0, subtotal: 0 }
      this.cartlist.forEach(_ => {
        total.counts += _.count
        total.subtotal += _.price * _.count
      })
      return total
    }
  },
  created: {

  },
  methods: {
    changeSelectedDate (val) {
      this.selectedDate = val
    },
    deleteProduct (item) {
      console.log(item)
    },
    selectedAll () {
      this.$refs.wishlistTable.toggleAllSelection()
      this.checked = false
    },
    delectAllSelect () {
      console.log('selected:', this.selectedDate)
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
  th,tr,td {
    border: none;
  }
  .el-table--border,
  .el-table--group {
    border: none;
  }
  .el-table--border::after,
  .el-table--group::after {
    width: 0;
  }
  .el-table::before {
    z-index: 0;
  }
  .edit-box {
    margin-left: 10px;
    margin-top: 40px;
    position: relative;
    > div {
      display: inline-block;
    }
    > div:last-child {
      position: absolute;
      right: 0;
    }
    .el-checkbox__label {
      padding-left: 14px;
    }
  }
}
</style>
