import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import StepHeader from "../../components/StepHeader";
import StepHeading from "../../components/StepHeading";

function CreateAccountStep3(props) {
  {step} = props;
  return (
    <div className="bg-neutral-1000">
      <main className="flex w-full h-screen">
        <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
          <StepHeader step="3" />
          <div className="flex flex-col items-start gap-5 self-stretch">
            <StepHeading text="We sent you a code" />
            <p className="text-sm font-normal leading-normal text-secondary">
              Enter it below to verify janedoe@gmail.com
            </p>
            <Fieldset text="Email" type="email" />
          </div>
        </section>
      </main>
      <footer className="fixed bottom-16 left-1/2 -translate-x-1/2 -translate-y-1/2 transform w-20.8rem">
        <a href="../login/create-account-step-2.html">
          <Button text="Create Account" variant="default" disabled={false} />
        </a>
      </footer>
    </div>
  );
}

export default CreateAccountStep3;
