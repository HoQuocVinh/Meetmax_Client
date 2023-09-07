import Tippy from "@tippyjs/react/headless";
import { useCallback, useState } from "react";

import { IconArrowDown } from "~/icon/Icon";
import {
  DisplayPermissionGroupProps,
  RenderPermissionGroupProps,
} from "~/interface/GroupInterface";
import FieldRadio from "../common/FieldRadio";
import Wrapper from "../wrapper/Wrapper";

const DisplayPermissionGroup: React.FC<DisplayPermissionGroupProps> = ({
  control,
}) => {
  const [privateValue, setPrivateValue] = useState<string>("Friends");

  const handleDisplayPermission = useCallback(
    (e: any) => {
      const value = e.target.dataset.value;
      value && value !== privateValue && setPrivateValue(value);
    },
    [privateValue]
  );
  return (
    <Tippy
      interactive
      delay={[0, 100]}
      placement="bottom-start"
      render={(attrs) => (
        <Wrapper.Tippy {...attrs}>
          <RenderPermissionGroup
            control={control}
            onClick={handleDisplayPermission}
            data={["Friends", "Public", "Only me"]}
          />
        </Wrapper.Tippy>
      )}
    >
      <div className="ml-[18px] flex w-[120px] cursor-pointer items-center justify-between rounded-[4px] bg-ct-gray bg-opacity-5 px-3 py-2 transition-all hover:bg-opacity-10">
        <span className="text-ct-blue">{privateValue}</span>
        <i className="ml-4">
          <IconArrowDown />
        </i>
      </div>
    </Tippy>
  );
};

const RenderPermissionGroup: React.FC<RenderPermissionGroupProps> = ({
  data,
  control,
  onClick,
}) => {
  return (
    <div>
      <div
        className="rounded-lg py-[30px] pl-5 pr-[30px]"
        style={{ boxShadow: "0 0 3px rgba(0,0,0,0.2)" }}
      >
        <div className="flex flex-col gap-y-5">
          {data.map((item: any, index: number) => (
            <FieldRadio
              key={index}
              onClick={onClick}
              control={control}
              name="visibility"
              value={item}
              defaultChecked={item === "Friends"}
            >
              {item}
            </FieldRadio>
          ))}
        </div>
      </div>
    </div>
  );
};

export { RenderPermissionGroup };
export default DisplayPermissionGroup;
