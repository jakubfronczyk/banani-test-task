import { TableRowCell } from "@/app/actions/schema";
import { Check, X } from "lucide-react";

interface Props {
  value: TableRowCell;
}

export function TableCellContent({ value }: Props) {
  if (value === null || value === undefined) {
    return <span className="text-gray-400">-</span>;
  }

  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 ">
        <Check className="mr-1 h-3 w-3" /> Yes
      </span>
    ) : (
      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
        <X className="mr-1 h-3 w-3" /> No
      </span>
    );
  }

  return <span>{String(value)}</span>;
}
