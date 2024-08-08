<template>
  <div>
    <c-icon :size="10" color="pink">1</c-icon>
    <c-icon size="20" color="red">
      <AddCircle />
    </c-icon>
    <c-icon size="40" color="yellow">
      <AddCircle />
    </c-icon>

    <!-- <c-tree></c-tree> -->
  </div>
</template>
<script setup lang="ts">
import { AddCircle } from "@vicons/ionicons5";
import { ref } from "vue";
import { Random } from "mockjs";
const totalCount = 10000;
interface DataType {
  id: number | string;
  name: string;
  desc: string;
  index: number;
}

const data: Array<DataType> = [];
let index = 0;
while (index++ < totalCount) {
  data.push({
    id: index,
    name: Random.name(),
    desc: Random.csentence(20, 120),
    index: index
  });
}

const items = ref(data);
console.log(items);
</script>

<style lang="scss" scoped>
.virtual-list {
  width: 100%;
  height: 500px;
  overflow-y: scroll;
  background-color: red;
  border: 3px solid pink;
}
</style>
