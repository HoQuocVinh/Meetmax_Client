import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import * as Yup from "yup";
import { BsChevronLeft } from "react-icons/bs";

import AuthInput from "~/components/auth/AuthInput";
import Button from "~/components/button/Button";
import { IconMail } from "~/icon/Icon";
import { emailSchema } from "~/validation/validationAuth";
import { Link, useNavigate } from "react-router-dom";
import Wrapper from "~/components/wrapper/Wrapper";

const schema = Yup.object({
  ...emailSchema.fields,
});

const ForgotPassword = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  const onSubmit: SubmitHandler<FieldValues> = (data: any) => {
    console.log(data);
    navigate(`/auth/check-mail/${data.email}`);
  };

  return (
    <Wrapper.Auth
      heading="Forgot password?"
      title="Enter your details to receive a rest link"
    >
      <form
        id="auth__form-forgot"
        onSubmit={handleSubmit(onSubmit)}
        className="text-center mb-5"
      >
        <AuthInput
          type="email"
          control={control}
          name="email"
          id="email"
          icon={<IconMail />}
          placholder="Your email"
          error={errors.email?.message}
        />
      </form>
      <Button.Auth form="auth__form-forgot" type="submit" fullWidth>
        Send
      </Button.Auth>
      <Link
        to="/auth"
        className="mt-5 flex items-center justify-center gap-3 text-ct-blue text-sm"
      >
        {<BsChevronLeft />}
        <p>Back to Sign In</p>
      </Link>
    </Wrapper.Auth>
  );
};

export default ForgotPassword;
