import { PropType } from "vue";
// interface TableColumn {}

interface TableConfig {}

export const ZTableProps = {
  data: [] as PropType<any>[],
  config: Object as PropType<TableConfig>
} as const;
