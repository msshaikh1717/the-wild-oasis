function ButtonText({ children, ...props }) {
  return (
    <button
      className="text-[var(--color-brand-600)] font-medium text-center transition-all duration-300 bg-none border-none rounded-[var(--border-radius-sm)] hover:text-[var(--color-brand-700)] active:text-[var(--color-brand-700)]"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonText;
