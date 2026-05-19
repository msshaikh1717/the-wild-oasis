import Heading from "./Heading";
import Button from "./Button";

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <main className="h-screen bg-[var(--color-grey-50)] flex items-center justify-center p-[4.8rem]">
      <div className="bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] p-[4.8rem] flex-[0_1_96rem] text-center [&_h1]:mb-[1.6rem] [&_p]:font-['Sono'] [&_p]:mb-[3.2rem] [&_p]:text-[var(--color-grey-500)]">
        <Heading as="h1">Something went wrong 🧐</Heading>
        <p>{error.message}</p>
        <Button size="large" onClick={resetErrorBoundary}>
          Try again
        </Button>
      </div>
    </main>
  );
}

export default ErrorFallback;
