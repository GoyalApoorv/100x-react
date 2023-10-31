import { Link } from "react-router-dom";
import Cancel from "../../assets/cancel.svg";
import TweetInput from "../../components/TweetInput";
import { URLs } from "../../constants";
import { useState } from "react";
import Button from "../../components/Button";

function ComposeTweet() {
  const [tweets, setTweets] = useState([]);
  const [tweetText, setTweetText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div>
      <header className="flex items-center justify-between  px-4 py-3">
        <Link to={URLs.feed}>
          <img src={Cancel} />
        </Link>

        <Button
          variant="solid"
          size="md"
          onClick={async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            setTweets((c) => [
              ...c,
              {
                tweetText,
                id: Math.random().toString(36).substring(2, 9),
                timestamp: Date.now(),
              },
            ]);
            setIsLoading(false);
            setTweetText("");
          }}
          // className="inline-flex w-5.2rem items-center justify-center gap-2.5 rounded-4xl bg-twitter-default px-6 py-3 hover:bg-twitter-hover disabled:opacity-50 md:w-13.8rem md:rounded-6xl md:px-5.8rem md:py-0.9rem"
        >
          <span className="text-center text-base font-bold not-italic leading-normal text-neutral-50">
            {isLoading ? "Loading..." : "Post"}
          </span>
        </Button>
        <button
          className="text-white"
          onClick={() => console.log(`Tweets are :`, tweets)}
        >
          showTweet
        </button>
      </header>
      <TweetInput tweetText={tweetText} setTweetText={setTweetText} />
      <footer className="fixed bottom-0 flex items-center gap-5 px-4 py-3">
        <p className="text-sm font-normal leading-normal  text-neutral-500">
          0/280
        </p>
      </footer>
    </div>
  );
}

export default ComposeTweet;
