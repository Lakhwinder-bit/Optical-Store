import Footer from "../compontent/footer";
import Header from "../compontent/header";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      {/* Header */}
      <Header />

      {/* Page Content */}
      <main className="min-h-screen">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer/>
    </>
  );
}