import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="Frequently Asked Questions"
          titleText={`Want to Ask Something \n From Appton?`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Pre and post launch mobile app marketing pitfalls to avoid"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Pre and post launch mobile app marketing pitfalls to avoid"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={true}
          />
          <AccordionItem
            title="Pre and post launch mobile app marketing pitfalls to avoid"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Pre and post launch mobile app marketing pitfalls to avoid"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Pre and post launch mobile app marketing pitfalls to avoid"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
