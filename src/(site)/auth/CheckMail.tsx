import { useParams } from "react-router-dom";
import Button from "~/components/button/Button";
import Wrapper from "~/components/wrapper/Wrapper";

const CheckMail = () => {
  const { email } = useParams();
  const hanldeResend = () => {};

  return (
    <Wrapper.AuthCheckMail
      heading="Check your email"
      title="We've sent a link to your email address: "
      email={email}
    >
      <form className="auth__form-checkmail"></form>
      <Button.Auth form="auth__form-checkmail" type="submit" fullWidth>
        Skip now
      </Button.Auth>
      <div className="flex items-center justify-center gap-3 mt-5">
        <p className="text-ct-gray">Didn't receive an email?</p>
        <button className="text-ct-blue" onClick={hanldeResend}>
          Resend
        </button>
      </div>
    </Wrapper.AuthCheckMail>
  );
};

export default CheckMail;
