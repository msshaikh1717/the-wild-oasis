const StyledPagination = ({ children }) => (
  <div className="w-full flex items-center justify-between">{children}</div>
);

const P = ({ children }) => (
  <p className="text-[1.4rem] ml-[0.8rem] [&_span]:font-semibold">{children}</p>
);

const Buttons = ({ children }) => (
  <div className="flex gap-[0.6rem]">{children}</div>
);

const PaginationButton = ({ active, children, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`border-none rounded-[var(--border-radius-sm)] font-medium text-[1.4rem] flex items-center justify-center gap-[0.4rem] p-[0.6rem_1.2rem] transition-all duration-300 [&:has(span:last-child)]:pl-[0.4rem] [&:has(span:first-child)]:pr-[0.4rem] [&_svg]:h-[1.8rem] [&_svg]:w-[1.8rem] hover:not(:disabled):bg-[var(--color-brand-600)] hover:not(:disabled):text-[var(--color-brand-50)] ${
      active
        ? "bg-[var(--color-brand-600)] text-[var(--color-brand-50)]"
        : "bg-[var(--color-grey-50)] text-inherit"
    }`}
  >
    {children}
  </button>
);
