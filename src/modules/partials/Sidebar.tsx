import SidebarActivity from "~/components/activity/SidebarActivity";
import { arraySidebar } from "./sidebarList";

const Sidebar = () => {
  return (
    <div className="h-full px-5 pt-[10px]">
      <div className="flex w-[200px] flex-col gap-[10px]">
        {arraySidebar.map((item: any, index: number) => {
          const Icon = item.icon;
          return (
            <SidebarActivity key={index} to={item.to} icon={<Icon />}>
              {item.title}
            </SidebarActivity>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
