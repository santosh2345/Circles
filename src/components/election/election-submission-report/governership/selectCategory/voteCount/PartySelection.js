import React, { useState } from "react";
import {
  Avatar,
  Dialog,
  DialogTitle,
  Divider,
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

const ResultSheet = ["Vote Count", "Form One", "Form Two"];
const IncidentType = [
  "Vote Buying",
  "Push to Streaming",
  "Ballot Snatching",
  "Fighten",
];

const SelectPartyDialog = (props) => {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      sx={{
        height: "22rem",
        position: "absolute",
        top: "auto",
        left: "auto",
        marginRight: "12rem",
        
      }}
    >
      <div className="flex flex-row justify-between  ">
        <div className="flex flex-row text-center  ">
          <div className="w-full flex flex-col items-center ">
            <DialogTitle sx={{ color: "blue" }}>Results Sheet</DialogTitle>

            <List sx={{ pt: 0 }}>
              {ResultSheet.map((resultSheet) => (
                <ListItem disableGutters key={resultSheet}>
                  <ListItemButton
                    onClick={() => handleListItemClick(resultSheet)}
                    sx={{ textAlign: "center" }}
                  >
                    <ListItemText
                      primary={resultSheet}
                      sx={{
                        padding: "0.5rem",
                        paddingLeft: "1rem",
                        paddingRight: "1rem",
                        backgroundColor: "lightgrey",
                        borderRadius: "1rem",
                      }}
                    />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default SelectPartyDialog;
