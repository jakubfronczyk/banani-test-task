"use client";

import { useAutoResizeTextarea } from "@/hooks/useResizeTextarea";
import { ArrowUp } from "lucide-react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface Props {
  prompt: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (formData: FormData) => void;
  onKeyPress: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export function ContentEmpty({
  prompt,
  onChange,
  onSubmit,
  onKeyPress,
}: Props) {
  const textareaRef = useAutoResizeTextarea(prompt);

  return (
    <div className="flex items-center justify-center flex-col mt-[20vh]">
      <h1 className="text-3xl font-bold mb-6 text-center text-title animate-fade-down animate-once">
        Generate Your Custom Table
      </h1>
      <form
        action={onSubmit}
        className="w-[580px] min-h-[100px] p-2 space-y-2 flex flex-col bg-input shadow-lg rounded-xl border border-border transition-all duration-300 ease-in-out animate-fade-down animate-once delay-200"
      >
        <Textarea
          ref={textareaRef}
          id="prompt"
          name="prompt"
          value={prompt}
          onChange={onChange}
          onKeyDown={onKeyPress}
          className="border-none resize-none flex-1 max-h-[300px]"
          placeholder="What kind of table do you want to generate? "
        />

        <div className="flex justify-end">
          <Button type="submit" disabled={prompt === ""}>
            <ArrowUp />
          </Button>
        </div>
      </form>
      <p className="mt-4 text-center font-light max-w-md text-text animate-fade-down animate-once delay-400">
        Example: Table with 5 rows displaying company documents. Each table item
        should contain documents’ names, dates when they was added added and
        actions to delete them.
      </p>
    </div>
  );
}
