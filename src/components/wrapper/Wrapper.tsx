import { ReactNode } from "react";
import classNames from "~/utils/classNames";
interface AuthProps {
  children: ReactNode;
  heading: string;
  title: string;
}

interface AuthCheckMailProps {
  heading: string;
  title: string;
  email: string | undefined;
  children: ReactNode;
}

const Wrapper = ({ children }: { children: ReactNode }) => {
  return { children };
};

Wrapper.Auth = ({ children, heading, title }: AuthProps) => {
  return (
    <div className="pb-16 pt-14 text-center sm:mx-auto sm:w-full sm:max-w-xl">
      <h1 className="text-3xl font-black text-ct-gray">{heading}</h1>
      <p className="mt-3 text-ct-gray">{title}</p>
      <div className="mt-7 bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        {children}
      </div>
    </div>
  );
};

Wrapper.AuthCheckMail = ({
  heading,
  title,
  email,
  children,
}: AuthCheckMailProps) => {
  return (
    <div className="pb-16 pt-14 text-center sm:mx-auto sm:w-full sm:max-w-xl">
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
        <h1 className="text-3xl font-black text-ct-gray">{heading}</h1>
        <p className="my-5 text-ct-gray">
          {title}
          <strong className="text-ct-blue">{email}</strong>
        </p>
        {children}
      </div>
    </div>
  );
};

Wrapper.Feed = ({ children }: { children: ReactNode }) => {
  return <div className="wrapper">{children}</div>;
};

Wrapper.Tippy = ({ children }: { children: ReactNode }) => {
  return (
    <div className="rounded-lg bg-white shadow-[0px_4px_8px_rgba(0,_0,_0,_0.04)] backdrop-blur-xl">
      {children}
    </div>
  );
};

Wrapper.Form = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full rounded-2xl bg-white p-[18px] shadow-[0px_6px_20px_rgba(0,0,0,0.05)] backdrop-blur-xl">
      {children}
    </div>
  );
};

Wrapper.ModalPost = ({
  children,
  show,
}: {
  children: ReactNode;
  show: boolean;
}) => {
  return (
    <div
      className={classNames(
        "modal fixed inset-0 z-50 flex select-none items-center justify-center shadow-lg",
        show ? "" : "invisible opacity-0"
      )}
    >
      {children}
    </div>
  );
};

export default Wrapper;
