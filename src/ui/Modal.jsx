const StyledModal = ({ children }) => (
  <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--color-grey-0)] rounded-[var(--border-radius-lg)] shadow-[var(--shadow-lg)] p-[3.2rem_4rem] transition-all duration-500">
    {children}
  </div>
);

const Overlay = ({ children }) => (
  <div className="fixed top-0 left-0 w-full h-screen bg-[var(--backdrop-color)] backdrop-blur-[4px] z-[1000] transition-all duration-500">
    {children}
  </div>
);

const Button = ({ children, onClick }) => (
  <button
    onClick={onClick}
    className="bg-none border-none p-[0.4rem] rounded-[var(--border-radius-sm)] translate-x-[0.8rem] transition-all duration-200 absolute top-[1.2rem] right-[1.9rem] hover:bg-[var(--color-grey-100)] [&_svg]:w-[2.4rem] [&_svg]:h-[2.4rem] [&_svg]:text-[var(--color-grey-500)]"
  >
    {children}
  </button>
);
