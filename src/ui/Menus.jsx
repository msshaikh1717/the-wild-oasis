import React from 'react';

export function Menus({ children }) {
  return (
    <div className="flex items-center justify-end">
      {children}
    </div>
  );
}

export function MenuToggle({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="bg-none border-none p-[0.4rem] rounded-[var(--border-radius-sm)] translate-x-[0.8rem] transition-all duration-200 hover:bg-[var(--color-grey-100)] [&_svg]:w-[2.4rem] [&_svg]:h-[2.4rem] [&_svg]:text-[var(--color-grey-700)]"
    >
      {children}
    </button>
  );
}

export function MenuList({ position, children }) {
  return (
    <ul
      style={{ right: `${position.x}px`, top: `${position.y}px` }}
      className="fixed bg-[var(--color-grey-0)] shadow-[var(--shadow-md)] rounded-[var(--border-radius-md)]"
    >
      {children}
    </ul>
  );
}

export function MenuButton({ onClick, children }) {
  return (
    <button
      onClick={onClick}
      className="w-full text-left bg-none border-none p-[1.2rem_2.4rem] text-[1.4rem] transition-all duration-200 flex items-center gap-[1.6rem] hover:bg-[var(--color-grey-50)] [&_svg]:w-[1.6rem] [&_svg]:h-[1.6rem] [&_svg]:text-[var(--color-grey-400)] [&_svg]:transition-all [&_svg]:duration-300"
    >
      {children}
    </button>
  );
}

Menus.Toggle = MenuToggle;
Menus.List = MenuList;
Menus.Button = MenuButton;

export default Menus;
