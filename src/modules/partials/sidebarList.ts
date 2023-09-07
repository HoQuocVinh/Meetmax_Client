import {
  IconCommunity,
  IconExplore,
  IconFeed,
  IconLogout,
  IconMessage,
  IconNotification,
  IconProfile,
  IconSetting,
} from "~/icon/Icon";

export const arraySidebar = [
  { title: "Feed", icon: IconFeed, to: "/" },
  { title: "My community", icon: IconCommunity, to: "/my-community" },
  { title: "Messages", icon: IconMessage, to: "/message" },
  { title: "Notiification", icon: IconNotification, to: "/notification" },
  { title: "Explore", icon: IconExplore, to: "/explore" },
  { title: "Profile", icon: IconProfile, to: "/profile" },
  { title: "Setting", icon: IconSetting, to: "/setting" },
  { title: "Logout", icon: IconLogout, to: "#" },
];
