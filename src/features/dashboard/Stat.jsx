function Stat({ icon, title, value, color }) {
  return (
    <div className="bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] p-[1.6rem] grid grid-cols-[6.4rem_1fr] grid-rows-[auto_auto] gap-x-[1.6rem] gap-y-[0.4rem]">
      <div
        className={`row-span-full aspect-square rounded-full flex items-center justify-center bg-[var(--color-${color}-100)] [&_svg]:w-[3.2rem] [&_svg]:h-[3.2rem] [&_svg]:text-[var(--color-${color}-700)]`}
      >
        {icon}
      </div>
      <h5 className="self-end text-[1.2rem] uppercase tracking-[0.4px] font-semibold text-[var(--color-grey-500)]">
        {title}
      </h5>
      <p className="text-[2.4rem] leading-none font-medium">{value}</p>
    </div>
  );
}

export default Stat;
