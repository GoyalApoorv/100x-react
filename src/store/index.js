import { createContext } from "react";

export const TweetContext = createContext({
  currentTweet: "",
  userTweets: [],
});

