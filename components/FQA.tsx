import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const accordion_items = [
  {
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Ut enim ad minima veniam, quis nostrum exercitationem ullam?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title:
      "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
  {
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet.",
  },
];

export default function FQA() {
  return (
    <div className="px-5 py-14 md:px-14 md:py-20 lg:px-20 lg:p-28 flex flex-col lg:flex-row items-start md:gap-20 gap-6">
      <div className="flex flex-col gap-4 md:pt-4">
        <p className={"font-medium lg:text-lg text-[#EB2891]"}>
          Frequently Asked Questions
        </p>
        <h2 className="font-medium text-2xl lg:text-4xl max-w-[772px] text-[#172026]">
          Let’s clarify some of your questions
        </h2>
        <p className="text-[#36485C] lg:text-lg max-w-[772px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
      </div>
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-4"
      >
        {accordion_items.map((accordion_item, index) => {
          return (
            <AccordionItem
              value={index.toString()}
              className="bg-[#E3F1FF] rounded-md px-4 py-2 border-b-0 lg:text-lg"
              key={index}
            >
              <AccordionTrigger className="font-medium text-[#172026]">
                {accordion_item.title}
              </AccordionTrigger>
              <AccordionContent className="lg:text-lg text-[#36485C]">
                {accordion_item.content}
              </AccordionContent>
            </AccordionItem>
          );
        })}
      </Accordion>{" "}
    </div>
  );
}
