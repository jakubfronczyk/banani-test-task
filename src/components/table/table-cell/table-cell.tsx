import { cn } from "@/lib/utils";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export function TableCell({ children, className }: Props) {
  return (
    <td className={cn("px-6 py-2 whitespace-nowrap text-sm", className)}>
      {children}
    </td>
  );
}
