"use server";

import { revalidatePath } from "next/cache";
import { zTableResponseSchema, TableData } from "./schema";
import { model } from "@/lib/claude";
import { generateObject } from "ai";
import { systemPrompt } from "@/lib/presets";

export async function generateTable(formData: FormData) {
  const prompt = formData.get("prompt");

  if (!prompt || typeof prompt !== "string") {
    return { error: "Please provide a prompt" };
  }

  try {
    const result = await generateObject({
      model: model,
      schema: zTableResponseSchema,
      system: systemPrompt(),
      prompt: prompt,
    });

    const tableData = result.object;

    const processedData: TableData = {
      title: tableData.title,
      columns: tableData.columns,
      rows: tableData.rows,
    };
    revalidatePath("/");

    return { data: processedData };
  } catch (error) {
    console.error("Error generating table:", error);

    const errorMessage =
      error instanceof Error
        ? error.message
        : "Failed to generate table data. Please try again.";

    return { error: errorMessage };
  }
}
