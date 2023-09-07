import { useSelector } from "react-redux";
import Images from "~/components/images/Images";
import SearchHeader from "~/components/search/SearchHeader";
import classNames from "~/utils/classNames";

const Header = () => {
  const { isShowModal } = useSelector((state: any) => state.modal);
  return (
    <header
      className={classNames(
        "realtive fixed left-0 top-0 z-10 flex items-center justify-between border-b border-[#E4E6EB] bg-white py-2 pl-5 pr-[30px]",
        isShowModal ? "right-2" : "right-0"
      )}
    >
      <div className="basis-1/5">
        <Images.Logo />
      </div>
      <div className="flex flex-1 items-center justify-between">
        <div className="relative flex flex-1 items-center justify-center pr-10">
          <SearchHeader />
        </div>
        <div className="flex basis-1/5 justify-end">
          <Images.Avt
            src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="avt"
          />
        </div>
      </div>
      <div className="line__bottom-header"></div>
    </header>
  );
};

export default Header;
