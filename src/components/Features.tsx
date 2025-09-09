import { Zap, DollarSign, Globe, BarChart3 } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const features = [
  {
    icon: Zap,
    title: "Instant Transactions",
    description:
      "Process payments in seconds with Solana's high-speed blockchain technology.",
  },
  {
    icon: DollarSign,
    title: "Low Fees",
    description:
      "Enjoy minimal transaction costs compared to traditional payment methods.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description:
      "Accept payments from customers worldwide without geographical restrictions.",
  },
  {
    icon: BarChart3,
    title: "Merchant Dashboard",
    description:
      "Track sales, analytics, and manage your crypto payments in real-time.",
  },
];

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            Why Choose SOLPays?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Experience the future of payments with our cutting-edge crypto
            payment solution
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg"
            >
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl mb-4 text-black">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
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
