const experiences = [
  {
    role: "Software Engineer + Business Analyst",
    company: "Gosoft",
    location: "Bangkok, Thailand",
    period: "Aug 2022 – Mar 2024",
    points: [
      "Promoted from Business Analyst to Software Engineer based on performance on the POS New Gen project.",
      "Built web apps using AWS Lambda and S3 with serverless architecture; developed batch processing with Angular and Ant Design.",
      "Developed JavaScript automation in AWS Lambda to monitor daily XML file signing failures, reducing manual intervention.",
      "Contributed across the full stack using Node.js, Angular, C#.NET, TypeScript, and AWS.",
    ],
    tech: ["Node.js", "Angular", "C#.NET", "TypeScript", "AWS Lambda", "S3"],
  },
  {
    role: "Car Park Officer (Part-Time)",
    company: "RMIT / Commercial Carpark",
    location: "Melbourne, Australia",
    period: "2025 – Present",
    points: [
      "Managed day-to-day car park operations and customer-facing enquiries.",
      "Handled email correspondence and account maintenance including billing discrepancy resolution.",
    ],
    tech: [],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            Where I&apos;ve worked
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Experience</h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp) => (
            <div
              key={exp.role}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-8 hover:border-violet-500/30 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-white font-semibold text-lg">{exp.role}</h3>
                  <p className="text-violet-400 font-medium">{exp.company}</p>
                  <p className="text-slate-500 text-sm">{exp.location}</p>
                </div>
                <span className="text-sm text-slate-500 whitespace-nowrap">{exp.period}</span>
              </div>

              <ul className="space-y-2 mb-5">
                {exp.points.map((point, i) => (
                  <li key={i} className="text-slate-400 text-sm flex gap-3">
                    <span className="text-violet-400 mt-1 flex-shrink-0">▹</span>
                    {point}
                  </li>
                ))}
              </ul>

              {exp.tech.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
