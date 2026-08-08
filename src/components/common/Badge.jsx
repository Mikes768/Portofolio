function Badge({ children }) {
  return (
    <span className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-blue-500 hover:text-blue-400">
      {children}
    </span>
  );
}

export default Badge;