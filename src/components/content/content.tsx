"use client";

import { generateTable } from "@/app/actions/generate-table";
import { TableData, TableRow } from "@/app/actions/schema";
import { useState, useTransition } from "react";
import { toast } from "sonner";
import { TableSkeleton } from "../table/table-skeleton";
import { ContentEmpty } from "./content-empty";
import { ContentGenerated } from "./content-generated";

export function Content() {
  const [prompt, setPrompt] = useState("");
  const [tableData, setTableData] = useState<TableData | null>();
  const [isLoading, startTransition] = useTransition();

  function handleSubmit(formData: FormData) {
    if (!prompt.trim() || isLoading) return;

    startTransition(async () => {
      try {
        const result = await generateTable(formData);

        if (result.error) {
          toast.error(result.error, {
            description: "Please try a different prompt or try again later.",
            duration: 5000,
          });
          setTableData(null);
        } else if (result.data) {
          toast.success("Table generated successfully", {
            description: `Created "${result.data.title}" with ${result.data.rows.length} rows`,
          });
          setTableData(result.data);
        }
      } catch (err) {
        toast.error("An unexpected error occurred", {
          description: "Please try again later.",
          duration: 5000,
        });
        console.error(err);
      }
    });
  }

  function handleKeyPress(e: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !isLoading && prompt.trim()) {
      e.preventDefault();
      const formData = new FormData();
      formData.append("prompt", prompt);
      handleSubmit(formData);
    }
  }

  function handleDelete(row: TableRow) {
    setTableData((p) => {
      if (!p) return null;
      return {
        ...p,
        rows: p.rows.filter((r) => r.name !== row.name),
      };
    });
  }

  return (
    <div>
      {/* Loading State */}
      {isLoading && !tableData && (
        <div className="flex justify-center items-center h-screen">
          <TableSkeleton />
        </div>
      )}

      {/* Empty State */}
      {!tableData && !isLoading && (
        <ContentEmpty
          prompt={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={handleSubmit}
          onKeyPress={handleKeyPress}
        />
      )}

      {/* Table Generated State */}
      {tableData && (
        <ContentGenerated
          tableData={tableData}
          isLoading={isLoading}
          prompt={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          onSubmit={handleSubmit}
          onDelete={handleDelete}
          onKeyPress={handleKeyPress}
        />
      )}
    </div>
  );
}
