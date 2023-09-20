import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SelectPartyDialog from "./PartySelection";
import ListSubheader from "@mui/material/ListSubheader";
import { Menu, Typography } from "@mui/material";
import { PlusCircle } from "phosphor-react";

export default function VoteCount() {
  const [country, setCountry] = useState("");
  const [state, setState] = useState("");
  const [localGovernment, setLocalGovernment] = useState("");
  const [politicalWard, setPoliticalWard] = useState("");
  const [polling, setPolling] = useState("");
  const [voteSubmission, setVoteSubmission] = useState("");

  // for vote options for different parties
  const [open, setOpen] = useState(false);
  const [selectedParty, setSelectedParty] = useState("first party");

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = (value) => {
  //   setOpen(false);
  //   setSelectedParty(value);
  // };

  const handleClick = (event) => {
    const { myValue } = event.currentTarget.dataset;
    console.log(myValue); // --> 123
  };

  const handleChange = (event) => {
    const name = event.target.name;

    switch (name) {
      case "country":
        setCountry(event.target.value);
        break;
      case "state":
        setState(event.target.value);
        break;
      case "localGovernment":
        setLocalGovernment(event.target.value);
        break;
      case "politicalWard":
        setPoliticalWard(event.target.value);
        break;
      case "polling":
        setPolling(event.target.value);
        break;
      case "voteSubmission":
        setVoteSubmission(event.target.value);
        console.log(event.target.value);
        break;
      default:
        console.log("Case didn't match");
        break;
    }
  };

  const age = 2;

  const selectData = [
    {
      key: 0,
      label: "Country",
      value: country,
      name: "country",
      menuItems: ["Nigeria"],
    },
    {
      key: 1,
      label: "Select State",
      value: state,
      name: "state",
      menuItems: ["State one", "State Two", "State Three"],
    },
    {
      key: 2,
      label: "Local Government",
      value: localGovernment,
      name: "localGovernment",
      menuItems: [
        "Local Government one",
        "Local Government two",
        "Local Government three",
        "Local Government four",
      ],
    },
    {
      key: 3,
      label: "Political Ward",
      value: politicalWard,
      name: "politicalWard",
      menuItems: ["ward 1", "ward 2", "ward 3", "ward 4"],
    },
    {
      key: 4,
      label: "Polling Unit",
      value: polling,
      name: "polling",
      menuItems: ["Unit 1", "Unit 2", "Unit 3"],
    },
    {
      key: 5,
      label: "Vote Submission",
      value: voteSubmission,
      name: "voteSubmission",
      // menuItems: [<h1 className="font-bold text-2xl">hello</h1>],
      menuItems: ["hello ", "how", "are"],
      onclick: () => {
        // handleClickOpen();
      },
    },
  ];

  return (
    <div className="flex flex-col items-center gap-10 overflow-y-scroll h-3/5 w-full ">
      <div className=" mt-5 flex flex-wrap justify-center w-full gap-10">
        {selectData.map(({ key, label, value, name, menuItems, onclick }) => (
          <div key={key} className="w-2/5 ">
            {name !== "voteSubmission" ? (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={value}
                  name={name}
                  label={label}
                  onChange={handleChange}
                >
                  {menuItems.map((item) => (
                    <MenuItem key={key} value={item}>
                      {item}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">{label}</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={voteSubmission}
                  name={name}
                  label={label}
                  onChange={handleChange}
                  IconComponent={() => <PlusCircle />}
                  inputProps={{ IconComponent: () => null }}
                >
                  <ListSubheader sx={{ border: "2px solid black" }}>
                    <div className="flex flex-row justify-around w-full font-bold">
                      <Typography fontWeight="bold">Party</Typography>
                      <Typography fontWeight="bold">Logo</Typography>
                    </div>
                  </ListSubheader>

                  {menuItems.map((item) => (
                    <MenuItem
                      key={key}
                      // data-my-value={item}
                      // onClick={handleClick}
                      value={item}
                    >
                      <div className="w-full flex flex-row justify-around p-2">
                        <Typography>{item}</Typography>
                        <PlusCircle size={18} />
                      </div>
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            )}
          </div>
        ))}
      </div>

      <button className="flex items-center w-5/6 justify-center pt-3 pb-3  rounded-xl bg-sky-500 hover:bg-sky-600 text-white font-bold ">
        Upload
      </button>
    </div>
  );
}
