import Card from "@/components/ui/card/Card";

const stats = [
  {
    value: "20+",
    label: "Years Experience",
  },
  {
    value: "Full Stack",
    label: "Engineering",
  },
  {
    value: "Business",
    label: "Solutions",
  },
];

export default function HeroStats() {
  return (
    <div className="grid max-w-full gap-6 md:grid-cols-3">
      {stats.map((stat) => (
        <Card key={stat.label} className="text-center pad-10">
          <h3 className="text-3xl font-bold text-white">{stat.value}</h3>

          <p className="mt-2 text-sm uppercase tracking-widest text-slate-400">
            {stat.label}
          </p>
        </Card>
      ))}
    </div>
  );
}
