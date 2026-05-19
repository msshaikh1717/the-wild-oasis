export function Table({ children }) {
  return (
    <div className="border border-[var(--color-grey-200)] text-[1.4rem] bg-[var(--color-grey-0)] rounded-[7px] overflow-hidden">
      {children}
    </div>
  );
}

export function TableHeader({ children }) {
  return (
    <header className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center bg-[var(--color-grey-50)] border-b border-[var(--color-grey-100)] uppercase tracking-[0.4px] font-semibold text-[var(--color-grey-600)] p-[1.6rem_2.4rem]">
      {children}
    </header>
  );
}
