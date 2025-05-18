import { TableData, TableRow } from "@/app/actions/schema";
import { TableCell } from "./table-cell/table-cell";
import { TableCellContent } from "./table-cell/table-cell-content";
import { Button } from "../ui/button";
import { Trash2 } from "lucide-react";

interface Props {
  tableData: TableData;
  onDelete: (row: TableRow) => void;
}

export function TableBody({ tableData, onDelete }: Props) {
  return (
    <tbody className="bg-table divide-y divide-divide">
      {tableData.rows.map((row, index) => (
        <tr key={index}>
          {tableData.columns.map((column) =>
            column.key === "actions" ? (
              <TableCell
                key={`${index}-${column.key}`}
                className="flex space-x-2"
              >
                <Button
                  variant="ghost"
                  onClick={() => onDelete(row)}
                  className="text-red-500 dark:text-red-500 dark:hover-text-red-700 hover:text-red-700"
                >
                  <Trash2 />
                </Button>
              </TableCell>
            ) : (
              <TableCell key={`${index}-${column.key}`}>
                <TableCellContent
                  key={`${index}-${column.key}`}
                  value={row[column.key]}
                />
              </TableCell>
            )
          )}
        </tr>
      ))}
    </tbody>
  );
}
