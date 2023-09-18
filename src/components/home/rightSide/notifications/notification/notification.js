import { faker } from "@faker-js/faker";
import { Avatar, Typography } from "@mui/material";
import React from "react";

const notifications = [
  {
    avatar: faker.image.url(),
    username: faker.person.middleName(),
    actions: "like",
    postType: "video",
    time: "1",
  },
  {
    avatar: faker.image.url(),
    username: faker.person.middleName(),
    actions: "dislike",
    postType: "post",
    time: "2",
  },
  {
    avatar: faker.image.url(),
    username: faker.person.middleName(),
    actions: "live",
    postType: "live stream",
    time: "3",
  },
  
];

const Notification = () => {
  return (
    <div className="flex flex-col gap-5 w-full mt-5">
      {notifications.map(({ avatar, username, actions, postType, time }) => (
        <div className="flex flex-row justify-between items-center gap-5 w-full">
          <Avatar src={avatar} alt={username} sx={{ width: 45, height: 45 }} />
          <div className="flex flex-col w-4/5 overflow-hidden">
            <Typography variant="body2">
              {/* notification message */}

              {actions === "like" && `${username} liked your ${postType}`}
              {actions === "dislike" && `${username} disliked your ${postType}`}
              {actions === "live" && `${username} has started a ${postType}`}
            </Typography>
            <div className="flex flex-row justify-between">
              {/* notification time and see detail button */}
              <Typography variant="caption">{time} hours ago</Typography>
              <button className="outline-none text-sm">see details</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
