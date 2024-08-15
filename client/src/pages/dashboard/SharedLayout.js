import { Outlet } from "react-router-dom";
import Wrapper from "../../assets/wrappers/SharedLayout.js";
import BigSidebar from "../../components/BigSidebar.js";
import Navbar from "../../components/Navbar.js";
import SmallSidebar from "../../components/SmallSidebar.js";

const SharedLayout = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default SharedLayout;
