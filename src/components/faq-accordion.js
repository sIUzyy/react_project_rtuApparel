//FREQUENTLY ASKED QUESTION ACCORDION

import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 

export default function FAQ() {
  const [open, setOpen] = useState(1);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  return (
    <Fragment>

      <Accordion className="mb-4" open={open === 1}>
        <AccordionHeader className="text-lg font-bold text-left border-none " onClick={() => handleOpen(1)}>
          What is RTU Apparel?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel is an ecommerce website that offers a wide range of clothing and accessories for men and women of Rizal Technological University.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 2}>
        <AccordionHeader  className="text-lg font-bold text-left border-none" onClick={() => handleOpen(2)}>
          Where is RTU Apparel?
        </AccordionHeader>
        <AccordionBody  className="text-md text-justify text-gray-500 italic" >
         RTU Apparel is based in Mandaluyong, Metro Manila, Philippines.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 3}>
        <AccordionHeader className="text-lg font-bold text-left border-none"  onClick={() => handleOpen(3)}>
          What types of clothing does RTU Apparel offer?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel offers a variety of clothing, including t-shirts, uniforms, ID lace, and more.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 4}>
        <AccordionHeader className="text-lg font-bold text-left border-none"  onClick={() => handleOpen(4)}>
          Does RTU Apparel oofer clothing for both men and women?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        Yes, RTU Apparel offers clothing for both men and women.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 5}>
        <AccordionHeader className="text-lg font-bold text-left border-none"  onClick={() => handleOpen(5)}>
        Does RTU Apparel offer international shipping?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        No, RTU Apparel only offers its merchandise to its students.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 6}>
        <AccordionHeader  className="text-lg font-bold text-left border-none" onClick={() => handleOpen(6)}>
        What payment methods does RTU Apparel accept?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel only accepts GCASH and Cash on Delivery types of payment.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 7}>
        <AccordionHeader  className="text-lg font-bold text-left border-none" onClick={() => handleOpen(7)}>
        Does RTU Apparel offer free shipping?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel offers free shipping on orders over a certain amount, which may vary depending on the customer's location.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 8}>
        <AccordionHeader  className="text-lg font-bold text-left border-none" onClick={() => handleOpen(8)}>
        What is RTU Apparel's return policy?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel accepts returns within 15 days of purchase for a refund or exchange, provided the items are in their original condition and packaging.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 9}>
        <AccordionHeader  className="text-lg font-bold text-left border-none" onClick={() => handleOpen(9)}>
        Does RTU Apparel have a loyalty program?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel does not currently have a loyalty program.
        </AccordionBody>
      </Accordion>

      <Accordion className="mb-4" open={open === 10}>
        <AccordionHeader className="text-lg font-bold text-left border-none"  onClick={() => handleOpen(10)}>
        How can I contact RTU Apparel's customer service?
        </AccordionHeader>
        <AccordionBody className="text-md text-justify text-gray-500 italic">
        RTU Apparel's customer service can be reached via email or through the website's contact form.
        </AccordionBody>
      </Accordion>

    </Fragment>
  );
}