import { QrCode, Zap, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: QrCode,
    title: "Customer scans QR code",
    description: "Customer opens their Solana wallet and scans the merchant's QR code to initiate payment."
  },
  {
    icon: Zap,
    title: "Transaction confirmed instantly",
    description: "Payment is processed and confirmed on the Solana blockchain within seconds."
  },
  {
    icon: CheckCircle,
    title: "Merchant receives payment",
    description: "Funds are immediately available in the merchant's wallet with full transaction details."
  }
];

export function HowItWorks() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and secure crypto payments in just three easy steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#14F195] rounded-full flex items-center justify-center">
                  <span className="text-black text-sm">{index + 1}</span>
                </div>
                <h3 className="text-xl mb-4 text-black">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] transform -translate-x-4"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}