import { lazy } from "react";
import config from "../configs";

//* Site
const Feed = lazy(() => import("@site/public/Feed"));
const Message = lazy(() => import("@site/public/Message"));
const Notification = lazy(() => import("@site/public/Notification"));
const Explore = lazy(() => import("@site/public/Explore"));
const Community = lazy(() => import("@site/public/Community"));

const Auth = lazy(() => import("@site/auth/Auth"));
const CheckMail = lazy(() => import("@site/auth/CheckMail"));
const ForgotPassword = lazy(() => import("@site/auth/ForgotPassword"));
const Profile = lazy(() => import("@site/auth/Profile"));
const Setting = lazy(() => import("@site/auth/Setting"));

//* Auth routes
const authRoutes = [
  { path: config.routes.auth, component: Auth },
  { path: config.routes.mail, component: CheckMail },
  { path: config.routes.forgot, component: ForgotPassword },
];

//* Public routes
const publicRoutes = [
  { path: config.routes.home, component: Feed },
  { path: config.routes.message, component: Message },
  { path: config.routes.explore, component: Explore },
  { path: config.routes.setting, component: Setting },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.mycommunity, component: Community },
  { path: config.routes.notification, component: Notification },
];

export { publicRoutes, authRoutes };
