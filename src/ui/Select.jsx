function Select({ options, value, onChange, type, ...props }) {
  return (
    <select
      className={`text-[1.4rem] p-[0.8rem_1.2rem] border rounded-[var(--border-radius-sm)] bg-[var(--color-grey-0)] font-medium shadow-[var(--shadow-sm)] ${
        type === "white"
          ? "border-[var(--color-grey-100)]"
          : "border-[var(--color-grey-300)]"
      }`}
      value={value}
      onChange={onChange}
      {...props}
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default Select;
