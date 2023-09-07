import { forwardRef } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import { SearchFellingProps } from "~/interface/ModalInterface";

const SearchFelling = forwardRef((props: SearchFellingProps, ref: any) => {
  return (
    <div className="relative flex basis-[68%] items-center rounded-full bg-gray-100 hover:bg-gray-200">
      <span className="z-5 pointer-events-none absolute left-4 cursor-crosshair text-lg text-ct-gray">
        <HiOutlineSearch />
      </span>
      <input
        ref={ref}
        type="text"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        className="w-full bg-transparent py-3 pl-10 pr-5 text-sm font-normal leading-none outline-none placeholder:text-black placeholder:opacity-80"
      />
    </div>
  );
});

export default SearchFelling;
