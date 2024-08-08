import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "@cooper/theme-chalk/src/index.scss"; // 导入全局定义的bem规范样式
import Icon from "@cooper/components/icon"; // 导出的组件
import Virtual from "@cooper/components/virtual-scroll-list";
import Tree from "@cooper/components/tree";

console.log(Icon, "Icon");
const plugins = [Icon, Virtual, Tree];

const app = createApp(App);

plugins.forEach((plugin) => {
  app.use(plugin);
});
app.mount("#app");
