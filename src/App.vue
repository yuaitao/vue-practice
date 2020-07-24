<template>
  <div id="app">
    <!-- <h1 class="bg-teal-900 mt-6 text-2xl font-bold text-gray-900 leading-tight">MIRRORS</h1> -->
    <!-- <el-container>
      <el-aside>
        <MyNavigation></MyNavigation>
      </el-aside>
      <el-container>
        <el-header>Header</el-header>
        <el-main>
          <router-view />
        </el-main>
        <el-footer>Footer</el-footer>
      </el-container>
    </el-container> -->

  </div>
</template>
  
<script>
import MyNavigation from '@/page/navigation/letf-navigation.vue'
import { Vue, Component } from 'vue-property-decorator';
@Component({
  components: {
    MyNavigation
  }
})
export default class App extends Vue {


}

</script>


<style >
.el-header,
.el-footer {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  /* line-height: 100px; */
}

.el-main {
  background-color: #ffffff;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
 
