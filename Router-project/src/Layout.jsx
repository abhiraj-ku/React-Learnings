import Footer from "./components/Footers/Footer";
import Header from "./components/Headers/Headers";
import { Outlet } from "react-router-dom";
function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      {/* // outlet is used to render the child components of the parentcomponent */}
      <Footer />
    </>
  );
}

export default Layout;
