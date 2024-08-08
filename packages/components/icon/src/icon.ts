// 这里用来整个相关的属性和 ts的类型
import { PropType, ExtractPropTypes } from "vue";
export const iconProps = {
  color: String,
  size: [Number, String] as PropType<number | string>
} as const;

// 根据定义的对象属性，抽离出对应的类型
export type IconProps = ExtractPropTypes<typeof iconProps>;
