import { ReactNode } from "react";
import Images from "../images/Images";
import { TagFriendProps } from "~/interface/FriendInterface";

const Friend = ({ children }: { children: ReactNode }) => {
  return { children };
};

Friend.Tag = ({ alt, src, name, timing, online }: TagFriendProps) => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <Images.Avt alt={alt} src={src} width="w-10" height="h-10" />
        <p className="ml-5 text-ct-gray">{name}</p>
      </div>
      {online ? (
        <span className="h-2 w-2 rounded-full bg-ct-green"></span>
      ) : (
        <span className="text-sm text-ct-gray text-opacity-60">{timing}</span>
      )}
    </div>
  );
};

export default Friend;
