import PasswordEye from "../assets/password-eye.svg";
function Fieldset(props) {
  return (
    <fieldset className="group flex items-center self-stretch rounded border border-solid border-neutral-500 px-3 py-4 pt-2 focus-within:border-twitter-default">
      <legend className="text-xs font-medium not-italic leading-normal text-neutral-500 group-focus-within:text-twitter-default">
        <div className="px-2">{props.text}</div>
      </legend>
      <input
        type={props.type}
        placeholder={props.text}
        className="w-full bg-transparent text-neutral-50 placeholder:text-neutral-500 focus:outline-none"
      />
      {props.type === "password" && (
        <img src={PasswordEye} alt="Password Eye" />
      )}
      {/* {(() => {
        if (false) {
          return <img src={Hide} />;
        }
      })()} */}
    </fieldset>
  );
}

export default Fieldset;
