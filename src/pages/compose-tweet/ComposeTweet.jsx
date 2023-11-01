import { Link } from "react-router-dom";
import Cancel from "../../assets/cancel.svg";
import TweetInput from "../../components/TweetInput";
import { URLs } from "../../constants";
import { useState } from "react";
import Button from "../../components/Button";
import { useContext } from "react";
import { TweetContext } from "../../store";
const tweetLimit = 280;

function ComposeTweet() {
  const { userTweets, setUserTweets } = useContext(TweetContext);

  const [tweetText, setTweetText] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const isTweetExceedingLimit = tweetText.length > tweetLimit;

  return (
    <div className="w-full max-w-2xl grow mx-auto border-x-4">
      <header className="flex items-center justify-between  px-4 py-3">
        <Link to={URLs.feed}>
          <img src={Cancel} />
        </Link>

        <Button
          disabled={isTweetExceedingLimit}
          variant="solid"
          size="md"
          onClick={async () => {
            setIsLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1000));
            console.log(userTweets);
            setUserTweets([
              ...userTweets,
              {
                tweetText,
                id: Math.random().toString(36).substring(2, 9),
                timestamp: Date.now(),
              },
            ]);
            console.log(userTweets);
            setIsLoading(false);
            setTweetText("");
          }}
        >
          <span className="text-center text-base font-bold not-italic leading-normal text-neutral-50">
            {isLoading ? "Posting..." : "Post"}
          </span>
        </Button>
        {/* <button
          className="text-white"
          onClick={() => console.log(`Tweets are :`, userTweets)}
        >
          showTweet
        </button> */}
      </header>
      <TweetInput tweetText={tweetText} setTweetText={setTweetText} />

      <footer className="fixed bottom-0 flex items-center gap-5 px-4 py-3">
        <p
          className={`text-sm font-normal leading-normal tracking-wider text-neutral-500`}
        >
          <span
            className={
              isTweetExceedingLimit ? "text-error" : "text-neutral-500"
            }
          >
            {isTweetExceedingLimit
              ? tweetLimit - tweetText.length
              : tweetText.length}
          </span>
          /{tweetLimit}
        </p>
      </footer>
    </div>
  );
}

export default ComposeTweet;
