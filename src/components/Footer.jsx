export default function Footer() {
  return (
    <footer className="w-full bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 text-center">
        <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300">
          Built by <span className="font-semibold">Chinna</span>
        </p>
        <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
          © {new Date().getFullYear()} • All rights reserved.
        </p>
      </div>
    </footer>
  );
}
