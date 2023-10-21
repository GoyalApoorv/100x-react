/* eslint-disable react/prop-types */
function Button(props) {
  const { disabled, variant, text } = props;
  const baseStyle = "rounded-full px-6 py-2 text-base font-bold";

  const disabledStyles = {
    default: "hover:cursor-not-allowed hover:bg-neutral-50 opacity-50",
    fill: "hover:cursor-not-allowed bg-twitter-disabled hover:bg-twitter-disabled",
    signedIn : <div>You are signed in</div>,
    signedOut : <div>You are signed out</div>
  }[variant ?? ""]; //?? to check nullish value

  // return disabledStyles[isAuth?'signedIn':'signedOut']

  // const style = disabledStyles[""]; same as above

  // const disabledStyles = disabled
  //   ? variant === "default"
  //     ? " hover:cursor-not-allowed hover:bg-neutral-50 opacity-50"
  //     : variant === "fill"
  //     ? " hover:cursor-not-allowed bg-twitter-disabled hover:bg-twitter-disabled "
  //     : ""
  //   : "";

  const variantStyles = {
    default: `w-full bg-neutral-50 text-neutral-1000 hover:bg-neutral-200 shadow-button backdrop-blur-xl`,
    outline:
      "w-full gap-2.5 border border-solid border-button-stroke shadow-3xl backdrop-blur-23.66 text-center text-twitter-default",
    fill: "w-[360px] gap-2.5  bg-twitter-default p-5  hover:bg-twitter-hover text-neutral-50 py-5",
  };
  const classes = [
    baseStyle,
    variantStyles[variant],
    disabled && disabledStyles,
  ].join(" ");

  // const classes = `${baseStyle} ${variantStyles[variant]} ${disabledStyles}`;
  return (
    <button className={classes} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
