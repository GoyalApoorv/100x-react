import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";

import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";

function CreateAccountStep3() {
  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex flex-col w-full gap-3 self-stretch">
          <StepHeading text="We sent you a code" />
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter it below to verify janedoe@gmail.com
          </p>
          <Fieldset text="Verification code" type="text" />
          <p className="text-sm font-normal flex justify-end leading-normal text-twitter-default">
            Didn’t receive a code?
          </p>
        </div>
      </section>
      ;
      <Link
        to={URLs.signUpStep4}
        className="fixed bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-20.8rem"
      >
        <Button text="Next" variant="default" disabled={false} />
      </Link>
    </>
  );
}
export default CreateAccountStep3;