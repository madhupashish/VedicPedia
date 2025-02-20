import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

export default function AccordionDemo() {
    return (
        <Accordion type="single" collapsible className="w-full bg-[#EDE6D6] p-3">
            <AccordionItem value="item-1">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it accessible?</AccordionTrigger>
                <AccordionContent>
                    Yes. It adheres to the WAI-ARIA design pattern.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it styled?</AccordionTrigger>
                <AccordionContent>
                    Yes. It comes with default styles that matches the other
                    components&apos; aesthetic.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger className="border-b-[1.6px] border-[#713700ea]">Is it animated?</AccordionTrigger>
                <AccordionContent>
                    Yes. It's animated by default, but you can disable it if you prefer.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}
