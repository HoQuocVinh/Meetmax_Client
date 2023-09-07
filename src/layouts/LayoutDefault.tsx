import { Outlet } from "react-router-dom";

import Header from "~/modules/partials/Header";
import Sidebar from "~/modules/partials/Sidebar";
const LayoutDefault = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <div className="main__left">
          <Sidebar />
        </div>
        <div className="main__content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDefault;
