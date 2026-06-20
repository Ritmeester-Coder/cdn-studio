export default function HeroBackground() {
  return (
    <>
      {/* Base Background */}
      <div className="absolute inset-0 -z-30 bg-slate-950" />

      {/* Primary Glow */}
      <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.16),transparent_58%)]" />

      {/* Secondary Glow */}
      <div className="absolute left-1/2 top-1/2 -z-20 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-3xl" />

      {/* Blueprint Grid */}
      <div
        className="
          absolute inset-0 -z-10
          opacity-[0.035]
          [background-image:
            linear-gradient(rgba(255,255,255,0.14)_1px,transparent_1px),
            linear-gradient(90deg,rgba(255,255,255,0.14)_1px,transparent_1px)]
          [background-size:48px_48px]
        "
      />

      {/* Vertical Accent Line */}
      <div className="absolute left-1/2 top-0 -z-10 h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-blue-500/10 to-transparent" />

      {/* Top Fade */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-slate-950 to-transparent" />

      {/* Bottom Fade */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-slate-950 to-transparent" />
    </>
  );
}
