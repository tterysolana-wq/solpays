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
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
            How It Works
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Simple, fast, and secure crypto payments in just three easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center shadow-lg">
                  <step.icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 text-white" />
                  <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-6 h-6 sm:w-8 sm:h-8 bg-[#14F195] rounded-full flex items-center justify-center">
                    <span className="text-black text-xs sm:text-sm">{index + 1}</span>
                  </div>
                </div>
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-black px-2">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed px-2">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 sm:top-9 lg:top-10 left-full w-full">
                  <div className="w-6 sm:w-8 h-0.5 bg-gradient-to-r from-[#9945FF] to-[#14F195] transform -translate-x-3 sm:-translate-x-4"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}