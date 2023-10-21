import SignIn from "../components/buttons/SignIn";
import CreateAccount from "../components/buttons/CreateAccount";
function Login() {
  return (
    <main className="flex h-screen w-full items-center">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <h1 className="text-1.9rem font-bold leading-normal text-neutral-50">
            Happening now
          </h1>
          <p className="text-base font-medium leading-normal text-neutral-50">
            Join today.
          </p>
        </section>
        <a href="../login/create-account-step-1.html">
          <CreateAccount />
        </a>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <p className="text-base font-medium leading-normal text-neutral-50">
            Already have an account?
          </p>
          <a href="#">
            <SignIn />
          </a>
        </section>
      </section>
    </main>
  );
}

export default Login;
