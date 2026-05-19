function Form({ type, className = "", ...props }) {
  const baseClasses = "overflow-hidden text-[1.4rem]";
  const modalClasses = type === "modal" ? "w-[80rem]" : "p-[2.4rem_4rem] bg-(--color-grey-0) border border-(--color-grey-100) rounded-(--border-radius-md)";
  
  const combinedClasses = `${baseClasses} ${modalClasses} ${className}`.trim();

  return <form className={combinedClasses} {...props} />;
}

export default Form;
