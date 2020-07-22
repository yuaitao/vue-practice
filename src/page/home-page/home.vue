 <template>
  <div>
    <div>
      {{ Name}}</div>
  </div>
</template>
 
 <script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  Name: string = "hello world";
}
</script>
 <style lang='scss' scoped>
//@import url(); 引入公共css类
</style>