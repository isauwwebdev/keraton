"use client";
import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import KeratonHeader from "./components/KeratonHeader";

export default function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="bg-red pt-4 justify-center content-center mx-auto pb-2">
        <div className="content-center w-5/6 lg:w-2/3 justify-center my-auto mx-auto pt-8">
          <KeratonHeader title={"FAQ"} red={true} />
          <Accordion
            open={open === 1}
            style={{ backgroundColor: "transparent", outline: "none" }}
            placeholder={null} // These don't do anything, just to remove the bug of death
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className=" font-extrabold text-2xl py-8  text-start  text-yellow"
              style={{ backgroundColor: "transparent", outline: "none" }}
              placeholder={null} // These don't do anything, just to remove the bug of death
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              What time does Keraton start?
            </AccordionHeader>
            <AccordionBody className="text-xl  text-yellow">
              Keraton will start at 4 pm and will approximately finish at 9 pm.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow text-yellow" /> {/* Divider */}
          <Accordion
            open={open === 2}
            style={{ backgroundColor: "transparent", outline: "none" }}
            placeholder={null} // These don't do anything, just to remove the bug of death
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className=" font-extrabold text-2xl py-8  text-start text-yellow"
              style={{ backgroundColor: "transparent", outline: "none" }}
              placeholder={null} // These don't do anything, just to remove the bug of death
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              Where can I find more information?
            </AccordionHeader>
            <AccordionBody className="text-xl  text-yellow">
              You can find more details about Keraton on our Instagram account
              <a href="https://www.instagram.com/isauwhuskies/">
                @isauwhuskies
              </a>
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 3}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className=" text-yellow"
            placeholder={null} // These don't do anything, just to remove the bug of death
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className=" font-extrabold text-2xl py-8   text-yellow"
              style={{ backgroundColor: "transparent", outline: "none" }}
              placeholder={null} // These don't do anything, just to remove the bug of death
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              How do I pay for food?
            </AccordionHeader>
            <AccordionBody className="text-xl  text-yellow">
              Payments for food and drinks can be done through debit / credit
              cards. Please keep in mind that all payments are completely
              cashless.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 4}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className=" text-yellow"
            placeholder={null} // These don't do anything, just to remove the bug of death
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className=" font-extrabold text-2xl py-8  text-yellow"
              style={{ backgroundColor: "transparent", outline: "none" }}
              placeholder={null} // These don't do anything, just to remove the bug of death
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              Is there an admission fee?
            </AccordionHeader>
            <AccordionBody className="text-xl  text-yellow">
              No admission fee! So be sure to get all your friends and family to
              come.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 5}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className=" text-yellow"
            placeholder={null} // These don't do anything, just to remove the bug of death
            onPointerEnterCapture={null}
            onPointerLeaveCapture={null}
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className=" font-extrabold text-2xl py-8  text-yellow"
              style={{ backgroundColor: "transparent", outline: "none" }}
              placeholder={null} // These don't do anything, just to remove the bug of death
              onPointerEnterCapture={null}
              onPointerLeaveCapture={null}
            >
              Where will Keraton be held?
            </AccordionHeader>
            <AccordionBody className="text-xl  text-yellow">
              Hub Lawn, University of Washington campus! 4001 E Stevens Way NE,
              Seattle, WA 98195
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
