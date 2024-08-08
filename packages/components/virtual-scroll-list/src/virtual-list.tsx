import { defineComponent, onBeforeMount, ref } from "vue";
import { RangeOptions, virtualProps } from "./props";
export default defineComponent({
  name: "c-virtual-scroll-list",
  props: virtualProps,
  setup(props, {}) {
    const range = ref<RangeOptions | null>(null);

    const update = (newRange: RangeOptions) => {
        range.value = newRange;
    }


    onBeforeMount(() => {
        initVirtual({}, update)
    })

    return () => {
      // 默认展示30调数据， 其他的用空白代替
      // 1. 显示的内容通过一个盒子的高度+ translate来实现
      // 2. 用上下padding来撑开
      //    定义数据的显示范围 上padding和下padding的大小
      const { padFront, padBehind } = range.value!;
      // 需要考虑是横向的还是纵向的
      const paddingStyle = {
        padding: `${padFront}px 0 ${padBehind}px`,
      };
      return (
        <div>
          <div style={paddingStyle}></div>
        </div>
      );
    };
  },
});
