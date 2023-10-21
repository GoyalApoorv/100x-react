import ProfileAvatar from "../../assets/profile_avatar.png";

import Tweet from "../../components/Tweet";
import HomeActive from "../../assets/home-active.svg";
import HomeInactive from "../../assets/home-inactive.svg";
import ProfileActive from "../../assets/profile-active.svg";
import ProfileInactive from "../../assets/profile-inactive.svg";
import Toast from "../../components/Toast";

import NewTweet from "../../components/NewTweetButton";
import Header from "../../components/Header";
import Tab from "../../components/Tab";

function Home() {
  return (
    <div className="bg-neutral-1000">
      <header className="top-0 flex w-full flex-col items-center bg-neutral-1000">
        <section className="flex w-full items-center border-b border-neutral-700 px-4 py-5">
          <a href="../user-profile/index.html">
            <img
              src={ProfileAvatar}
              alt="Profile Picture"
              className="sticky w-9 rounded-full"
            />
          </a>
          <Header />
        </section>
        <Tab />
      </header>
      <main className="flex w-full flex-col pb-20">
        <section>
          {/* Tweets */}
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata={
              <>
                i've seen people absolutely despise auto layout in figma but I
                think it's a lifesaver -<br />
                1. tidies everything nice and compact
                <br />
                2. makes responsive design effortless
                <br />
                3. no manual adjustments post any tweaks
                <br />
                4. saves a tonnn of time
                <br />
                <br />
                Sorry, but will stay an auto layout maxi all life.
              </>
            }
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata={
              <>
                Writing gets easier after the first sentence.
                <br />
                <br />
                Lifting gets easier after the first set.
                <br />
                <br />
                People think and think and think until they finally decide to
                act. Their attention shifts from internal to external, and the
                difficulty they created in their mind vanishes.
              </>
            }
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
          <Tweet
            name="Name"
            handle="handle"
            time="10h"
            tweetdata="Don't wish for it, work for it."
            comments="11"
            retweets="269"
            likes="1869"
            reach="69.9k"
          />
        </section>
        <Toast message="Copied to clipboard." />
        <a href="../compose-tweet/index.html">
          <NewTweet />
        </a>
        <footer className="fixed bottom-0 flex w-full items-center justify-center gap-10 border-t border-neutral-800 bg-neutral-1000 px-6 py-1.1rem">
          <div className="group">
            <button className="group-focus-within:hidden">
              <img src={HomeActive} />
            </button>
            <button className="hidden group-focus-within:block">
              <img src={HomeInactive} />
            </button>
          </div>
          <a href="../user-profile/index.html">
            <div className="group">
              <button className="group-hover:hidden">
                <img src={ProfileInactive} />
              </button>
              <button className="hidden group-hover:block">
                <img src={ProfileActive} />
              </button>
            </div>
          </a>
        </footer>
      </main>
    </div>
  );
}

export default Home;
