import { TableColumn } from "@/app/actions/schema";
import { TableIcon } from "./table-icon";

interface Props {
  columns: TableColumn[];
}

export function TableHeader({ columns }: Props) {
  return (
    <thead>
      <tr>
        {columns.map((column) => (
          <th
            key={column.key}
            className="px-6 py-1.5 text-left text-xs font-medium text-gray-500 dark:text-stone-400 whitespace-nowrap"
          >
            {column.key === "actions" ? (
              <span className="flex justify-center w-full">
                <TableIcon name="more-horizontal" className="w-5" />
              </span>
            ) : (
              <div className="flex justify-start items-center space-x-2 overflow-hidden">
                {column.icon && (
                  <span className="flex-shrink-0">
                    <TableIcon name={column.icon} className="w-3" />
                  </span>
                )}
                <span className="truncate">{column.header}</span>
              </div>
            )}
          </th>
        ))}
      </tr>
    </thead>
  );
}
