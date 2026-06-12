export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-white/5">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} Supisara Meemana. All rights reserved.</p>
        <p>Built with Next.js & Tailwind CSS</p>
      </div>
    </footer>
  );
}
