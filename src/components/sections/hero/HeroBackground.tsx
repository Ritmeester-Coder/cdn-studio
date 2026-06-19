export default function HeroBackground() {
  return (
    <>
      {/* Background Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      {/* Blueprint Grid */}
      <div
        className="
          absolute inset-0 -z-10
          opacity-[0.04]
          [background-image:
            linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.15)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </>
  );
}
