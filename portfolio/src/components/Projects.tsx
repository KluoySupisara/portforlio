const projects = [
  {
    title: "ClickPOS Thermal Printer Integration",
    description:
      "Capstone project for ClickPOS Pty Ltd. Built a real-time thermal printer integration for a web-based POS system used by Australian retail businesses. Includes a Windows host service, SignalR bidirectional communication, and WebUSB for driver-free browser-to-USB printing.",
    tech: ["C#", "ASP.NET Core", "SignalR", "WebUSB", "Windows Service"],
    github: "https://github.com/P000381SE-ClickPOS/clickpos-browser-printing",
    live: null,
    featured: true,
  },
  {
    title: "Vendor Hire Website",
    description:
      "Full-stack rental platform where vendors list equipment and customers browse and book rentals. Built with Next.js SSR, GraphQL for flexible data fetching, TypeORM for database management on AWS, and full authentication with role-based access.",
    tech: ["Next.js", "React", "TypeScript", "GraphQL", "TypeORM", "MSSQL"],
    github: null,
    live: null,
    featured: true,
  },
  {
    title: "Mobile Banking Web Application",
    description:
      "Secure web-based banking system with user authentication and role-based authorization. Features Deposit, Withdraw, Transfer, and Bill Payment with full transaction history, export functionality, and Azure SQL for data management.",
    tech: ["C#", ".NET Framework", "Azure SQL", "MVC"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "iOS Car Park Booking App",
    description:
      "iOS mobile app for car park booking across Melbourne CBD. Integrated real-world REST APIs for live capacity data. Includes search, date/time-based booking selection, and booking history with responsive MVC UI/UX.",
    tech: ["Swift", "iOS", "MVC", "REST APIs"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "AWS Cloud Computing",
    description:
      "Serverless event-driven architecture using AWS Lambda (class-based) triggered by S3 uploads and CloudWatch rules. Applied EC2 for VM provisioning and ECS for container orchestration to deploy and scale applications.",
    tech: ["AWS Lambda", "S3", "EC2", "ECS", "CloudWatch"],
    github: null,
    live: null,
    featured: false,
  },
  {
    title: "Software Testing & Automation",
    description:
      "Designed and executed manual and automated test cases using SpiraTest for test case management and defect tracking. Implemented automated regression testing with Selenium WebDriver.",
    tech: ["Selenium WebDriver", "SpiraTest", "Test Automation"],
    github: null,
    live: null,
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-violet-400 text-sm font-medium uppercase tracking-widest mb-3">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Projects</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6 flex flex-col hover:border-violet-500/30 transition-all hover:-translate-y-1"
            >
              {project.featured && (
                <span className="text-xs text-violet-400 border border-violet-400/30 bg-violet-400/10 px-2.5 py-0.5 rounded-full w-fit mb-4">
                  Featured
                </span>
              )}
              <h3 className="text-white font-semibold text-lg mb-2">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-5">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="text-xs text-slate-400 bg-white/[0.05] px-2.5 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                    Code
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                    Live demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
