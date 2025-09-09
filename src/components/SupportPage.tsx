import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { MessageCircle, Mail, Clock, Phone, Twitter, Github, Headphones } from "lucide-react";

export function SupportPage() {
  const faqItems = [
    {
      question: "How do I get started with SOLPays?",
      answer: "Getting started is easy! Simply create a merchant account on our platform, verify your identity, connect your Solana wallet, and you can start accepting crypto payments immediately. Our Quick Start Guide in the documentation provides step-by-step instructions."
    },
    {
      question: "What cryptocurrencies does SOLPays support?",
      answer: "SOLPays currently supports SOL (native Solana), USDC, and USDT. We're also preparing to launch our native $SOLPAYS token which will offer the lowest transaction fees on our platform."
    },
    {
      question: "How long do transactions take to process?",
      answer: "Thanks to Solana's high-speed blockchain, most transactions are processed and confirmed within 1-2 seconds. Settlement to your wallet is typically instant, making SOLPays perfect for point-of-sale scenarios."
    },
    {
      question: "What are the transaction fees?",
      answer: "Our fees are very competitive: 0.5% for SOL payments, 0.3% for USDC/USDT, and only 0.1% when using $SOLPAY tokens. Network fees are additional and paid directly to Solana validators (typically less than $0.01)."
    },
    {
      question: "Is SOLPay secure?",
      answer: "Absolutely! SOLPay is built on Solana's secure blockchain infrastructure. We use industry-standard encryption, multi-signature wallets, and undergo regular security audits. Your funds and data are protected with bank-level security."
    },
    {
      question: "Can I integrate SOLPay with my existing e-commerce platform?",
      answer: "Yes! SOLPay offers SDKs and APIs that can be easily integrated with most e-commerce platforms, POS systems, and custom applications. Check our documentation for specific integration guides."
    },
    {
      question: "What happens if a transaction fails?",
      answer: "Failed transactions are automatically reversed, and customers are notified immediately. No funds are lost during failed transactions, and our system provides detailed error messages to help resolve any issues quickly."
    },
    {
      question: "Do you offer customer support?",
      answer: "Yes! We provide 24/7 customer support through multiple channels including live chat, email, and our community Discord. Our technical support team is available to help with integration and troubleshooting."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-black mb-6">
            Support Center
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get help, find answers, and connect with our support team
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-1 space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white">
                <CardTitle className="flex items-center gap-2">
                  <Headphones className="w-6 h-6" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                  variant="outline"
                >
                  <MessageCircle className="w-4 h-4 mr-3 text-[#14F195]" />
                  Live Chat
                  <Badge variant="secondary" className="ml-auto">24/7</Badge>
                </Button>
                
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                  variant="outline"
                >
                  <Mail className="w-4 h-4 mr-3 text-[#9945FF]" />
                  Email Support
                  <Badge variant="outline" className="ml-auto">4h</Badge>
                </Button>
                
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
                  variant="outline"
                >
                  <Phone className="w-4 h-4 mr-3 text-[#14F195]" />
                  Phone Support
                  <Badge variant="outline" className="ml-auto">Business Hours</Badge>
                </Button>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#9945FF]" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Live Chat</span>
                  <Badge className="bg-green-100 text-green-800">Instant</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Email</span>
                  <Badge variant="secondary">Within 4 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Phone</span>
                  <Badge variant="outline">Same day</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Technical Issues</span>
                  <Badge className="bg-orange-100 text-orange-800">Priority</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle>Community</CardTitle>
              </CardHeader>
              <CardContent className="p-6 space-y-3">
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://x.com/sol_pays', '_blank')}
                  className="w-full justify-start"
                >
                  <Twitter className="w-4 h-4 mr-3" />
                  Follow us on X
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Github className="w-4 h-4 mr-3" />
                  GitHub Repository
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <MessageCircle className="w-4 h-4 mr-3" />
                  Discord Community
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-2xl">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600">Find quick answers to common questions about SOLPay</p>
              </CardHeader>
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-4">
                        <span className="text-black">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-4">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>


          </div>
        </div>
      </div>
    </div>
  );
}