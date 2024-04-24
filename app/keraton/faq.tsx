"use client";
import React from "react";
import type { AccordionProps } from "@material-tailwind/react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
// import "/app/overrides.css";

export default function FAQ() {
  const [open, setOpen] = React.useState(1);

  const handleOpen = (value: number) => setOpen(open === value ? 0 : value);

  return (
    <>
      <div className="bg-red mx-auto justify-center pb-8 max-w-7xl">
        <div className="md:px-32 px-8 pt-8">
          <div className="bg-gradient-to-r from-gold to-yellow text-white font-medium rounded-3xl p-1 h-24 align-middle justify-center content-center">
            <span className="flex w-full bg-red text-orange-200 p-1 font-sans text-center mx-auto justify-center text-2xl h-full rounded-3xl items-center">
              FAQ
            </span>
          </div>

          <Accordion
            open={open === 1}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            style={{ backgroundColor: "transparent", outline: "none" }}
            className="mx-auto justify-center items-center font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(1)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-sans font-extrabold text-2xl py-8 mx-auto justify-center items-center"
              style={{ backgroundColor: "transparent", outline: "none" }}
              // Add other props as necessary
            >
              What time does Keraton start?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 2}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            style={{ backgroundColor: "transparent", outline: "none" }}
          >
            <AccordionHeader
              onClick={() => handleOpen(2)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-sans font-extrabold text-2xl py-8 justify-center"
              style={{ backgroundColor: "transparent", outline: "none" }}

              // Add other props as necessary
            >
              Where can I find more information?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 3}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(3)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-sans font-extrabold text-2xl py-8 item-center mx-auto justify-center"
              style={{ backgroundColor: "transparent", outline: "none" }}

              // Add other props as necessary
            >
              How do I pay for food?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 4}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(4)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-sans font-extrabold text-2xl py-8 item-center mx-auto justify-center"
              style={{ backgroundColor: "transparent", outline: "none" }}

              // Add other props as necessary
            >
              Is there an admission fee?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
          <Accordion
            open={open === 5}
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            className="font-sans"
          >
            <AccordionHeader
              onClick={() => handleOpen(5)}
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              className="font-sans font-extrabold text-2xl py-8 item-center mx-auto justify-center"
              style={{ backgroundColor: "transparent", outline: "none" }}

              // Add other props as necessary
            >
              Where will Keraton be held?
            </AccordionHeader>
            <AccordionBody className="text-xl font-sans">
              We&apos;re not always in the position that we want to be at.
              We&apos;re constantly growing. We&apos;re constantly making
              mistakes. We&apos;re constantly trying to express ourselves and
              actualize our dreams.
            </AccordionBody>
          </Accordion>
        </div>
      </div>
    </>
  );
}
