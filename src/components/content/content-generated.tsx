"use client";

import { useAutoResizeTextarea } from "@/hooks/useResizeTextarea";
import { useState } from "react";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowUp, Loader2, MessageSquare } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Table } from "../table/table";
import { TableSkeleton } from "../table/table-skeleton";
import { TableData, TableRow } from "@/app/actions/schema";

interface Props {
  tableData: TableData;
  isLoading: boolean;
  prompt: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (formData: FormData) => void;
  onDelete: (row: TableRow) => void;
}

export function ContentGenerated({
  tableData,
  isLoading,
  prompt,
  onChange,
  onSubmit,
  onDelete,
}: Props) {
  const [isOpen, setIsOpen] = useState(true);

  const textareaRef = useAutoResizeTextarea(prompt);

  return (
    <div className="flex h-screen p-4">
      {/* Sidebar */}
      <div
        className={`transition-all duration-300 ease-in-out animate-fade-down animate-once ${
          isOpen ? "w-[280px]" : "w-0"
        }`}
      >
        <div
          className={`h-0 transition-all duration-300 ease-in-out ${
            !isOpen
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 -z-10 pointer-events-none"
          }`}
        >
          <Button onClick={() => setIsOpen(true)} type="button">
            <MessageSquare />
          </Button>
        </div>

        <form
          action={onSubmit}
          className={`w-[280px] min-h-[230px] p-2 space-y-4 flex flex-col bg-input shadow-lg rounded-xl border border-border transition-all duration-300 ease-in-out ${
            isOpen
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-95 -z-10 pointer-events-none"
          }`}
        >
          <Textarea
            ref={textareaRef}
            id="prompt"
            name="prompt"
            value={prompt}
            onChange={onChange}
            className="border-none resize-none flex-1 max-h-[300px]"
            placeholder="What kind of table do you want to generate?"
          />

          <div className="flex justify-between">
            <Button
              variant="ghost"
              type="button"
              onClick={() => setIsOpen(false)}
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button type="submit" disabled={isLoading || prompt === ""}>
              {isLoading ? <Loader2 className="animate-spin" /> : <ArrowUp />}
            </Button>
          </div>
        </form>
      </div>

      {/* Table Content */}
      <div className="flex-1 flex justify-center items-center ">
        {isLoading ? (
          <TableSkeleton />
        ) : (
          <Table tableData={tableData} onDelete={onDelete} />
        )}
      </div>
    </div>
  );
}
