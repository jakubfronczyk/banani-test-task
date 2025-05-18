import { TableData, TableRow } from "@/app/actions/schema";
import { TableHeader } from "./table-header";
import { TableBody } from "./table-body";

interface Props {
  tableData: TableData;
  onDelete: (row: TableRow) => void;
}

export function Table({ tableData, onDelete }: Props) {
  return (
    <div>
      <h1 className="ml-2 mb-2 text-xs font-medium text-gray-500 dark:text-stone-400">
        {tableData.title}
      </h1>
      <div className="border border-border rounded-lg shadow-sm overflow-hidden">
        <table className="min-w-full divide-y divide-divide">
          <TableHeader columns={tableData.columns} />
          <TableBody tableData={tableData} onDelete={onDelete} />
        </table>
      </div>
    </div>
  );
}
