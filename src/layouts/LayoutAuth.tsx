import { Outlet, useNavigate } from "react-router-dom";

const LayoutAuth = () => {
  const navigate = useNavigate();
  return (
    <div className="flex min-h-screen flex-col bg-gray-100 py-6 px-8">
      <div>
        <img
          className="cursor-pointer"
          srcSet="/images/logo.png 2x"
          alt="Logo"
          onClick={() => navigate("/")}
        />
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAuth;
