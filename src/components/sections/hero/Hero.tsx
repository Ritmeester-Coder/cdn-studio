import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";

import HeroBackground from "./HeroBackground";
import HeroBadge from "./HeroBadge";
import HeroHeading from "./HeroHeading";
import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <Section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <HeroBackground />

      <Container>
        <div className="relative z-10 mx-auto flex max-w-full flex-col items-center gap-10 text-center">
          <HeroBadge />

          <div className="mt-20">
            <HeroHeading />
          </div>

          <div className="mt-20 max-w-full">
            <HeroContent />
          </div>

          <div className="mt-20">
            <HeroActions />
          </div>

          <div className="mt-20 max-w-full">
            <HeroStats />
          </div>
        </div>
      </Container>
    </Section>
  );
}
