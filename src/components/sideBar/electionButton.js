import React from "react";

import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { ChartBar, FileArrowUp } from "phosphor-react";
import { Divider } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { updateSubTab, updateTab } from "../../redux/reduxSlice";

const ElectionButton = () => {

  const navigate = useNavigate()
  const tab  = useSelector((state)=>state.tab.value.tab);

  const subtab  = useSelector((state)=>state.tab.value.subtab);
  const dispatch = useDispatch()

  
  const electionSubMenu = [
    {
      icon:<FileArrowUp size={26} weight={`${subtab=== "Election Report Submission"? 'fill':'regular'}`}/>,
      title: "Election Report Submission",
      onclick: () => {
        dispatch(updateSubTab("Election Report Submission"))
        navigate("/election-submission-report");

      },

    },
    {
      icon:<ChartBar size={26}  weight={`${subtab=== 'Election Results'? 'fill':'regular'}`}/>,
      title: "Election Results",
      onclick: () => {
        dispatch(updateSubTab("Election Results"))
        navigate("/election-results");
      },

    },

  ]
  return (
    <div className="pl-1">
      <Accordion sx={{ shadow: "none", outline: "none" }}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography sx={{fontWeight:tab==="Election"?"bold":"normal"}}>Election</Typography>
        </AccordionSummary>
        <AccordionDetails className="flex flex-col gap-4 bg-slate-200">
          {electionSubMenu.map(({icon, title, onclick})=>(
            <>
             <div className=" flex flex-row hover:bg-slate-300 gap-2" onClick={onclick}>
              {icon}
            
            
             <Typography variant="body2" sx={{fontWeight:subtab===title?"bold":"normal"}}>{title}</Typography>
           </div>
           <Divider />
           </>

          ))}
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default ElectionButton;
