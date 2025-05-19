import { ThemeToggle } from "@/components/theme/theme-toggle";
import { Content } from "@/components/content/content";
import { Toaster } from "@/components/ui/sonner";

export default function Home() {
  return (
    <main>
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Content />
      <Toaster />
    </main>
  );
}
