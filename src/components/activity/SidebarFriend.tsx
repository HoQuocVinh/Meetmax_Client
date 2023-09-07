import { IconOther, IconSearch } from "~/icon/Icon";
import Images from "../images/Images";
import Friend from "../friends/Friend";

const SidebarFriend = () => {
  return (
    <div className="flex flex-col pl-5 pr-4">
      <div className="border-gray flex items-center rounded-[10px] border border-opacity-40">
        <span className="ml-5 mr-[10px] text-ct-gray">
          <IconSearch />
        </span>
        <input
          type="text"
          placeholder="Search Friends!"
          className="caret-gray py-[10px] text-sm font-normal placeholder:text-opacity-80"
        />
      </div>
      <div className="mt-[30px]">
        <div className="flex items-center justify-between gap-5">
          {Array(4)
            .fill(0)
            .map((item: any, index: number) => (
              <div
                className="flex flex-col items-center gap-[10px]"
                key={index}
              >
                <Images.Avt
                  alt="avt-personal"
                  src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                  width="w-[50px]"
                  height="h-[50px]"
                />
                <span className="text-sm text-ct-gray">Saleh</span>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-[30px] flex flex-col gap-y-5">
        <div className="flex items-center justify-between text-ct-gray">
          <span className="font-bold">Friends</span>
          <span className="text-ct-gray">
            <IconOther />
          </span>
        </div>
        {Array(10)
          .fill(0)
          .map((item: any, index: number) => (
            <Friend.Tag
              key={index}
              src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
              alt=""
              name="Kayleigh Bysouth "
              online
            />
          ))}
      </div>
    </div>
  );
};

export default SidebarFriend;
