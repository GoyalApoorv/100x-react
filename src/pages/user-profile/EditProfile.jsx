import Button from "../../components/Button";
import BackArrow from "../../assets/back.svg";

function EditProfile() {
  return (
    <div className="px-4">
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <a href="./index.html">
              <img src={BackArrow} />
            </a>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>
          <a href="./index.html">
            <Button size="md">Save</Button>
          </a>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <img
            className="w-full md:h-15.4rem"
            src="../../public/images/banner-image.png"
            alt="Banner Image"
          />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img src="../../public/images/add-image.svg" />
            <img src="../../public/images/cancel-g.svg" />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          className="w-4.2rem h-4.2rem absolute -top-12 left-1 rounded-7xl border-4 border-neutral-1000"
          src="../../public/images/profile_avatar.png"
        />
        <section className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
            <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
              <div className="px-2">Name</div>
            </legend>
            <input
              type="text"
              placeholder="Name"
              defaultValue="Ajinkya Bodke"
              className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
            />
          </fieldset>
          <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
            <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
              <div className="px-2">Bio</div>
            </legend>
            <textarea
              type="text"
              placeholder="Bio"
              className="w-full resize-none bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
              defaultValue={"Full Stack Developer👨‍💻 \nEndurance Athlete 🏊🚴‍♂️🏃"}
            />
          </fieldset>
          <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
            <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
              <div className="px-2">Location</div>
            </legend>
            <input
              type="text"
              placeholder="Location"
              className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
            />
          </fieldset>
          <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
            <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
              <div className="px-2">Website</div>
            </legend>
            <input
              type="text"
              placeholder="Website"
              className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
            />
          </fieldset>
        </section>
      </main>
    </div>
  );
}

export default EditProfile;
