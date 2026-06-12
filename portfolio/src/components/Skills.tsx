const skillGroups = [
  {
    category: "Languages",
    icon: "💻",
    skills: ["JavaScript", "TypeScript", "C#.NET", "Python", "Java", "Node.js"],
  },
  {
    category: "Frontend",
    icon: "🎨",
    skills: ["React.js", "Next.js", "Angular", "Tailwind CSS", "Ant Design"],
  },
  {
    category: "Backend & APIs",
    icon: "⚙️",
    skills: ["ASP.NET Core", "SignalR", "GraphQL", "TypeORM", "REST APIs", "WebUSB"],
  },
  {
    category: "Cloud & Databases",
    icon: "☁️",
    skills: ["AWS Lambda", "S3", "EC2 / ECS", "MSSQL", "Azure SQL", "RDS"],
  },
  {
    category: "Testing",
    icon: "🧪",
    skills: ["Selenium WebDriver", "SpiraTest", "Unit Testing"],
  },
  {
    category: "Tools & Practices",
    icon: "🛠",
    skills: ["Git & GitHub", "Agile / Scrum", "MVC Architecture", "Technical Documentation"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            What I work with
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills & Technologies</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 hover:border-violet-500/30 transition-colors"
            >
              <div className="text-2xl mb-3">{group.icon}</div>
              <h3 className="text-white font-semibold mb-4">{group.category}</h3>
              <ul className="space-y-2">
                {group.skills.map((skill) => (
                  <li key={skill} className="text-sm text-slate-400 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-violet-400 flex-shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
