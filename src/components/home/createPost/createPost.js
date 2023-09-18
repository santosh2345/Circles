import { Avatar } from "@mui/material";
import React from "react";
import { faker } from "@faker-js/faker";
import { Image, Microphone, VideoCamera } from "phosphor-react";
import { userData } from "../../../data/userProfile";

const postsOptions = [
  {
    key: 0,
    icon: <VideoCamera size={28} weight="fill" />,
    title: "Live video/capture",
  },
  {
    key: 1,
    icon: <Image size={28} weight="fill" />,
    title: "photo/video",
  },
  {
    key: 2,
    icon: <Microphone size={28} weight="fill" />,
    title: "Add Audio",
  },
];

const CreatePost = () => {
  return (
    <div className="createPost w-11/12 flex flex-col justify-between  p-2 pl-6 pr-6 border border-black rounded-sm">
      {/* create post */}
      <div className="flex flex-row gap-2">
        {/* avatar */}
        <div className="w-1/12 ">
          <Avatar
            alt={userData.username}
            src={userData.avatar}
            sx={{ width: 45, height: 45 }}
          />
        </div>
        {/*  create a post */}
        <div className="w-11/12 ">
          <button className="border border-black p-2 w-full text-start rounded-3xl">
            Create a post
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-around p-2  ">

      {postsOptions.map(({ key, icon, title }) => (
        <div key={key} className="flex gap-2 flex-row p-2  cursor-pointer ">
          {icon}
          {title}
        </div>
      ))}
      
      </div>
    </div>
  );
};

export default CreatePost;
