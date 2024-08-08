---
layout: home

hero:
  name: C-UI组件库
  text: 基于vue3的组件库
  tagline: 掌握vue3组件的编写
  action:
    - theme: brand
      text: 快速开始
      link: /guide/quickStart
---

### 通用库设计规划

1. 构建工具: 通过构建工具进行库构建，构建 es5 兼容性代码和输出规范
2. 按需加载: NPM 包可以支持按需引入或 treeShaking,减少业务应用的打包体积
3. 版本发布: 基于构建产物进行库包版本发布和安装使用
4. 代码检查: 开发态代码有统一的检查工具，确保上传到仓库中的代码没有 eslint 错误
5. 代码格式: 开发态代码有统一的格式工具, 提升团队 CodeReview 的效率

> 一般在库的设计过程中，需要考虑如何使库的设计更加规范，高效和稳定，在库的使用过程中，需要考虑业务的引入体验，确保使用的高效和稳定

### 使用 monorepo 实现通用组件库搭建

- 基于 pnpm 和 monorepo 实现组件库的架构, 一个项目下管理多个仓库，达到仓库资源共享 可以实现组件的发布和部署

  - vue3 和 typescript

- components 组件
- hooks 自定义钩子
- themeChalk
- docs 存放组件文档
- core 工具函数
- play 项目演示工具
- utils

- pnpm i @cooper/components -w 根目录下安装 package 下的包

- 定义bem规范 并使用sass语法
- 使用viocons/xicons5自定义我们的图标

- eslint(校验代码是否符合规范) + prettier(自动格式化)集成环境

  - eslint配置文件 (eslint-config-prettier eslint-plugin-prettier)
  - prettier配置文件 (vscode配置 formattier format on save)

  - ci/cd 脚手架 组件库 算法

  - vitepress 进行文档展示
  - 虚拟树

- vue代码格式化问题

  - eslint配置

        - eslint 解决eslint引擎
        - eslint-plugin-vue vue中eslint标砖语法 对应的解析是vue3中的语法一致性
        - @typescript-eslint/eslint-plugin
        - @typescript-eslint/parser
        - vue-eslint-parser vue语法解析器
        - @vue/eslint-config-typescript vue中ts的校验规范
        - eslint-config-prettier": "^9.1.0",
        - eslint-plugin-prettier": "^5.2.1",
        - prettier": "^3.3.3"

    > pnpm install eslint eslint-plugin-vue @typescript-eslint/eslint-plugin @typescript-eslint/parser vue-eslint-parser @vue/eslint-config-typescript -D
    > pnpm install prettier eslint-plugin-prettier eslint-config-prettier -D

    > 保证prettier和eslint的格式化一致性

    - ```JS
         module.exports = {
           env: {
             node: true,
             browser: true,
             es2021: true,
           },
           extends: [
             "eslint:recommended", // 集成eslint推荐规范 eslint
             "plugin:vue/vue3-recommended", //  继承vue3语法校验 eslint-plugin-vue
             "plugin:@typescript-eslint/recommended", // 继承typescript语法规范 @typescript-eslint/eslint-plugin
             "@vue/typescript/recommended", // 继承@vue/eslint-config-typescript语法规范，解决了vue文件中ts的校验问题
           ],
           parser: "vue-eslint-parser",  // vue eslint 解析器 vue-eslint-parser
           // plugins: ["vue", "@typescript-eslint/eslint-plugin"],
           rules: {
             "@typescript-eslint/no-explicit-any": "off",
             "vue/multi-word-component-names": "off",
             "vue/max-attributes-per-line": "off",
             "vue/html-self-closing": "off",
             "vue/singleline-html-element-content-newline": "off",
           },
         };
      ```

---

## hello: world

<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

## Markdown Content

The count is: {{ count }}

<button :class="$style.button" @click="count++">Increment</button>

<style module>
.button {
  color: red;
  font-weight: bold;
}
</style>
