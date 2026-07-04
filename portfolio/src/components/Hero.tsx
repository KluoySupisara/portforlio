export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-16">
      <div className="max-w-3xl mx-auto text-center">
        <div className="animate-fade-in inline-flex items-center gap-2 bg-green-500/10 border border-green-500/20 text-green-400 text-sm px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for work in Thailand
        </div>

        <h1 className="animate-fade-in-up delay-100 text-5xl sm:text-7xl font-bold text-white leading-tight tracking-tight mb-6">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
            Supisara (Kluoy)
          </span>
        </h1>

        <p className="animate-fade-in-up delay-200 text-xl sm:text-2xl text-slate-400 font-light mb-4">
          Full-Stack Software Engineer
        </p>

        <p className="animate-fade-in-up delay-300 text-slate-500 max-w-xl mx-auto leading-relaxed mb-12">
          Master of IT student at RMIT Melbourne. I build full-stack web applications
          using React, Next.js, Node.js, C#, and AWS. Previously a Software Engineer
          at Gosoft, Bangkok.
        </p>

        <div className="animate-fade-in-up delay-400 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-violet-600 hover:bg-violet-500 text-white rounded-full font-medium transition-colors"
          >
            View my work
          </a>
          <a
            href="/Supisara_ResumeTH.pdf"
            download
            className="px-8 py-3 border border-white/10 hover:border-violet-400/50 text-slate-300 hover:text-white rounded-full font-medium transition-colors flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Download Resume
          </a>
        </div>

        <div className="animate-fade-in delay-500 mt-20 flex justify-center">
          <a href="#about" aria-label="Scroll down">
            <svg className="w-6 h-6 text-slate-600 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
