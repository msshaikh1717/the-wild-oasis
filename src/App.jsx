import { Route } from "react-router";
import { Routes } from "react-router";
import { Home } from "./pages/Home";
import { Account } from "./pages/Account";
import { Bookings } from "./pages/Bookings";
import { Cabins } from "./pages/Cabins";
import { Dashboard } from "./pages/Dashboard";
import { Settings } from "./pages/Settings";
import { Users } from "./pages/Users";
import { Login } from "./pages/Login";
import { AppLayout } from "./ui/AppLayout";
import { PageNotFound } from "./pages/PageNotFound";

export function App() {
  return (
    <>
      <Routes>
        <Route element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="account" element={<Account />} />
          <Route path="bookings" element={<Bookings />} />
          <Route path="cabins" element={<Cabins />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="settings" element={<Settings />} />
          <Route path="users" element={<Users />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </>
  );
}
