import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React, { useState } from "react";

export const MuiAccordionLayout = () => {
  const [expanded, setExpanded] = useState<string | false>(false);
  console.log(expanded);
  
  const handleChange = (isExpanded: boolean, panelId: string) => {
    setExpanded(isExpanded ? panelId : false);
  };

  return (
    <>
      <Accordion
        expanded={expanded==="panel1"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-header"
        >
          <Typography>Accordian_1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusantium rem aliquam ipsa, non voluptatem asperiores eius quae
            in! Libero quibusdam nulla doloribus ducimus ipsa nostrum blanditiis
            quam eveniet laboriosam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2-header"
        >
          <Typography>Accordian_2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusantium rem aliquam ipsa, non voluptatem asperiores eius quae
            in! Libero quibusdam nulla doloribus ducimus ipsa nostrum blanditiis
            quam eveniet laboriosam!
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={(_event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3-header"
        >
          <Typography>Accordian_3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
            accusantium rem aliquam ipsa, non voluptatem asperiores eius quae
            in! Libero quibusdam nulla doloribus ducimus ipsa nostrum blanditiis
            quam eveniet laboriosam!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};
