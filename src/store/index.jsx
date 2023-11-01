import { createContext, useState, useContext } from "react";

export const TweetContext = createContext();

export const TweetProvider = ({ children }) => {
  const [userTweets, setUserTweets] = useState([]);

  // Function to update the tweets array
  const updateTweets = (newTweets) => {
    setUserTweets(newTweets);
  };

  return (
    <TweetContext.Provider value={{ userTweets, updateTweets }}>
      {children}
    </TweetContext.Provider>
  );
};
