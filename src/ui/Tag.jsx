function Tag({ type, children }) {
  return (
    <span
      className={`w-fit uppercase text-[1.1rem] font-semibold py-[0.4rem] px-[1.2rem] rounded-[100px] text-[var(--color-${type}-700)] bg-[var(--color-${type}-100)]`}
    >
      {children}
    </span>
  );
}

export default Tag;
