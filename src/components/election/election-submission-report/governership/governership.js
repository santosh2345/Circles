import React, { useState } from "react";
import {
  Avatar,
  Dialog,
  DialogTitle,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import { ImageSquare, MapPin, PlusCircle } from "phosphor-react";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";
import { blue } from "@mui/material/colors";
import PersonIcon from "@mui/icons-material/Person";
import CategoryDialog from "./selectCategory/selectCategory";
import monthName from "../../../../data/monthName";
import VoteCount from "./selectCategory/voteCount/voteCount";

// ====================================================================

const Governership = () => {
  const [open, setOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Select Category");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedCategory(value);
  };

  var today = new Date();

  const date =
    today.getDate() +
    "-" +
    monthName(today.getMonth() + 1) +
    "-" +
    today.getFullYear();

  const time =
    today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
  const duration = today.getHours() >= 12 ? "pm" : "am";

  return (
    <div className="flex flex-col w-4/5 p-5 pr-20 h-screen">
      {/* header */}
      <div className="electionSubmissionHead">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Submit the election results via form
        </Typography>
      </div>
      <div className="electionSubmissionBody flex flex-col gap-10 w-full">
        <div className="h-2/5 ">
          {/* location and time details */}
          <div className="flex flex-row justify-between">
            {/* location */}
            <div>
              <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                OBEDIENT STRUCTURE
              </Typography>
              <div className="flex flex-row gap-1 items-center">
                {/* icon */}
                <MapPin size={12} weight="fill" color="red" />
                <Typography variant="caption">IMO, Nigeria</Typography>
              </div>
            </div>
            {/* local time */}
            <div className="flex flex-col items-end">
              <Typography variant="h7" sx={{ fontWeight: "bold" }}>
                LOCAL TIME
              </Typography>
              <Typography variant="caption">{date}</Typography>
              <Typography variant="caption">
                {time} {duration}
              </Typography>
            </div>
          </div>

          {/* what happening around you  */}
          <div className="w-full mt-5">
            <input
              placeholder="Write what is happening around you........."
              className="flex p-5 outline-none rounded-sm border bg-slate-200 w-full text-sm"
            />
          </div>
          {/* select categories */}
          <div className="w-full flex flex-row justify-between mt-5 items-center border rounded-sm">
            <div className="flex flex-row gap-2 w-1/3  items-center justify-center p-5 border b-r-2 border-black bg-slate-200 hover:bg-slate-300 cursor-pointer">
              {/* icon */}
              <ImageSquare size={18} weight="fill" color="green" />
              <Typography variant="caption">Add Media</Typography>
              <PlusCircle size={18} />
            </div>
            <div
              onClick={handleClickOpen}
              className="flex flex-row gap-2 w-1/3 items-center justify-center p-5 border b-r-2 border-black bg-slate-200 hover:bg-slate-300 cursor-pointer"
            >
              <Typography variant="caption">
                {selectedCategory == null
                  ? "Select Category"
                  : selectedCategory}
              </Typography>
              {selectedCategory === "Select Category" && (
                <PlusCircle size={18} />
              )}
              {selectedCategory == null && <PlusCircle size={18} />}
            </div>
            <div className="flex flex-row gap-2 w-1/3 items-center justify-center p-5 border b-r-2 border-black bg-slate-200 hover:bg-slate-300 cursor-pointer">
              <MapPin size={18} weight="fill" color="red" />
              <Typography variant="caption">Select Location GPS</Typography>
              <PlusCircle size={18} />
            </div>
          </div>
          <CategoryDialog
            selectedCategory={selectedCategory}
            open={open}
            onClose={handleClose}
          />
        </div>
        {selectedCategory === "Vote Count" && <VoteCount />}
      </div>
    </div>
  );
};

export default Governership;
