export default function Footer() {
  return (
    <footer className="mt-8 border-t border-white/10 bg-[var(--surface)]/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-8 text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <p className="text-sm text-[var(--text-muted)]">
            Designed &amp; Developed by <span className="font-semibold text-[var(--text-primary)]">Tirumanideep</span>
          </p>
        </div>
        <p className="text-sm text-[var(--text-muted)]">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
