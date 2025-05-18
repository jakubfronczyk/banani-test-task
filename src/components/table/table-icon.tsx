import { ForwardRefExoticComponent, RefAttributes } from "react";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";

type LucideIconComponent = ForwardRefExoticComponent<
  Omit<LucideIcons.LucideProps, "ref"> & RefAttributes<SVGSVGElement>
>;

interface Props {
  name: string;
  className?: string;
}

export function TableIcon({ name, className = "" }: Props) {
  try {
    const pascalCaseName = name
      .split("-")
      .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
      .join("");

    const iconExists = pascalCaseName in LucideIcons;

    if (iconExists) {
      const IconComponent = LucideIcons[
        pascalCaseName as keyof typeof LucideIcons
      ] as LucideIconComponent;

      return <IconComponent className={cn(className)} />;
    }

    return <LucideIcons.HelpCircle className={cn(className)} />;
  } catch (error) {
    console.error(`Error rendering icon: ${name}`, error);
    return <LucideIcons.HelpCircle className={cn(className)} />;
  }
}
