import _icon from "./src/Icon.vue";
import { withInstall } from "@cooper/utils/with-install";
export * from "./src/icon";
const Icon = withInstall<typeof _icon>(_icon);

export default Icon;

declare module "vue" {
  // 接口可以合并
  export interface GlobalComponents {
    CIcon: typeof Icon;
  }
}

// 用来整合组件的，最终实现导出组件

// eslint-config-plugin eslint
