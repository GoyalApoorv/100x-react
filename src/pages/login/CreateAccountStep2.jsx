import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { useState } from "react";
import { supabase } from "../../supabase"; // Import Supabase client instance

function CreateAccountStep2() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  const DOB = `${formValues.day} ${MONTHS[formValues.month]} ${formValues.year}`;
  const [error, setError] = useState(null);

  // Function to handle signup using Supabase
  const handleSignUp = async () => {
    try {
      const { user, error } = await supabase.auth.signUp({
        email: formValues.email,
        password: 'password', // Set a default password for signup (you can customize this)
      });
      if (error) {
        throw error;
      }
      console.log('User signed up successfully:', user);
      // Redirect to the next step after signup
      window.location.href = URLs.signUpStep3; // Assuming URLs.signUpStep3 is your next step URL
    } catch (error) {
      console.error('Error signing up:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex flex-col items-start gap-5 self-stretch">
          <StepHeading>Create your account</StepHeading>
          <Fieldset text="Name" value={formValues.name} type="text" />
          <Fieldset text="Email" value={formValues.email} type="email" />
          <Fieldset text="Date of Birth" value={DOB} type="text" />
        </div>
      </section>

      <Button variant="solid" size="full" onClick={handleSignUp} disabled={false}>
        Sign up
      </Button>

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default CreateAccountStep2;
