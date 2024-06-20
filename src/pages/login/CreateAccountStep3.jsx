import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Fieldset from "../../components/Fieldset";
import { UserContext } from "../../contexts/UserContext";
import { useContext, useState } from "react";
import StepHeading from "../../components/StepHeading";
import { URLs } from "../../constants";
import { supabase } from "../../supabase"; // Import Supabase client instance

function CreateAccountStep3() {
  const userData = useContext(UserContext);
  const formValues = userData.formData;
  const [verificationCode, setVerificationCode] = useState('');
  const [error, setError] = useState(null);

  // Function to handle OTP verification
  const handleVerification = async () => {
    try {
      const { error } = await supabase.auth.api.updateUser(formValues.email, {
        otp: verificationCode,
      });
      if (error) {
        throw error;
      }
      console.log('Email verified successfully');
      // Redirect to the next step after verification
      window.location.href = URLs.signUpStep4; // Assuming URLs.signUpStep4 is your next step URL
    } catch (error) {
      console.error('Error verifying OTP:', error.message);
      setError(error.message);
    }
  };

  return (
    <>
      <section className="flex w-full flex-shrink-0 flex-col items-start gap-3 rounded-2xl px-0.9rem pb-5">
        <div className="flex w-full flex-col gap-3 self-stretch">
          <StepHeading>We sent you a code</StepHeading>
          <p className="text-sm font-normal leading-normal text-neutral-500">
            Enter it below to verify {formValues.email}
          </p>
          <Fieldset
            required
            text="Verification code"
            type="text"
            value={verificationCode}
            onChange={(e) => setVerificationCode(e.target.value)}
          />
          <p className="flex justify-end text-sm font-normal leading-normal text-twitter-default">
            Didn’t receive a code?
          </p>
        </div>
      </section>

      <Button variant="default" onClick={handleVerification} disabled={false}>
        Next
      </Button>

      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}

export default CreateAccountStep3;
