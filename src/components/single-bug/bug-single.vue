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
      重新更新了 TSLint
      然后在package.json文件中的eslintConfig：{}中的 “rules”: {加入"no-console":“off”},

      vuepress 搭建

      https://www.jianshu.com/p/f926e448e94c

      踩坑
      https://article.itxueyuan.com/e1GaBy

    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class BugSingle extends Vue {}
</script> 
<style lang='scss' scoped>
//@import url(); 引入公共css类
</style> 