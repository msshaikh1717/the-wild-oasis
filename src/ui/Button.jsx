const sizeClasses = {
  small: "text-[1.2rem] py-[0.4rem] px-[0.8rem] uppercase font-semibold text-center",
  medium: "text-[1.4rem] py-[1.2rem] px-[1.6rem] font-medium",
  large: "text-[1.6rem] py-[1.2rem] px-[2.4rem] font-medium",
};

const variationClasses = {
  primary: "text-[var(--color-brand-50)] bg-[var(--color-brand-600)] hover:bg-[var(--color-brand-700)]",
  secondary: "text-[var(--color-grey-600)] bg-[var(--color-grey-0)] border border-[var(--color-grey-200)] hover:bg-[var(--color-grey-50)]",
  danger: "text-[var(--color-red-100)] bg-[var(--color-red-700)] hover:bg-[var(--color-red-800)]",
};

function Button({ size = "medium", variation = "primary", children, ...props }) {
  return (
    <button
      className={`border-none rounded-[var(--border-radius-sm)] shadow-[var(--shadow-sm)] ${sizeClasses[size]} ${variationClasses[variation]}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
