import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Hero Section */}
      <section className="px-4 py-20 relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />

        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-secondary/20 border border-secondary/30 text-secondary text-sm font-medium mb-4">
              FAQ
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
              Everything You Need to Know{" "}
              <span className="text-secondary text-glow-blue">Before Launching with Us</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Get clarity on how we work, what we offer, and how we can help your business reach new heights.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How does MicroBiz help businesses grow?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                MicroBiz provides microfinancing solutions that give small business owners access to capital they need
                to start or expand their businesses. We offer flexible repayment terms and business support to ensure
                your success.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Who is it for?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Currently, MicroBiz focuses on serving small business owners who are civil servants in Zimbabwe. However, we're expanding our
                reach and welcome inquiries from entrepreneurs across Zimbabwe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How long does the application process take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our streamlined application process typically takes 3-5 business days from submission to approval. Once
                approved, funds are disbursed within 48 hours.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What makes MicroBiz different from other lenders?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We combine microfinancing with business mentorship and support. Our team doesn't just provide capital—we
                partner with you to ensure your business succeeds through strategic guidance and ongoing support via the microbiz monitoring and evaluation system.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How can I get started with your services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Simply click the "Apply Now" button to visit our application portal at bancosystem.co.zw. Fill out the
                application form with your business details, and our team will review your submission within 3-5
                business days.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
