import _Tree from "./src/tree.vue";
import { withInstall } from "@cooper/utils/with-install";

const Tree = withInstall(_Tree);
export default Tree;

declare module "vue" {
  export interface GlobalComponents {
    CTree: typeof Tree;
  }
}
