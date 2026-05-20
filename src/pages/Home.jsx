import { useEffect } from "react";
import { getCabins } from "../services/apiCabins";

export function Home() {
  useEffect(function () {
    async function fetchCabins() {
      const cabinList = await getCabins();
      console.log({ cabinList });
    }
    fetchCabins();
  }, []);
  return (
    <>
      <h1>Home</h1>
    </>
  );
}
