 <template>
  <div>
    <div>
      <!-- vue+ts
      //先来个全套
      1.npm install --global @vue/cli
      //再挑一个 创建VUE
      2.vue create vue-'xxx'
      //再要求送一ts 命令行会要求选择预设
      3.只需确保选择了 TypeScript 和 Babel 选项其他的根据自己需求挑就好
      4.他会买一送一的给你vue-property-decorator 因为在Vue中使用Typescript,通过vue-property-decorator
      如果你不喜欢可以选择其他的装饰器库来简化书写
      //再来一杯mojito  加一个UI框架
      5.npm i element-ui -S
      //再来2个小菜  然后在main文件里面加两个
      6.  import ElementUI from 'element-ui';
          import 'element-ui/lib/theme-chalk/index.css';
       // 觉得厨师不行 加个自带酱  Tailwind  
      7. npm install tailwindcss
      // 
       8. src/assets/css/tailwind.css
       //tailwind.css 文件中，添加如下内容:
       9.@tailwind base;

        @tailwind components;

        @tailwind utilities;
        10. 创建 Tailwind 配置文件
        npx tailwind init
        or
        npx tailwind init --full

        10.新建 postcss.config.js

        const purgecss = require('@fullhuman/postcss-purgecss')({
            content: [
            './src/**/*.html',
            './src/**/*.vue',
            './src/**/*.jsx',
            ],

            // Include any special characters you're using in this regular expression
            defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
        })

        module.exports = {
            plugins: [
            require('tailwindcss'),
            require('autoprefixer'),
            ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
            ]
        }
      -->

    </div>
  </div>
</template>
 
 <script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Home extends Vue {
  //   Name: string = "hello world";
}
</script>
 <style lang='scss' scoped>
//@import url(); 引入公共css类
</style>