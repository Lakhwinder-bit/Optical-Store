import Footer from "../compontent/footer";
import Header from "../compontent/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* Header */}
      <Header  className="z-50"/>

      {/* Page Content */}
      <main className="pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}