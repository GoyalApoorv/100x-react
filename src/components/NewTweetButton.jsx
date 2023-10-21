import Plus from "../assets/plus-content-add.svg";

function NewTweetButton() {
  return (
    <button className="fixed bottom-20 right-4 items-start gap-2.5 rounded-full bg-twitter-default p-4 shadow-3xl">
      <img className="h-8 w-8 rounded-full" src={Plus} />
    </button>
  );
}

export default NewTweetButton;
