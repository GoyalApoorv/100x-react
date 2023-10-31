import { Link } from "react-router-dom";
import Button from "../components/Button";

import Heading from "../components/Heading";
import Text from "../components/Text";
import { URLs } from "../constants";

function TweetMain() {
  return (
    <main className="flex h-screen justify-center bg-neutral-1000 w-full items-center">
      <section className="flex w-full flex-col gap-10 px-7">
        <section className="flex flex-col gap-3">
          <Heading text="Happening now" />
          <Text text="Join today." />
        </section>
        <Link to={URLs.signUpStep1}>
          <Button variant="default" disabled={true}>
            Create account
          </Button>
        </Link>
        <div className="flex items-center">
          <hr className="mr-2 flex-grow border-t-2 border-neutral-700" />
          <span className="font-regular text-base leading-normal text-neutral-50">
            or
          </span>
          <hr className="ml-2 flex-grow border-t-2 border-neutral-700" />
        </div>
        <section className="flex flex-col gap-5">
          <Text text="Already have an account?" />
          <a href="#">
            <Button variant="outline" >Sign in</Button>
          </a>
        </section>
      </section>
    </main>
  );
}

export default TweetMain;
