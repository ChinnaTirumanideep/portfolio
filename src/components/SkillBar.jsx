export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4 w-full">
      <div className="mb-1 flex justify-between">
        <h3 className="text-sm font-medium text-[var(--text-primary)] sm:text-base">{skill}</h3>
        <span className="text-xs text-[var(--text-secondary)] sm:text-sm">{level}%</span>
      </div>
      <div className="h-2 w-full rounded-full bg-[var(--border-color)]">
        <div className="h-2 rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-500" style={{ width: `${level}%` }}></div>
      </div>
    </div>
  );
}
