import Wrapper from "../assets/wrappers/BigSidebar.js";
import { useAppContext } from "../context/appContext.js";
import Navlinks from "./Navlinks.js";
import Logo from "../components/Logo";

const BigSidebar = () => {
  const { showSidebar } = useAppContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container" : "sidebar-container show-sidebar"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <Navlinks />
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
