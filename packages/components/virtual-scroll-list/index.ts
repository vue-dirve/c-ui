export type { VirtualProps } from "./src/props";
import { withInstall } from "@cooper/utils/with-install";
import _VirtualList from "./src/virtual-list";

const VirtualScrollList = withInstall(_VirtualList);

export default VirtualScrollList;

declare module "vue" {
  // 扩展OK
  export interface GlobalComponents {
    CVirtualScrollList: typeof VirtualScrollList;
  }
}
