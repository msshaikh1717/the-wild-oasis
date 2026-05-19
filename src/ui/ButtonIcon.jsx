function ButtonIcon({ children, ...props }) {
  return (
    <button
      className="bg-none border-none p-[0.6rem] rounded-[var(--border-radius-sm)] transition-all duration-200 hover:bg-[var(--color-grey-100)] [&_svg]:w-[2.2rem] [&_svg]:h-[2.2rem] [&_svg]:text-[var(--color-brand-600)]"
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
