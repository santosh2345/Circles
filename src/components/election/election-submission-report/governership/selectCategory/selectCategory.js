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
const IncidentType = ["Vote Buying", "Push to Streaming", "Ballot Snatching", "Fighten"]

function CategoryDialog(props) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value) => {
    onClose(value);
  };

  return (
    <Dialog onClose={handleClose} open={open} sx={{ }}>
      <div className="flex flex-row justify-between border border-black p-5">
        <div className="flex flex-row text-center  ">
            <div className="w-full flex flex-col items-center p-6 ">

            
          <DialogTitle sx={{color:"blue"}}>Results Sheet</DialogTitle>

          <List sx={{ pt: 0 }}>
            {ResultSheet.map((email) => (
              <ListItem disableGutters key={email}>
                <ListItemButton onClick={() => handleListItemClick(email)} sx={{ textAlign:"center"}}>
                  <ListItemText primary={email} sx={{padding:"0.5rem", paddingLeft:"1rem", paddingRight:"1rem", backgroundColor:"lightgrey", borderRadius:"1rem"}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          </div>
          <Divider orientation="vertical"   sx={{borderLeftWidth: 1, borderLeftColor:"black"}} />
          
        </div>
        <div className="flex flex-col text-center  items-center p-6">
          <DialogTitle  sx={{color:"blue"}}>Incident Type</DialogTitle>

          <List sx={{ pt: 0 }}>
            {IncidentType.map((incidentType) => (
              <ListItem  disableGutters key={incidentType} >
                <ListItemButton onClick={() => handleListItemClick(incidentType)} sx={{ textAlign:"center",}} >
                  <ListItemText primary={incidentType} sx={{padding:"0.5rem",paddingLeft:"1rem", paddingRight:"1rem", backgroundColor:"lightgrey", borderRadius:"1rem"}}/>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </div>
    </Dialog>
  );
}

export default CategoryDialog;
