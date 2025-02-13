import Toggle from "./toggle";
import Wrapper from "./wrapper";
import Navigation from "./navigation";
import BottomNavigation from "./bottom-navigation";

const Sidebar = () => {
  return (
    <Wrapper>
      <Toggle />
      <Navigation />
      <BottomNavigation/>
    </Wrapper>
  );
};

export default Sidebar;
