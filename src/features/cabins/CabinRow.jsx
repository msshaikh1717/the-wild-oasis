export function TableRow({ children }) {
  return (
    <div className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center p-[1.4rem_2.4rem] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-grey-100)]">
      {children}
    </div>
  );
}

export function Img({ src, alt }) {
  return (
    <img
      src={src}
      alt={alt}
      className="block w-[6.4rem] aspect-[3/2] object-cover object-center scale-150 -translate-x-[7px]"
    />
  );
}

export function Cabin({ children }) {
  return (
    <div className="text-[1.6rem] font-semibold text-[var(--color-grey-600)] font-['Sono']">
      {children}
    </div>
  );
}

export function Price({ children }) {
  return <div className="font-['Sono'] font-semibold">{children}</div>;
}

export function Discount({ children }) {
  return (
    <div className="font-['Sono'] font-medium text-[var(--color-green-700)]">
      {children}
    </div>
  );
}
