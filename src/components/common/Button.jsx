function Button({
  children,
  href = "#",
  icon,
  variant = "primary",
}) {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "border border-slate-700 text-white hover:border-blue-500",

    ghost:
      "text-slate-300 hover:text-blue-400",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 font-semibold transition-all duration-300 ${variants[variant]}`}
    >
      {icon}
      {children}
    </a>
  );
}

export default Button;