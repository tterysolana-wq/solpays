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
      answer: "Our fees are very competitive: 0.5% for SOL payments, 0.3% for USDC/USDT, and only 0.1% when using $SOLPAYS tokens. Network fees are additional and paid directly to Solana validators (typically less than $0.01)."
    },
    {
      question: "Is SOLPays secure?",
      answer: "Absolutely! SOLPays is built on Solana's secure blockchain infrastructure. We use industry-standard encryption, multi-signature wallets, and undergo regular security audits. Your funds and data are protected with bank-level security."
    },
    {
      question: "Can I integrate SOLPays with my existing e-commerce platform?",
      answer: "Yes! SOLPays offers SDKs and APIs that can be easily integrated with most e-commerce platforms, POS systems, and custom applications. Check our documentation for specific integration guides."
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-16 sm:pt-20">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-8 sm:py-12">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-black mb-4 sm:mb-6 px-2">
            Support Center
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Get help, find answers, and connect with our support team
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Contact Options */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Headphones className="w-5 h-5 sm:w-6 sm:h-6" />
                  Contact Us
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-auto py-3 text-xs sm:text-sm"
                  variant="outline"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#14F195] flex-shrink-0" />
                  <span className="flex-1 text-left">Live Chat</span>
                  <Badge variant="secondary" className="text-xs">24/7</Badge>
                </Button>
                
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-auto py-3 text-xs sm:text-sm"
                  variant="outline"
                >
                  <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#9945FF] flex-shrink-0" />
                  <span className="flex-1 text-left">Email Support</span>
                  <Badge variant="outline" className="text-xs">4h</Badge>
                </Button>
                
                <Button 
                  className="w-full justify-start bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 h-auto py-3 text-xs sm:text-sm"
                  variant="outline"
                >
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3 text-[#14F195] flex-shrink-0" />
                  <span className="flex-1 text-left">Phone Support</span>
                  <Badge variant="outline" className="text-xs">Business Hours</Badge>
                </Button>
              </CardContent>
            </Card>

            {/* Response Times */}
            <Card className="shadow-lg border-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="flex items-center gap-2 text-base sm:text-lg">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[#9945FF]" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">Live Chat</span>
                  <Badge className="bg-green-100 text-green-800 text-xs">Instant</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">Email</span>
                  <Badge variant="secondary" className="text-xs">Within 4 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">Phone</span>
                  <Badge variant="outline" className="text-xs">Same day</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs sm:text-sm text-gray-600">Technical Issues</span>
                  <Badge className="bg-orange-100 text-orange-800 text-xs">Priority</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Community */}
            <Card className="shadow-lg border-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-base sm:text-lg">Community</CardTitle>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 space-y-2 sm:space-y-3">
                <Button 
                  variant="outline" 
                  onClick={() => window.open('https://x.com/sol_pays', '_blank')}
                  className="w-full justify-start h-auto py-2 sm:py-3 text-xs sm:text-sm"
                >
                  <Twitter className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                  Follow us on X
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto py-2 sm:py-3 text-xs sm:text-sm"
                >
                  <Github className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                  GitHub Repository
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start h-auto py-2 sm:py-3 text-xs sm:text-sm"
                >
                  <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4 mr-2 sm:mr-3" />
                  Discord Community
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-0">
              <CardHeader className="p-4 sm:p-6">
                <CardTitle className="text-lg sm:text-xl lg:text-2xl">Frequently Asked Questions</CardTitle>
                <p className="text-gray-600 text-sm sm:text-base">Find quick answers to common questions about SOLPays</p>
              </CardHeader>
              <CardContent className="p-4 sm:p-6">
                <Accordion type="single" collapsible className="space-y-2">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-3 sm:px-4">
                      <AccordionTrigger className="text-left hover:no-underline py-3 sm:py-4">
                        <span className="text-black text-sm sm:text-base pr-2">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600 pb-3 sm:pb-4 text-sm sm:text-base">
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