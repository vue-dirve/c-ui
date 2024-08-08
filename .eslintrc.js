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
