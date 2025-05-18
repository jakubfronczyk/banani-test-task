import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      data-slot="textarea"
      className={cn(
        "placeholder:text-muted-foreground dark:placeholder:text-gray-300 flex field-sizing-content min-h-16 w-full rounded-md border bg-transparent px-2 py-1 text-base outline-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm caret-blue-500",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
