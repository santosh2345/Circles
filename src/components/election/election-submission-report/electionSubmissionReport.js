import { Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ElectionSubmissionReport = () => {

  const navigate = useNavigate();
  const electionOptions = [
    {
      title: "Presidential",
      onclick: () => {},
    },
    {
      title: "Governership",
      onclick: () => {
        navigate("/election-submission-report/governership")
        
      },
    },
    {
      title: "Local Government",
      onclick: () => {},
    },
  ];

  return (
    <div className="flex flex-col w-4/5 p-5 h-screen">
      {/* header */}
      <div className="h-1/6">
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Submit the election results via form
        </Typography>
      </div>
      <div className="h-5/6 flex flex-col items-center justify-center gap-10 text-center mb-20">
        {/* Election Options Selections */}
        {electionOptions.map(({ title, onclick }) => (
          <div className="border border-black pt-5 pb-5 pl-35 pr-35 w-3/5 cursor-pointer bg-slate-200 hover:bg-slate-300 rounded-full" onClick={onclick}>
            <Typography variant="body">{title}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ElectionSubmissionReport;
