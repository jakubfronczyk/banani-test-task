import { z } from "zod";

const zTableColumnSchema = z.object({
  key: z.string(),
  header: z.string(),
  icon: z.string(),
});

const zTableRowCellSchem = z.union([
  z.string(),
  z.boolean(),
  z.null(),
  z.number(),
  z.array(z.string()),
]);

const zTableRowSchema = z.record(z.string(), zTableRowCellSchem);

export const zTableResponseSchema = z.object({
  title: z.string(),
  columns: z.array(zTableColumnSchema),
  rows: z.array(zTableRowSchema),
});

export type TableData = z.infer<typeof zTableResponseSchema>;
export type TableColumn = z.infer<typeof zTableColumnSchema>;
export type TableRow = z.infer<typeof zTableRowSchema>;
export type TableRowCell = z.infer<typeof zTableRowCellSchem>;
