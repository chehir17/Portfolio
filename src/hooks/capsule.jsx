export default function Capsule({ label }) {
  return (
    <span className="px-3 sm:px-4 py-1 sm:py-2 bg-blue-400 shadow-xl text-white rounded-full text-xs sm:text-sm font-medium">
      {'#' + label}
    </span>
  );
}