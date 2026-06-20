import Heading from "@/components/ui/heading/Heading";

export default function AboutHeading() {
  return (
    <Heading
      eyebrow="About CDN Studio"
      title={
        <>
          <p className="fpt-40">
            Engineering software that works <br /> in the real world.
          </p>
        </>
      }
      className="max-w-full text-center justify-center"
    />
  );
}
