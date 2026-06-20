const values = [
  "Precision",
  "Reliability",
  "Craftsmanship",
  "Long-Term Thinking",
];

export default function AboutValues() {
  return (
    <div className="border-y border-white/5 py-10 text-center justify-center">
      <p className="mb-8 text-sm font-semibold uppercase tracking-[0.25em] text-blue-500">
        Engineering Principles
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 fpt-40">
        {values.map((value) => (
          <div key={value}>
            <h3 className="text-lg font-semibold text-white">{value}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
