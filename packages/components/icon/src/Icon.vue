<template>
  <i :class="bem.b()" :style="style">
    <slot></slot>
  </i>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { iconProps } from "./icon";
import { createNamespace } from "@cooper/utils/create";
const props = defineProps(iconProps);
const bem = createNamespace("icon");
// 添加了defineOptions插件
// 使用组件的命名规则
defineOptions({
  name: "CIcon"
});

const style = computed(() => {
  if (!props.size && !props.color) return {};
  return {
    ...(props.size ? { "font-size": props.size + "px" } : {}),
    ...(props.color ? { color: props.color } : {})
  };
});
</script>
