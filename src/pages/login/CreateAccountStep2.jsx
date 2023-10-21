import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import StepHeader from "../../components/StepHeader";
import StepHeading from "../../components/StepHeading";
function CreateAccountStep2() {
  return (
    <div className="bg-neutral-1000">
      <main className="flex w-full h-screen">
        <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
          <StepHeader step="2" />
          <div className="flex flex-col items-start gap-5 self-stretch">
            <StepHeading text="Create your account" />

            <Fieldset text="Name" type="text" />
            <Fieldset text="Email" type="email" />
            <Fieldset text="Date of Birth" type="text" />
          </div>
        </section>
      </main>
      <footer className="fixed bottom-16 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <a href="../login/create-account-step-2.html">
          <Button text="Sign up" variant="fill" disabled={false} />
        </a>
      </footer>
    </div>
  );
}

export default CreateAccountStep2;
