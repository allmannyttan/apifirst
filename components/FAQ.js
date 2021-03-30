import React from "react";
import { Container } from "react-bootstrap";
import BlockTitle from "./BlockTitle";
import AccordionItem from "./AccordionItem";
import faqBG from "../assets/images/shapes/faq-bg-1-1.png";

const FAQ = (props) => {
  return (
    <section className="faq-one" id="faq">
      <img src={faqBG} className="faq-one__bg-shape-1" alt="" />
      <Container>
        <BlockTitle
          textAlign="center"
          paraText="10 viktiga frågor om API"
          titleText={`Det finns många missuppfattningar om vad ett API är och hur det fungerar. Vi hjälper dig att räta ut frågetecknen.`}
        />
        <div className="accrodion-grp faq-accrodion">
          <AccordionItem
            title="Måste jag intressera mig för API?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Vad är ett API?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={true}
          />
          <AccordionItem
            title="Vad kan jag göra med ett API?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Går inte näringslivet i stöpet med ett API?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Vad kan samhället göra med ett API?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Är det inte jättefarligt med ett API som en öppen dörr till en massa känslig data (man har ju hört om GDPR)?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Finns det olika API:er?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Finns det bra API:er och dåliga API:er?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Vilken teknik behöver man för ett API och vilken teknik är bäst?"
            content="There are many variations of passages of available but
                    majority have alteration in some by inject humour or random
                    words. Lorem ipsum dolor sit amet."
            status={false}
          />
          <AccordionItem
            title="Om jag ska köpa ett API, eller jag menar ett system eller nej ett API först, hur kravställer jag ett API?"
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
