import { Card } from "@/components/ui/card"

export default function WhatWeDoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <section className="px-4 py-12">
        <div className="container mx-auto max-w-5xl">
          <Card className="p-8 bg-card/50 backdrop-blur border-border">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-primary">What We Do</h1>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                We help people become small business owners through starter packs and five key enablers:
              </p>
              <ol className="list-decimal pl-6 space-y-2 marker:text-primary">
                <li>Business tools: equipment, machinery, raw materials, or stock.</li>
                <li>
                  Training with two parts:
                  <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-primary">
                    <li>Hands-on, practical lessons from seasoned business owners (our MicroBiz Legends).</li>
                    <li>Business and entrepreneurship training with C.U.T (Chinhoyi University of Technology).</li>
                  </ul>
                </li>
                <li>
                  Zero-deposit credit with 3, 6, or 9-month terms for:
                  <ul className="list-disc pl-6 mt-2 space-y-1 marker:text-primary">
                    <li>SSB-paid civil servants</li>
                    <li>All government pensioners</li>
                    <li>Employees whose employers have a direct deduction arrangement with us</li>
                    <li>ZB Bank account holders whose salaries are paid into ZB Bank</li>
                  </ul>
                </li>
                <li>Monitoring and Evaluation to track progress and fix early challenges.</li>
                <li>Ongoing support — we follow through so dreams get the chance to live.</li>
              </ol>
            </div>
          </Card>
        </div>
      </section>
    </div>
  )
}
