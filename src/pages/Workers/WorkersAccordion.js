import { Collapse } from "antd";
import AccordionOption3 from "./SingleWorkersAccordionOptions/AccordionOption3";
const { Panel } = Collapse;

const accordionData = [
  {
    header: "Management Ink Pty Ltd",
    contents: "Data will be added later",
  },
  {
    header: "Cree8 Pty Ltd",
    contents: "Data will be added later",
  },
  {
    header: "Cree8 Industry Pty Ltd",
    contents: <AccordionOption3 />,
  },
  {
    header: "Cree8 Pty Ltd",
    contents: "Data will be added later",
  },
  {
    header: "Cree8 Pty Ltd",
    contents: "Data will be added later",
  },
];
const WorkersAccordion = () => (
  <Collapse className="border-none" accordion>
    {accordionData?.map((item, index) => {
      return (
        <Panel header={item.header} className="border-none" key={index}>
          <p>{item.contents}</p>
        </Panel>
      );
    })}
  </Collapse>
);
export default WorkersAccordion;
