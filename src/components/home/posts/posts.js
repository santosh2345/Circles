import { faker } from "@faker-js/faker";
import { Avatar, Badge, Typography } from "@mui/material";
import { DotsThreeOutlineVertical,DotOutline, ChatCircleDots } from "phosphor-react";
import React from "react";

const posts = [
  {
    avatar: (
      <Avatar
        alt="Remy Sharp"
        src={faker.image.url()}
        sx={{ width: 50, height: 50 }}
      />
    ),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },
  {
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },
  {
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },{
    avatar: faker.image.url(),
    name: faker.person.fullName(),
    time: "8h",
    location: faker.music.songName(),
    captions: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    image: faker.image.url(),
  },
];

const Posts = () => {
  return (
    <div className="w-11/12 h-2/5 flex flex-col gap-10">
      {posts.map(({ avatar, name, time, location, captions, image }) => (
        <div className="flex flex-col gap-0">
          {/* post details */}
          <div className="flex flex-col gap-1 p-2  justify-between">
            {/* user details and edit */}
            <div className="flex flex-row justify-between">
              {/* user details */}
              <div className="flex flex-row justify-start gap-3">
                {/* avatar */}
                <Avatar src={avatar} alt={name}  sx={{ width: 45, height: 45 }} />
                <div className="flex flex-col ">
                  <div className="flex flex-row gap-2 items-center ">
                    <Typography variant="body" className="font-bold">
                      {name}
                    </Typography>
                    <li className="text-sm ">
                    {time}
                    </li>

                    
                  </div>
                  <Typography variant="caption">

                  {location}
                  </Typography>
                </div>
              </div>
              <div className="flex flex-row w-2/6 text-sm justify-between items-start ">
                <button className="pl-4 pr-4 pt-1 pb-1 border rounded-3xl bg-slate-200">Update</button>
                <button className="pl-4 pr-4 pt-1 pb-1 border rounded-3xl bg-slate-200">Cruise</button>
                <DotsThreeOutlineVertical size={20} weight="fill" className="cursor-pointer" />
              </div>
            </div>
            <Typography variant="body">
              {captions}
            </Typography>
          </div>

          {/* post image */}
          <img src={image} alt="title" />
        </div>
      ))}
    </div>
  );
};

export default Posts;
