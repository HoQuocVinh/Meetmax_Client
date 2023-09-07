import { useSelector } from "react-redux";
import SidebarFriend from "~/components/activity/SidebarFriend";
import Button from "~/components/button/Button";
import Images from "~/components/images/Images";
import Wrapper from "~/components/wrapper/Wrapper";
import {
  IconBook,
  IconCamera,
  IconExplore,
  IconFacebook,
  IconInstagram,
  IconOther,
  IconTwitter,
} from "~/icon/Icon";
import FormMood from "~/modules/forms/FormMood";
import FormPost from "~/modules/forms/FormPost";
import classNames from "~/utils/classNames";

const Feed = () => {
  const { isShowModal } = useSelector((state: any) => state.modal);
  return (
    <div className="flex min-h-full">
      <Wrapper.Feed>
        <div className="items-cente flex gap-x-[30px]">
          <div className="flex flex-1 flex-col items-center gap-y-[30px]">
            <FormMood />
            <FormPost />
          </div>
          {/* <div className="w-1/3 text-ct-gray">
            <div className="shadow-[0px__6px__20px__rgba(0,__0,__0,__0.04) w-full rounded-2xl bg-white backdrop-blur-xl">
              <div className="flex items-center justify-between px-[18px] pt-[10px]">
                <p className="font-bold leading-6">You Might Like</p>
                <button className="cursor-pointer text-sm text-blue">
                  See All
                </button>
              </div>
              <hr className="mt-3 mb-5 border-gray border-opacity-20" />
              <div className="px-[18px] pb-[18px] text-ct-gray">
                <div className="items center flex">
                  <Images.Avt
                    src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                    alt="avt-personal"
                    width="w-[50px]"
                    height="h-[50px]"
                  />
                  <div className="ml-5 flex flex-col">
                    <p>Radovan SkillArena</p>
                    <p className="text-sm text-ct-gray text-opacity-60">
                      Founder & CEO at Trophy
                    </p>
                  </div>
                </div>
                <div className="mt-[14px] flex items-center justify-center gap-4">
                  <span>
                    <IconExplore />
                  </span>
                  <span>
                    <IconFacebook />
                  </span>
                  <span>
                    <IconTwitter />
                  </span>
                  <span>
                    <IconInstagram />
                  </span>
                </div>
                <div className="mt-6 flex items-center gap-5">
                  <div className="flex-1">
                    <button className="w-full rounded-md border border-gray border-opacity-20 bg-white py-[6px]">
                      Ignore
                    </button>
                  </div>
                  <div className="flex-1">
                    <Button.Default
                      variant="normal"
                      btnBackground="blue"
                      className="w-full rounded-md py-[6px]"
                    >
                      Follow
                    </Button.Default>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow-[0px__6px__20px__rgba(0,__0,__0,__0.04) mt-[30px] w-full rounded-2xl bg-white backdrop-blur-xl">
              <div className="flex items-center justify-between px-[18px] pt-[10px]">
                <p className="font-bold leading-6">Recent Event</p>
                <button className="cursor-pointer text-sm text-ct-gray">
                  <IconOther />
                </button>
              </div>
              <hr className="mt-3 mb-5 border-gray border-opacity-20" />
              <div className="flex flex-col gap-y-[18px] px-[18px] pb-[18px] text-ct-gray">
                <div className="bg-gray bg-opacity-[3%] p-[10px]">
                  <div className="flex items-start ">
                    <div className="mr-5 rounded-md bg-green bg-opacity-20 px-[10px] py-[13px]">
                      <IconBook />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="leading-none text-ct-gray">
                        Graduation Ceremony
                      </p>
                      <p className="mt-1 text-xs text-ct-gray text-opacity-60">
                        The graduation ceremony is also sometimes called...
                      </p>
                    </div>
                  </div>
                  <hr className="my-3 mb-5 border-gray border-opacity-20" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ct-gray">8 seen</span>
                    <ul className="avt-person_like">
                      {Array(4)
                        .fill(0)
                        .map((item: any, index: number) => (
                          <li key={index}>
                            <Images.Avt
                              alt="avt-personal"
                              src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                              width="w-5"
                              height="h-5"
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                <div className="bg-gray bg-opacity-[3%] p-[10px]">
                  <div className="flex items-start ">
                    <div className="mr-5 rounded-md bg-red bg-opacity-20 px-[10px] py-[13px]">
                      <IconCamera />
                    </div>
                    <div className="flex flex-col gap-[2px]">
                      <p className="leading-none text-ct-gray">
                        Photography Ideas
                      </p>
                      <p className="mt-1 text-xs text-ct-gray text-opacity-60">
                        Reflections. Reflections work because they can create...
                      </p>
                    </div>
                  </div>
                  <hr className="my-3 mb-5 border-gray border-opacity-20" />
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-ct-gray">11 seen</span>
                    <ul className="avt-person_like">
                      {Array(4)
                        .fill(0)
                        .map((item: any, index: number) => (
                          <li key={index}>
                            <Images.Avt
                              alt="avt-personal"
                              src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                              width="w-5"
                              height="h-5"
                            />
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </Wrapper.Feed>
      <div className={classNames("list__friend", isShowModal && "right-2")}>
        <SidebarFriend />
      </div>
    </div>
  );
};

export default Feed;
