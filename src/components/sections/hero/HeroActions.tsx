import { ArrowRight, Download } from "lucide-react";
import Button from "@/components/ui/button/Button";

export default function HeroActions() {
  return (
    <div className="flex flex-col items-center gap-6 sm:flex-row">
      <Button
        className="pad-10"
        href="#projects"
        variant="primary"
        size="lg"
        rightIcon={<ArrowRight size={18} />}
      >
        View My Work
      </Button>

      <Button
        className="pad-10"
        href="/Chris-de-Nysschen-CV.pdf"
        variant="outline"
        size="lg"
        leftIcon={<Download size={18} />}
      >
        Download CV
      </Button>
    </div>
  );
}
