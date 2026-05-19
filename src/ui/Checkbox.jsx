function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <div className='flex gap-[1.6rem] [&_input[type="checkbox"]]:h-[2.4rem] [&_input[type="checkbox"]]:w-[2.4rem] [&_input[type="checkbox"]]:outline-offset-2 [&_input[type="checkbox"]]:origin-left [&_input[type="checkbox"]]:accent-[var(--color-brand-600)] [&_input[type="checkbox"]:disabled]:accent-[var(--color-brand-600)] [&_label]:flex-1 [&_label]:flex [&_label]:items-center [&_label]:gap-[0.8rem]'>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </div>
  );
}

export default Checkbox;
