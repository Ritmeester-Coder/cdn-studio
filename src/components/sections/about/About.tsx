import Section from "@/components/ui/section/Section";
import Container from "@/components/ui/container/Container";

import AboutHeading from "./AboutHeading";
import AboutContent from "./AboutContent";
import AboutValues from "./AboutValues";
import AboutStats from "./AboutStats";

export default function About() {
  return (
    <Section
      id="about"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-32 md:pt-0 fpt-80"
    >
      <Container>
        <div className="mx-auto flex max-w-full flex-col gap-20 text-center justify-center">
          <AboutHeading />

          <AboutContent />

          <AboutValues />

          <AboutStats />
        </div>
      </Container>
    </Section>
  );
}
