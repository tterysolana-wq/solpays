import { Zap, DollarSign, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Transactions",
    description: "Process payments in seconds with Solana's high-speed blockchain technology."
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description: "Enjoy minimal transaction costs compared to traditional payment methods."
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Accept payments from customers worldwide without geographical restrictions."
  },
  {
    icon: BarChart3,
    title: "Merchant Dashboard",
    description: "Track sales, analytics, and manage your crypto payments in real-time."
  }
];

export function Features() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
            Why Choose SOLPays?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Experience the future of payments with our cutting-edge crypto payment solution
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border-0 shadow-lg"
            >
              <CardContent className="p-4 sm:p-6 lg:p-8 text-center">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-xl sm:rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-black">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}