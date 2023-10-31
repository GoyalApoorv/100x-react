import React from "react";
import UserAvatar from "../assets/user-avatar.png";
import Comment from "../assets/comment.svg";
import Retweet from "../assets/retweet.svg";
import Heart from "../assets/heart.svg";
import Reach from "../assets/reach.svg";
import Share from "../assets/share.svg";

function Tweet({
  name,
  handle,
  time,
  tweetdata,
  comments,
  retweets,
  likes,
  reach,
}) {
  return (
    <div className="box-border flex h-min border-b border-neutral-700 px-4 py-2">
      <div className="mr-4 h-12 min-w-fit">
        <img
          src={UserAvatar}
          alt="User Picture"
          className="h-12 w-12 rounded-full"
        />
      </div>
      <div className="w-full">
        <div className="mb-1">
          <div className="mb-1 text-neutral-50">
            <span className="text-base font-medium">{name}</span>
            <span className="text-neutral-500">@{handle}</span>
            <span className="text-neutral-500">•</span>
            <span className="text-neutral-500">{time}</span>
          </div>
          <p className="font-regular text-0.9rem text-neutral-50">
            {tweetdata}
          </p>
        </div>
        <div className="flex items-center justify-between py-3 text-neutral-500 lg:pr-5">
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Comment} />
            <span className="text-sm font-normal text-neutral-500">
              {comments}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Retweet} />
            <span className="text-sm font-normal text-neutral-500">
              {retweets}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Heart} />
            <span className="text-sm font-normal text-neutral-500">
              {likes}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Reach} />
            <span className="text-sm font-normal text-neutral-500">
              {reach}
            </span>
          </div>
          <div className="flex items-center justify-between gap-0.3rem">
            <img src={Share} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;
