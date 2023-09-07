import Button from "~/components/button/Button";
import Images from "~/components/images/Images";
import Wrapper from "~/components/wrapper/Wrapper";
import {
  IconComment,
  IconGift,
  IconLike,
  IconOther,
  IconPicture,
  IconSend,
  IconShare,
  IconSmile,
} from "~/icon/Icon";

const FormPost = () => {
  return (
    <Wrapper.Form>
      <div className="flex items-center justify-between text-ct-gray">
        <div className="flex items-center">
          <Images.Avt
            alt="avt-personal"
            src="https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
            width="w-[50px]"
            height="h-[50px]"
          />
          <div className="ml-5 flex flex-col">
            <p className="leading-6">Sepural Gallery</p>
            <span className="text-xs font-normal leading-[18px] text-opacity-60">
              15h. Public
            </span>
          </div>
        </div>
        <span className="cursor-pointer">
          <IconOther />
        </span>
      </div>
      <div className="mt-[22px] h-full max-h-[268px] w-full rounded-2xl 2xl:max-h-[400px]">
        <img
          src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
          alt="img-post"
          className="h-full w-full rounded-2xl object-cover"
        />
      </div>
      <div className="mt-[18px] flex items-center justify-between text-ct-gray">
        <div className="flex items-center justify-between">
          <ul className="avt-person_like">
            {Array(3)
              .fill(0)
              .map((item: any, index: number) => (
                <li key={index}>
                  <Images.Avt
                    src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
                    alt="avt-personal"
                    width="w-[22px]"
                    height="h-[22px]"
                  />
                </li>
              ))}
          </ul>
        </div>
        <div>
          <span className="mr-[17px] text-sm text-opacity-60">3 Comments</span>
          <span className="text-sm text-opacity-60">17 Shares</span>
        </div>
      </div>
      <hr className="border-gray mt-4 border-opacity-20" />
      <div className="my-3 flex items-center justify-between">
        <Button.Default
          variant="text"
          btnBackground="transparent"
          icon={<IconLike />}
        >
          Like
        </Button.Default>
        <Button.Default
          variant="text"
          btnBackground="transparent"
          icon={<IconComment />}
        >
          Comments
        </Button.Default>
        <Button.Default
          variant="text"
          btnBackground="transparent"
          icon={<IconShare />}
          className="text-blue"
        >
          Share
        </Button.Default>
      </div>
      <hr className="border-gray border-opacity-20" />
      <div className="mt-[14px] flex items-center justify-between">
        <Images.Avt
          alt="avt-personal"
          src="https://images.unsplash.com/photo-1676892011905-19e4f28447a9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=893&q=80"
          width="w-[38px]"
          height="h-[38px]"
        />
        <div className="ml-[14px] mr-[10px] flex-1">
          <div className="bg-gray flex h-full items-center gap-2 rounded-[10px] bg-opacity-5 px-[10px] py-2">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Write a comment..."
                className="h-full w-full text-sm placeholder:font-normal"
              />
            </div>
            <div className="flex items-center gap-[14px]">
              <span>
                <IconGift />
              </span>
              <span>
                <IconPicture />
              </span>
              <span>
                <IconSmile />
              </span>
            </div>
          </div>
        </div>
        <button className="bg-blue rounded-[5px] bg-opacity-10 p-[11px]">
          <span>
            <IconSend />
          </span>
        </button>
      </div>
    </Wrapper.Form>
  );
};

export default FormPost;
