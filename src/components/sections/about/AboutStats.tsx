const stats = [
  {
    value: "20+",
    label: "Years Experience",
  },
  {
    value: "160+",
    label: "Users Supported",
  },
  {
    value: "5+",
    label: "Business Platforms",
  },
  {
    value: "End-to-End",
    label: "Software Delivery",
  },
];

export default function AboutStats() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 text-center justify-center">
      {stats.map((stat) => (
        <div key={stat.label}>
          <h3 className="text-4xl font-bold text-white">{stat.value}</h3>

          <p className="mt-2 text-slate-400">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
