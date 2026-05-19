import { NavLink } from "react-router";

export function NavList({ children }) {
  return <ul className="flex flex-col gap-[0.8rem]">{children}</ul>;
}

export function StyledNavLink({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `flex items-center gap-[1.2rem] text-[1.6rem] font-medium py-[1.2rem] px-[2.4rem] transition-all duration-300 [&_svg]:w-8 [&_svg]:h-8 [&_svg]:transition-all [&_svg]:duration-300 ${
          isActive
            ? "text-[var(--color-grey-800)] bg-[var(--color-grey-50)] rounded-[var(--border-radius-sm)] [&_svg]:text-[var(--color-brand-600)]"
            : "text-[var(--color-grey-600)] [&_svg]:text-[var(--color-grey-400)] hover:text-[var(--color-grey-800)] hover:bg-[var(--color-grey-50)] hover:rounded-[var(--border-radius-sm)] hover:[&_svg]:text-[var(--color-brand-600)]"
        }`
      }
    >
      {children}
    </NavLink>
  );
}
