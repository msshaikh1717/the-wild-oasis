import React from 'react';

export function Table({ children }) {
  return (
    <div
      role="table"
      className="border border-[var(--color-grey-200)] text-[1.4rem] bg-[var(--color-grey-0)] rounded-[7px] overflow-hidden"
    >
      {children}
    </div>
  );
}

export function TableHeader({ columns, children }) {
  return (
    <header
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid gap-x-[2.4rem] items-center transition-none px-[2.4rem] py-[1.6rem] bg-[var(--color-grey-50)] border-b border-[var(--color-grey-100)] uppercase tracking-[0.4px] font-semibold text-[var(--color-grey-600)]"
    >
      {children}
    </header>
  );
}

export function TableRow({ columns, children }) {
  return (
    <div
      role="row"
      style={{ gridTemplateColumns: columns }}
      className="grid gap-x-[2.4rem] items-center transition-none px-[2.4rem] py-[1.2rem] [&:not(:last-child)]:border-b [&:not(:last-child)]:border-[var(--color-grey-100)]"
    >
      {children}
    </div>
  );
}

export function TableBody({ children }) {
  return <section className="my-[0.4rem]">{children}</section>;
}

export function TableFooter({ children }) {
  return (
    <footer className="bg-[var(--color-grey-50)] flex justify-center p-[1.2rem] empty:hidden">
      {children}
    </footer>
  );
}

export function TableEmpty({ children }) {
  return (
    <p className="text-[1.6rem] font-medium text-center m-[2.4rem]">
      {children}
    </p>
  );
}

Table.Header = TableHeader;
Table.Row = TableRow;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Empty = TableEmpty;

export default Table;
