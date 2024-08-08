<template>
  <div class="item">
    <div class="head">
      <span>{{ source.index }}</span>
      <span>{{ source.name }}</span>
    </div>
    <div class="body">
      <span>{{ source.desc }}</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType } from "vue";

defineProps({
  source: {
    type: Object as PropType<Record<string, any>>,
    default: () => ({}),
  },
});
</script>

<style lang="scss" scoped></style>
