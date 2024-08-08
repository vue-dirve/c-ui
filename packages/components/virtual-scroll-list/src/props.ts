import {DefineComponent, ExtractPropTypes, PropType} from "vue";

export const virtualProps = {
  dataSource: {
    type: Array,
    default: () => [],
    required: true,
  },
  dataKey: {
    type: String,
    default: "id",
    required: true,
  },
  keeps: {
    type: Number,
    default: 30,
  },
  estimateSize: {
    type: Number,
    default: 80,
  },
  dataComponent: {
    type: [Object, Function] as PropType<DefineComponent<{}, {}, any>>,
    required: true,
  },
} as const;

export type VirtualProps = ExtractPropTypes<typeof virtualProps>

export type RangeOptions = {
  start: number,
  end: number,
  padFront: number,
  padBehind: number
}