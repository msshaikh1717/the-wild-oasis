function Spinner() {
  return (
    <div className="my-[4.8rem] mx-auto w-[6.4rem] aspect-square rounded-full bg-[radial-gradient(farthest-side,var(--color-brand-600)_94%,#0000)_top/10px_10px_no-repeat,conic-gradient(#0000_30%,var(--color-brand-600))] [mask:radial-gradient(farthest-side,#0000_calc(100%-10px),#000_0)] animate-[spin_1.5s_infinite_linear]" />
  );
}

export default Spinner;
