<!--  -->
<template>
  <div class=''>
    <div>
      遇见的问题
      error Type string trivially inferred from a string literal, remove type annotation @typescript-eslint/no-inferrable-types

      ✖ 1 problem (1 error, 0 warnings)
      1 error and 0 warnings potentially fixable with the `--fix` option.

      原因是
      Name: string = "hello world";
      tslint觉得自己根据右边的hello world的类型是string 不需要你在左边多写一个string判断
      解决方案
      我这里是tsconfig.json

      添加
      "noUnusedLocals": true, // 检查只声明、未使用的局部变量(只提示不报错)
      "noUnusedParameters": true, // 检查未使用的函数参数(只提示不报错)
      就没有问题了

    </div> {{ Name}}
  </div>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from "vue-property-decorator";
@Component
export default class BugSingle extends Vue {
  Name: string = "hello world";
}
</script>
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style>