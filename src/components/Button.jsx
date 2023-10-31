import PropTypes from "prop-types"; // ES6

Button.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["default", "fill"]),
};

function Button(props) {
  const {
    children = "Add your Text",
    disabled = false,
    variant = "default",
  } = props;
  const baseStyle = "rounded-full px-6 py-2 text-base font-bold";

  const disabledStyles = {
    default: "hover:cursor-not-allowed hover:bg-neutral-50 opacity-50",
    solid:
      "bg-twitter-disabled hover:cursor-not-allowed hover:bg-twitter-disabled   ",
    signedIn: <div>You are signed in</div>,
    signedOut: <div>You are signed out</div>,
  }[variant ?? ""]; //?? to check nullish value

  // return disabledStyles[isAuth?'signedIn':'signedOut']

  // const style = disabledStyles[""]; same as above

  // const disabledStyles = disabled
  //   ? variant === "default"
  //     ? " hover:cursor-not-allowed hover:bg-neutral-50 opacity-50"
  //     : variant === "solid"
  //     ? " hover:cursor-not-allowed bg-twitter-disabled hover:bg-twitter-disabled "
  //     : ""
  //   : "";

  const variantStyles = {
    default: `w-full bg-neutral-50 text-neutral-1000 hover:bg-neutral-200 shadow-button backdrop-blur-xl`,
    outline:
      "w-full gap-2.5 border border-solid border-button-stroke shadow-3xl backdrop-blur-23.66 text-center text-twitter-default",
    solid:
      "w-[360px] gap-2.5  hover:bg-twitter-hover  bg-twitter-default p-5  text-neutral-50 py-5",
  };
  const classes = [
    baseStyle,
    variantStyles[variant],
    disabled && disabledStyles,
  ].join(" ");

  // const classes = `${baseStyle} ${variantStyles[variant]} ${disabledStyles}`;
  return (
    <button className={classes} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
