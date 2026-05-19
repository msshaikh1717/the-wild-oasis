function Textarea(props) {
  return (
    <textarea
      className="p-[0.8rem_1.2rem] border border-[var(--color-grey-300)] rounded-[5px] bg-[var(--color-grey-0)] shadow-[var(--shadow-sm)] w-full h-32"
      {...props}
    />
  );
}

export default Textarea;
