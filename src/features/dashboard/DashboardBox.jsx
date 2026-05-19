function DashboardBox({ children, className = "" }) {
  return (
    <div
      className={`bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] p-[3.2rem] flex flex-col gap-[2.4rem] ${className}`}
    >
      {children}
    </div>
  );
}

export default DashboardBox;
