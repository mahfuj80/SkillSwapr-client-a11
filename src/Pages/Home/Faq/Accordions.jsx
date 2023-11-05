import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';

// Demo styles, see 'Styles' section below for some notes on use.

const Accordions = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center gap-3">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do I request a quote for my event?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Provide details on how potential clients can request a quote for
                their event, including the preferred method of contact and any
                specific information you need to provide an accurate quote.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What types of events do you specialize in managing?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Clarify the types of events your company specializes in, such as
                birthdays, weddings, corporate events, etc., to help clients
                understand if their event aligns with your expertise.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  Can I customize the services offered to suit my event needs?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Explain your company flexibility in customizing services based
                on the unique requirements of each event, and how clients can
                tailor services to meet their specific needs.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* 1st */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How far in advance should I book your services for my event?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Provide guidance on the recommended timeframe for booking your
                services to ensure availability and ample time for planning and
                coordination.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 2nd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  What is your cancellation or rescheduling policy?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Outline your company policy regarding cancellations,
                rescheduling, and any associated fees to manage client
                expectations and avoid misunderstandings.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
          {/* 3rd */}
          <Accordion allowZeroExpanded>
            <AccordionItem>
              <AccordionItemHeading>
                <AccordionItemButton>
                  How do you handle unexpected issues or emergencies during an
                  event?
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                Describe your approach to handling unexpected challenges during
                an event, including the measures in place to ensure a smooth and
                successful event experience for the client.
              </AccordionItemPanel>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Accordions;
