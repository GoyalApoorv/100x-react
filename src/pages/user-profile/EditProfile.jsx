import Button from "../../components/Button";
import ProfileAvatar from "../../assets/profile_avatar.png";
import BackArrow from "../../assets/back.svg";
import AddImageIcon from "../../assets/add-image.svg";
import CancelIcon from "../../assets/cancel-g.svg";
import Banner from "../../components/Banner";
import Fieldset from "../../components/Fieldset";
import { Link } from "react-router-dom";
import { URLs } from "../../constants";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

function EditProfile() {
  const formValues = useContext(UserContext);
  const userData = formValues.formData;
  return (
    <div className="px-4">
      <header className="flex flex-col items-start gap-3">
        <section className="flex items-center justify-between self-stretch py-3">
          <div className="flex items-center gap-5">
            <Link to={URLs.profile}>
              <img src={BackArrow} />
            </Link>
            <p className="text-base font-bold leading-normal text-neutral-50">
              Edit profile
            </p>
          </div>
          <Link to={URLs.profile}>
            <Button size="md">Save</Button>
          </Link>
        </section>
        {/* Banner Image */}
        <div className="relative flex w-full">
          <Banner />
          <div className="absolute flex h-full w-full items-center justify-center gap-2">
            <img src={AddImageIcon} />
            <img src={CancelIcon} />
          </div>
        </div>
      </header>
      <main className="relative">
        {/* Profile Icon */}
        <img
          className="absolute -top-12 left-1 h-4.2rem w-4.2rem rounded-7xl border-4 border-neutral-1000"
          src={ProfileAvatar}
        />
        <section className="relative flex flex-col items-center gap-5 self-stretch pt-5">
          <Fieldset text="Name" value={userData.name} type="text" />
          <Fieldset text="Bio" value={userData.bio} type="text" />
          <Fieldset text="Location" value={userData.location} type="text" />
          <Fieldset text="Website" value={userData.website} type="text" />
        </section>
      </main>
    </div>
  );
}

export default EditProfile;
