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
            content="Bara om du bryr dig om digitalisering."
            status={true}
          />
          <AccordionItem
            title="Vad är ett API?"
            content="Ett API är en dokumenterad och säker koppling till ett system. Ett öppet API erbjuder din organisations funktioner, tjänster och data på ett sätt som gör att det kan kopplas samman med andra system, plattformar och organisationer."
            status={false}
          />
          <AccordionItem
            title="Vad kan jag göra med ett API?"
            content="Om dina system har API:er kan du sätta ihop dem till en digital plattform. Om din digitala plattform har ett API kan du erbjuda dina tjänster digitalt. Med andras API:er kan du bygga ditt eget gränssnitt till andras tjänster, eller integrera dem med din plattform."
            status={false}
          />
          <AccordionItem
            title="Går inte näringslivet i stöpet med ett API?"
            content="Det kan verka mest fördelaktigt att låsa in kunderna i ditt system och inte erbjuda ett API. Men i takt med att kunderna mognar digitalt kommer de att bygga sin egen digitala plattform, och för att ha en plats där behöver man kunna vara ett byggblock - vilket är omöjligt utan API."
            status={false}
          />
          <AccordionItem
            title="Vad kan samhället göra med ett API?"
            content="Samhället kan spara enorma resurser genom att system kan kommunicera med varandra och automatiskt låta data flöda istället för att gå via människor."
            status={false}
          />
          <AccordionItem
            title="Är det inte jättefarligt med ett API som en öppen dörr till en massa känslig data (man har ju hört om GDPR)?"
            content="Att du inte har ett API betyder inte att dina data automatiskt är säkra. API first innebär att du redan från början tänker igenom vem som ska ha tillgång till dina data, hur det ska ske, och hur du ska skydda data från otillåten åtkomst."
            status={false}
          />
          <AccordionItem
            title="Finns det olika API:er?"
            content="Det finns API:er som erbjuder data och tjänster till alla, t.ex. tillgängliggör öppna data. Andra API:er tillhandahåller data och tjänster bara till den som har tillgång till dem. Men båda är öppna API:er, eftersom de kan användas av andra än den som äger API:et."
            status={false}
          />
          <AccordionItem
            title="Finns det bra API:er och dåliga API:er?"
            content="Dåliga API:er är byggda med inställningen att om de är svåra att förstå och man inte pratar om dem så är de skyddade från otillåten användning. Bra API:er är redan från början byggda säker användning av de som ska ha rätt att använda dem."
            status={false}
          />
          <AccordionItem
            title="Vilken teknik behöver man för ett API och vilken teknik är bäst?"
            content="API:er är inte låsta till vissa tekniker. Den bästa tekniken är den du behärskar."
            status={false}
          />
          <AccordionItem
            title="Om jag ska köpa ett API, eller jag menar ett system eller nej ett API först, hur kravställer jag ett API?"
            content="Om du köper ett system kan du be om dokumentation av dess API. Ska du bygga ett nytt system ska du fundera över vad två alternativa gränssnitt har gemensamt. Ska du bygga en digital plattform ska du fundera över vilka affärsprocesser du vill utföra digitalt."
            status={false}
          />
        </div>
      </Container>
    </section>
  );
};

export default FAQ;
