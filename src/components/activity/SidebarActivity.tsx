import { NavLink } from "react-router-dom";
import { SidebarActivityProps } from "~/interface/HomeInterface";

const SidebarActivity: React.FC<SidebarActivityProps> = ({
  to,
  icon,
  children,
}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-ct-gray text-white" : "bg-transparent text-ct-gray"
      }
      style={{
        display: "flex",
        alignItems: "center",
        padding: "10px 20px 12px 20px",
        borderRadius: "10px",
        fontWeight: "700",
      }}
    >
      <span className="mr-5">{icon}</span>
      {children}
    </NavLink>
  );
};

export default SidebarActivity;
