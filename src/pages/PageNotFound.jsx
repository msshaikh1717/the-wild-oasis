// import { useMoveBack } from "../hooks/useMoveBack";
// import Heading from "../ui/Heading";

// function PageNotFound() {
//   const moveBack = useMoveBack();

//   return (
//     <main className="h-screen bg-[var(--color-grey-50)] flex items-center justify-center p-[4.8rem]">
//       <div className="bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] p-[4.8rem] flex-[0_1_96rem] text-center [&_h1]:mb-[3.2rem]">
//         <Heading as="h1">
//           The page you are looking for could not be found 😢
//         </Heading>
//         <button onClick={moveBack}>&larr; Go back</button>
//       </div>
//     </main>
//   );
// }

// export default PageNotFound;
export function PageNotFound() {
  return (
    <main className="h-screen bg-[var(--color-grey-50)] flex items-center justify-center p-[4.8rem]">
      <div className="bg-[var(--color-grey-0)] border border-[var(--color-grey-100)] rounded-[var(--border-radius-md)] p-[4.8rem] flex-[0_1_96rem] text-center [&_h1]:mb-[3.2rem]">
        <h1>The page you are looking for could not be found 😢</h1>
        <button>&larr; Go back</button>
      </div>
    </main>
  );
}
