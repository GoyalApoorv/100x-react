import React from "react";
import ProfileAvatar from "../../assets/profile_avatar.png";

function ComposeTweet() {
  return (
    <div className="flex w-full items-center justify-center gap-3 px-4 py-2">
      <img
        className="h-9 w-9 flex-shrink-0 self-start rounded-7xl"
        src={ProfileAvatar}
      />
      <textarea
        name
        id
        cols={30}
        rows={10}
        placeholder="What's happening?"
        className="text-base font-regular w-full resize-none bg-transparent leading-normal text-neutral-50 placeholder:text-neutral-600 focus:outline-none"
        defaultValue={""}
      />
    </div>
  );
}

export default ComposeTweet;
