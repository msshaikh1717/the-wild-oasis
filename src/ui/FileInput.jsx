function FileInput(props) {
  return (
    <input
      type="file"
      className="text-[1.4rem] rounded-[var(--border-radius-sm)] [&::file-selector-button]:font-inherit [&::file-selector-button]:font-medium [&::file-selector-button]:py-[0.8rem] [&::file-selector-button]:px-[1.2rem] [&::file-selector-button]:mr-[1.2rem] [&::file-selector-button]:rounded-[var(--border-radius-sm)] [&::file-selector-button]:border-none [&::file-selector-button]:text-[var(--color-brand-50)] [&::file-selector-button]:bg-[var(--color-brand-600)] [&::file-selector-button]:cursor-pointer [&::file-selector-button]:transition-all [&::file-selector-button]:duration-200 hover:[&::file-selector-button]:bg-[var(--color-brand-700)]"
      {...props}
    />
  );
}

export default FileInput;
