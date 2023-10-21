/* eslint-disable react/prop-types */
import Cancel from "../assets/cancel.svg";
function StepHeader(props) {
  return (
    <div className="flex items-center gap-5 self-stretch py-3">
      <a href="../login/index.html">
        <img src={Cancel} alt="cancel-icon"/>
      </a>
      <p className="text-0.9rem font-bold leading-normal text-neutral-50">
        Step {props.step} of 4
      </p>
    </div>
  );
}

export default StepHeader;
