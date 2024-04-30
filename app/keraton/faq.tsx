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
            className="mx-auto justify-center items-center font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center sm:justify-normal"
              style={{ backgroundColor: "transparent", outline: "none" }}
            >
              What time does Keraton start?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              Keraton will start at 4 pm and will approximately finish at 9 pm.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 2}
            style={{ backgroundColor: "transparent", outline: "none" }}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center sm:justify-normal"
              style={{ backgroundColor: "transparent", outline: "none" }}
            >
              Where can I find more information?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              You can find more details about Keraton on our Instagram account
              @isauwhuskies
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 3}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center sm:justify-normal"
              style={{ backgroundColor: "transparent", outline: "none" }}
            >
              How do I pay for food?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              Payments for food and drinks can be done through debit / credit
              cards. Please keep in mind that all payments are completely
              cashless.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 4}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center sm:justify-normal"
              style={{ backgroundColor: "transparent", outline: "none" }}
            >
              Is there an admission fee?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              No admission fee! So be sure to get all your friends and family to
              come.
            </AccordionBody>
          </Accordion>
          <hr className="my-4 border-yellow" /> {/* Divider */}
          <Accordion
            open={open === 5}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center sm:justify-normal"
              style={{ backgroundColor: "transparent", outline: "none" }}
            >
              Where will Keraton be held?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              Hub Lawn, University of Washington campus! 4001 E Stevens Way NE,
              Seattle, WA 98195
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
