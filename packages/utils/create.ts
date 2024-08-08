// block 代码块  element元素 modifier 装饰 state 状态
// z-button
// z-button-box
// z-button__element
// z-button__element--modifier
// is-checked is-enabled
// c-buton__element--modifier  is-check
function _bem(
  prefixName: string,
  blockSuffix?: string,
  element?: string,
  modifier?: string
) {
  if (blockSuffix) {
    prefixName += `-${blockSuffix}`;
  }
  if (element) {
    prefixName += `__${element}`;
  }
  if (modifier) {
    prefixName += `--${modifier}`;
  }
  return prefixName;
}

function createBEM(prefixName: string) {
  const b = (blockSuffix?: string) => _bem(prefixName, blockSuffix, "", ""); //
  const e = (element?: string) =>
    element ? _bem(prefixName, "", element, "") : ""; // 根据元素是否存在 来确定是否需要生成
  const m = (modifier?: string) =>
    modifier ? _bem(prefixName, "", "", modifier) : "";

  const be = (blockSuffix: string, element: string) =>
    blockSuffix && element ? _bem(prefixName, blockSuffix, element, "") : "";
  const bm = (blockSuffix: string, modifier: string) =>
    modifier ? _bem(prefixName, blockSuffix, "", modifier) : "";
  const em = (element: string, modifier: string) =>
    element && modifier ? _bem(prefixName, "", element, modifier) : "";
  const bem = (blockSuffix: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(prefixName, blockSuffix, element, modifier)
      : "";
  const is = (name: string, enabled: string | boolean) => {
    return enabled ? `is-${name}` : "";
  };
  // 存在block的时候才生成对应的元素
  return {
    b,
    e,
    m,

    be,
    bm,
    em,
    bem,

    is
  };
}

export function createNamespace(name: string) {
  const prefixName = `c-${name}`;
  return createBEM(prefixName);
}

const bem = createNamespace("button");
console.log(bem.b("box"));
console.log(bem.e());

console.log(bem.is("check", true));
