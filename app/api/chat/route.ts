import { type NextRequest, NextResponse } from "next/server"

// Knowledge base about MicroBiz Zimbabwe
const MICROBIZ_KNOWLEDGE = `
MicroBiz Zimbabwe is a microfinancing program under BancoZim Holdings that helps small business owners start or expand their businesses.

PRODUCTS:
1. Retail Starter Pack ($500-$2,000): For retail shops and convenience stores
2. Food & Catering Pack ($300-$1,500): For food vendors, caterers, and restaurants
3. Beauty & Salon Pack ($400-$1,800): For beauty salons, barbershops, and mobile beauty services
4. Transport & Logistics Pack ($1,000-$5,000): For transport businesses
5. Tech & Services Pack ($600-$2,500): For tech entrepreneurs and consultants
6. Fashion & Apparel Pack ($500-$2,200): For clothing lines, boutiques, and tailoring businesses

APPLICATION PROCESS:
1. Browse products on the MicroBiz website
2. Submit application at bancosystem.co.zw
3. Application reviewed in 3-5 business days
4. Once approved, funds disbursed within 48 hours

KEY FEATURES:
- Flexible repayment terms
- Fast approval (3-5 days)
- Business mentorship and support
- No hidden fees
- Transparent pricing

CONTACT:
- Phone: (0242) 744 840
- Email: info@bancozim.co.zw
- Location: 5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare
- Hours: Mon-Fri 8AM-5PM, Sat 8AM-1PM

ABOUT BANCOZIM:
BancoZim Holdings is a leading microfinancing company in Zimbabwe dedicated to providing accessible financial solutions to small and micro businesses.
`

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json()

    // Simple rule-based responses for demo purposes
    // In production, you would integrate with OpenAI API here
    const lowerMessage = message.toLowerCase()

    let response = ""

    if (lowerMessage.includes("product") || lowerMessage.includes("pack") || lowerMessage.includes("starter")) {
      response =
        "We offer 6 different MicroBiz Starter Packs:\n\n1. Retail Starter Pack ($500-$2,000)\n2. Food & Catering Pack ($300-$1,500)\n3. Beauty & Salon Pack ($400-$1,800)\n4. Transport & Logistics Pack ($1,000-$5,000)\n5. Tech & Services Pack ($600-$2,500)\n6. Fashion & Apparel Pack ($500-$2,200)\n\nEach pack is tailored to specific business types. Which one interests you?"
    } else if (lowerMessage.includes("apply") || lowerMessage.includes("application")) {
      response =
        "To apply for a MicroBiz Starter Pack:\n\n1. Choose your preferred pack\n2. Visit bancosystem.co.zw to submit your application\n3. We'll review it within 3-5 business days\n4. Once approved, you'll receive funds within 48 hours\n\nThe process is simple and fast!"
    } else if (lowerMessage.includes("repay") || lowerMessage.includes("payment")) {
      response =
        "We offer flexible repayment terms designed to match your business cash flow. Grace periods are available, and there are no hidden fees. Our team will work with you to create a repayment schedule that works for your business."
    } else if (lowerMessage.includes("contact") || lowerMessage.includes("phone") || lowerMessage.includes("email")) {
      response =
        "You can reach us at:\n\n📞 Phone: (0242) 744 840\n📧 Email: info@bancozim.co.zw\n📍 Location: 5th Floor Pockets Building, 50 Jason Moyo Street, P.O Box CY 2222, Harare\n\nOffice Hours:\nMon-Fri: 8:00 AM - 5:00 PM\nSat: 8:00 AM - 1:00 PM\nSun: Closed"
    } else if (lowerMessage.includes("bancozim") || lowerMessage.includes("about")) {
      response =
        "BancoZim Holdings is a leading microfinancing company in Zimbabwe. We're dedicated to providing accessible financial solutions to small and micro businesses across the nation. Our MicroBiz program has helped over 500 entrepreneurs launch and grow successful businesses."
    } else if (lowerMessage.includes("how long") || lowerMessage.includes("time")) {
      response =
        "Our application process is fast:\n\n✅ Application review: 3-5 business days\n✅ Fund disbursement: Within 48 hours after approval\n\nSo you could have your funding in as little as one week!"
    } else if (lowerMessage.includes("requirement") || lowerMessage.includes("qualify")) {
      response =
        "To qualify for a MicroBiz Starter Pack, you need:\n\n• A viable business idea or existing business\n• Zimbabwean citizenship or residency\n• Basic business plan (we can help you with this)\n• Commitment to growing your business\n\nWe believe in giving everyone a chance, regardless of their current financial situation!"
    } else {
      response =
        "I'm here to help you learn about MicroBiz Zimbabwe! I can answer questions about:\n\n• Our Starter Pack products\n• The application process\n• Repayment terms\n• Contact information\n• BancoZim Holdings\n\nWhat would you like to know?"
    }

    return NextResponse.json({ message: response })
  } catch (error) {
    console.error("[v0] Chat API error:", error)
    return NextResponse.json({ message: "Sorry, I encountered an error. Please try again." }, { status: 500 })
  }
}
