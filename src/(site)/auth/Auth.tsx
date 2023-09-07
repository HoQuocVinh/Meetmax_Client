import { yupResolver } from "@hookform/resolvers/yup";
import { useCallback, useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { BsGithub, BsGoogle } from "react-icons/bs";
import * as Yup from "yup";

import AuthRadio from "@components/auth/AuthRadio";
import TogglePassword from "@components/auth/TogglePassword";
import Button from "@components/button/Button";
import AuthInput from "@components/auth/AuthInput";
import AuthSocicalButton from "@components/auth/AuthSocialButton";

import useToggleValue from "~/hooks/useToggleValue";

import {
  IconCalendar,
  IconGender,
  IconLock,
  IconMail,
  IconSmile,
} from "~/icon/Icon";
import Calendar from "~/modules/calendar/Calendar";
import {
  dateOfBirthSchema,
  emailSchema,
  fullNameSchema,
  passwordSchema,
} from "~/validation/validationAuth";
import { Link } from "react-router-dom";

type Variant = "LOGIN" | "REGISTER";

const schemaSignIn = Yup.object({
  ...emailSchema.fields,
  ...passwordSchema.fields,
});

const schemaSignUp = Yup.object({
  ...emailSchema.fields,
  ...fullNameSchema.fields,
  ...passwordSchema.fields,
  ...dateOfBirthSchema.fields,
});
const Auth = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
  const [isLoading, setIsLoading] = useState(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const toggleVariant = useCallback(() => {
    variant === "LOGIN" ? setVariant("REGISTER") : setVariant("LOGIN");
  }, [variant]);

  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
      fullName: "",
      dateOfBirth: `${new Date().getDate()}/${
        new Date().getMonth() + 1
      }/${new Date().getFullYear()}`,
      gender: "male",
    },
    resolver: yupResolver(variant === "LOGIN" ? schemaSignIn : schemaSignUp),
    mode: "onTouched",
  });

  const socialAction = (action: string) => {
    setIsLoading(true);
  };

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    setIsLoading(true);
    if (variant === "LOGIN") {
      const { email, password } = data;
      if (rememberMe) {
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        localStorage.setItem("rememberMe", rememberMe.toString());
      } else {
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        localStorage.removeItem("rememberMe");
      }
      const newData = { email, password };
      console.log("TCL: Auth -> newData", newData);
    } else {
      console.log(data);
    }
  };

  const { isToggle: showPassword, handleToggleValue: handleTogglePassword } =
    useToggleValue();

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPassword = localStorage.getItem("password");
    const storedRememberMe = localStorage.getItem("rememberMe");
    if (variant === "LOGIN") {
      if (storedEmail && storedPassword && storedRememberMe === "true") {
        setValue("email", storedEmail);
        setValue("password", storedPassword);
        setRememberMe(true);
      }
    } else {
      setValue("email", "");
      setValue("password", "");
    }
  }, [setValue, variant]);

  return (
    <div className="pt-14 pb-16 sm:mx-auto sm:w-full sm:max-w-xl text-center">
      <h1 className="font-black text-3xl text-ct-gray">
        {variant === "LOGIN" ? "Sign In" : "Getting Started"}
      </h1>
      <p className="mt-3 text-ct-gray">
        {variant === "LOGIN"
          ? "Welcome back, you've been missed!"
          : "Create an account to continue and connect with the people."}
      </p>
      <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10 mt-7">
        <form
          id="auth__form"
          onSubmit={handleSubmit(onSubmit)}
          className="text-center mb-7"
        >
          <div className="flex gap-8">
            <AuthSocicalButton
              icon={BsGithub}
              onClick={() => socialAction("github")}
              title="Login with github"
            />
            <AuthSocicalButton
              icon={BsGoogle}
              onClick={() => socialAction("google")}
              title="Login with google"
            />
          </div>
          <div className="my-7">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-xl">
                <span className="bg-white p-2 text-gray-500 text-lg uppercase font-bold">
                  OR
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-3">
            <AuthInput
              disabled={isLoading}
              type="email"
              id="email"
              name="email"
              icon={<IconMail />}
              placholder="Your Email"
              control={control}
              error={errors.email?.message}
            />
            {variant === "REGISTER" && (
              <AuthInput
                disabled={isLoading}
                type="text"
                id="fullName"
                name="fullName"
                icon={<IconSmile />}
                placholder="Saled Ahamed"
                control={control}
                error={errors.fullName?.message}
              />
            )}
            <AuthInput
              disabled={isLoading}
              type={`${showPassword ? "text" : "password"}`}
              id="password"
              name="password"
              icon={<IconLock />}
              isPassword
              placholder="Enter your password"
              control={control}
              error={errors.password?.message}
            >
              <div className="absolute right-5 top-1/2 -translate-y-2/4 cursor-pointer">
                <TogglePassword
                  isToggle={showPassword}
                  onClick={handleTogglePassword}
                />
              </div>
            </AuthInput>
            {variant === "REGISTER" && (
              <div className="grid grid-cols-2 gap-5">
                <div className="relative">
                  <AuthInput
                    disabled={isLoading}
                    type="text"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    control={control}
                    placholder="Date of birth"
                    error={errors.dateOfBirth?.message}
                    icon={<IconCalendar />}
                    onClick={() => setIsShow(!isShow)}
                    readonly
                  />
                  {isShow && (
                    <div className="absolute right-full bottom-0">
                      <Calendar
                        handleSave={() => setIsShow(false)}
                        handleCancel={() => setIsShow(false)}
                        control={control}
                        name="dateOfBirth"
                        setValue={setValue}
                        defaultDate={selectedDate}
                        setSelectedDate={setSelectedDate}
                      />
                    </div>
                  )}
                </div>
                <div className="flex w-full flex-1 items-center gap-5 rounded-[10px] border border-gray border-opacity-20 px-[10px] py-3 lg:px-4">
                  <span>{<IconGender />}</span>
                  <label className="flex cursor-pointer select-none items-center gap-x-3">
                    <AuthRadio
                      control={control}
                      name="gender"
                      value="male"
                      defaultChecked
                    />
                    <span className="text-ct-gray text-opacity-60">Male</span>
                  </label>
                  <label className="flex cursor-pointer select-none items-center gap-x-3">
                    <AuthRadio control={control} name="gender" value="female" />
                    <span className="text-ct-gray text-opacity-60">Female</span>
                  </label>
                </div>
              </div>
            )}
            {variant === "LOGIN" && (
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1.5 pl-5">
                  <input
                    type="checkbox"
                    id="checkbox"
                    onChange={(e: any) => setRememberMe(e.target.checked)}
                    checked={rememberMe}
                  />
                  <label
                    htmlFor="checkbox"
                    className="text-sm text-ct-gray cursor-pointer text-opacity-80"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  to="forgot-password"
                  className="text-ct-blue text-sm"
                >
                  Forgot password?
                </Link>
              </div>
            )}
          </div>
        </form>
        <Button.Auth
          form="auth__form"
          type="submit"
          fullWidth
          disabled={isLoading}
        >
          Sign Up
        </Button.Auth>
        <div className="mt-7 flex gap-2 justify-center px-2 text-gray-500">
          <div className="text-ct-gray">
            {variant === "LOGIN"
              ? "You haven't any account?"
              : "Already have an account?"}
          </div>
          <div
            onClick={() => {
              !isLoading && toggleVariant();
            }}
            className="underline cursor-pointer text-ct-blue"
          >
            {variant === "LOGIN" ? "Sign Up" : "Sign In"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
