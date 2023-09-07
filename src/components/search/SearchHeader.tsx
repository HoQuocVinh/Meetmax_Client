import Tippy from "@tippyjs/react/headless";
import { useState } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";

import classNames from "~/utils/classNames";
import Images from "../images/Images";

const SearchHeader = ({ placeholder }: { placeholder?: string }) => {
  const [searchResult, setSearchResult] = useState<Array<string>>([]);
  return (
    <Tippy
      interactive
      visible={searchResult.length > 0}
      placement="bottom-start"
      offset={[-3, 10]}
      render={(attrs) => (
        <div
          className="rounded-lg bg-white p-2 shadow-xl"
          tabIndex={-1}
          {...attrs}
          style={{ width: "290%", maxWidth: "290%" }}
        >
          <RenderResult searchResult={searchResult} />
        </div>
      )}
    >
      <div className="relative flex basis-[68%] items-center rounded-full bg-gray-100 hover:bg-gray-200">
        <span className="z-5 pointer-events-none absolute left-4 cursor-crosshair text-lg text-ct-gray">
          <HiOutlineSearch />
        </span>
        <input
          type="text"
          placeholder={
            placeholder ? placeholder : "Search for something here..."
          }
          className="w-full bg-transparent py-3 pl-10 pr-5 text-sm font-normal leading-none outline-none placeholder:text-black placeholder:opacity-80"
        />
      </div>
    </Tippy>
  );
};

export const RenderResult = ({ searchResult }: { searchResult: string[] }) => {
  return (
    <div className={classNames(searchResult.length > 8 && "overflow-auto")}>
      <div className="mb-2 px-1.5 py-1 pt-3">Recent</div>
      <TagRenderResult />
    </div>
  );
};

export const TagRenderResult = () => {
  return (
    <div className="flex items-center justify-between rounded-md transition-all hover:bg-[#F2F2F2]">
      <div className="p-1.5">
        <Images.Avt
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJzMNWNPsA8KiUFY_YiEC7rub3JEDOCUXXHwJ40dp7&s"
          alt=""
          width="w-9"
          height="h-9"
        />
      </div>
      <span className="flex-1 p-1.5 text-left text-sm font-normal leading-none">
        CNTT K19 CLC
      </span>
      <i className="mr-1.5 cursor-pointer rounded-full p-1 text-2xl text-gray-600 hover:bg-gray-200">
        <IoIosClose />
      </i>
    </div>
  );
};

export default SearchHeader;
