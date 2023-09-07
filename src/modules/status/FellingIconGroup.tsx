import { Fragment, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import Button from "~/components/button/Button";
import SearchFelling from "~/components/search/SearchFelling";
import { fellingIcons } from "~/data/static/arrayFelling";

const FellingIconGroup = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [icons, setIcons] = useState<Array<any>>(fellingIcons);
  const [showIcon, setShowIcon] = useState<boolean>(true);

  const inputRef = useRef<HTMLInputElement>(null);
  const { isShowFelling } = useSelector((state: any) => state.modal);

  const handleClickIcon = (index: number) => {
    const clickedIcon = icons[index];
    const updateIcons = [
      clickedIcon,
      ...icons.slice(0, index),
      ...icons.slice(index + 1),
    ];
    setIcons(updateIcons);
  };

  const handleSearchTerm = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const filteredIcons = icons.filter((item) =>
    item.description.toLowerCase().startsWith(searchTerm.toLowerCase())
  );

  useEffect(() => {
    if (isShowFelling && inputRef.current) {
      console.log(inputRef.current);
      inputRef.current.focus();
    }
    // isShowFelling && inputRef.current && console.log(inputRef.current);
  }, [isShowFelling]);

  useEffect(() => {
    const timer = isShowFelling && setTimeout(() => setShowIcon(false), 500);
    setShowIcon(isShowFelling);
    return () => clearTimeout(timer);
  }, [isShowFelling]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIcon(false); // Ẩn icon loading sau 2 giây
    }, 500);

    return () => {
      clearTimeout(timer);
      setShowIcon(true); // Hiển thị lại icon loading nếu có thay đổi searchTerm
    };
  }, [searchTerm]);

  return (
    <Fragment>
      <div className="mt-3 px-3">
        <SearchFelling
          ref={inputRef}
          value={searchTerm}
          onChange={handleSearchTerm}
          placeholder="Search"
        />
      </div>
      <div className="mt-4 h-full overflow-auto px-3 lg:max-h-[340px] 2xl:max-h-[470px]">
        {showIcon && (
          <div className="flex h-full items-center justify-center bg-white">
            <div className="h-8 w-8 animate-spin rounded-full border-[3px] border-t-[3px] border-gray-500 border-t-transparent bg-white"></div>
          </div>
        )}
        <div className="grid auto-rows-auto grid-cols-2">
          {filteredIcons.map((item: any, index: number) => (
            <Button.Felling
              key={index}
              image={item.image}
              onClick={() => handleClickIcon(index)}
            >
              {item.description}
            </Button.Felling>
          ))}
        </div>
      </div>
    </Fragment>
  );
};

export default FellingIconGroup;
