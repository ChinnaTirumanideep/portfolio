export default function SkillBar({ skill, level }) {
  return (
    <div className="mb-4 w-full">
      <div className="flex justify-between mb-1">
        <h3 className="text-sm sm:text-base font-medium dark:text-white">
          {skill}
        </h3>
        <span className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded-full">
        <div
          className="h-2 rounded-full bg-blue-600"
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );
}
