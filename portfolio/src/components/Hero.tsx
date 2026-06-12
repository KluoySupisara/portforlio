export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        {/* Availability badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work in Australia
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Supisara
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-slate-400 font-light mb-4">
          Software Engineer
        </p>

        <p className="animate-fade-in-up delay-300 text-slate-500 max-w-xl mx-auto leading-relaxed mb-12">
          I build fast, accessible web applications with modern technologies.
          Passionate about clean code, great UX, and solving real-world problems.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-colors"
          >
            View my work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white rounded-full font-medium transition-colors"
          >
            Get in touch
          </a>
        </div>

        {/* Scroll hint */}
        <div className="animate-fade-in delay-500 mt-20 flex justify-center">
          <a href="#about" aria-label="Scroll down">
            <svg
              className="w-6 h-6 text-slate-600 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
