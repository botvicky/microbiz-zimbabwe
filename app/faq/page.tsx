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
                Who is eligible for MicroBiz financing?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Currently, MicroBiz focuses on serving small business owners who are civil servants in Zimbabwe. This includes 
                employees looking to grow their income, anyone starting a side hustle, people supporting family members in business, 
                pre-retirees seeking post-retirement vocations, and anyone seeking financial freedom. However, we're expanding our
                reach and welcome inquiries from entrepreneurs across Zimbabwe.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How long does the application process take?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our streamlined application process typically takes 3-5 business days from submission to approval. Once
                approved, funds are disbursed within 48 hours, ensuring you can get started quickly.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What makes MicroBiz different from other lenders?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We combine microfinancing with business mentorship and support. Our team doesn't just provide capital—we
                partner with you to ensure your business succeeds through strategic guidance and ongoing support via the MicroBiz 
                monitoring and evaluation system. Our holistic approach includes promoting a mindset shift and strong financial literacy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What types of businesses can I start with MicroBiz funding?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We support a wide range of businesses including retail shops, animal husbandry (chicken rearing, cattle farming), 
                tech and services, food and catering, beauty and salons, construction and building, transport and logistics, fashion 
                and apparel, car wash services, farming (tomatoes, cabbage), and many more. Each business type has a tailored starter 
                pack designed specifically for that industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What are the R.I.G.H.T values and why do they matter?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Our R.I.G.H.T values are the foundation of how we operate: Reliability (delivering what we promise on time), 
                Integrity (doing what we say we will do), Genuineness (executing tasks with competence), Honesty (acting in a 
                responsible and accountable manner), and Tenacity (completing objectives with speed and aggression). These values 
                ensure you receive professional, trustworthy service throughout your partnership with us.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How much funding can I receive?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Funding amounts vary depending on your chosen business starter pack. For example, the Food & Catering Pack ranges 
                from $300 to $1,500, while the Construction & Building Pack ranges from $1,200 to $6,000. Each pack is designed to 
                provide exactly what you need to launch successfully in your specific industry.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Are there any hidden fees or charges?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No. We believe in transparent pricing with no surprise charges or hidden costs. All fees and terms are clearly 
                outlined in your agreement before you commit. What you see is what you get—no hidden surprises.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What kind of business support do you provide beyond funding?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                MicroBiz provides comprehensive support including business mentorship, strategic guidance, training on financial 
                literacy, help with business planning, supplier connections, marketing support, and access to our monitoring and 
                evaluation system to track your progress. We exist to help you become a confident entrepreneur who is well equipped, 
                well resourced, and well trained.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Do you offer flexible repayment terms?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! Our repayment terms are designed to match your business cash flow, with grace periods available when needed. 
                We understand that businesses have ups and downs, so we work with you to create a repayment plan that's sustainable 
                and realistic for your situation.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-11" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                How can I get started with your services?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Simply click the "Apply Now" button to chat with our WhatsApp chatbot at +263773988988. Fill out the
                application form with your business details, and our team will review your submission within 3-5
                business days.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-12" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                Who are your partners and what do they bring to the table?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We partner with established institutions including the Salary Services Bureau of Zimbabwe, ZB Financial Holdings, 
                Small Enterprise Development Corporation, and National Building Society Bank of Zimbabwe. These partnerships enable 
                us to provide secure, reliable financing solutions and comprehensive support to our entrepreneurs.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-13" className="bg-card/50 backdrop-blur border border-border rounded-lg px-6">
              <AccordionTrigger className="text-foreground hover:text-secondary">
                What is your success rate with funded businesses?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                We're proud to maintain a 95% success rate with our funded businesses. We've helped over 500+ businesses get started 
                and have deployed over $2M+ in capital. Our success comes from combining financial support with comprehensive business 
                mentorship and ongoing guidance.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  )
}
