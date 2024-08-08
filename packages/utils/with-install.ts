import { Plugin, App } from "vue";
type SFCWithInstallType<T> = T & Plugin;
export function withInstall<T>(comp: T) {
  (comp as SFCWithInstallType<T>).install = function (app: App) {
    const { name } = comp as unknown as { name: string };
    console.log(name);
    app.component(name, comp as SFCWithInstallType<T>);
  };
  return comp as SFCWithInstallType<T>;
}
