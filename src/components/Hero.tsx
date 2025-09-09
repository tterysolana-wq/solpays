import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9945FF] via-[#14F195] to-[#9945FF] overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl text-white mb-6">
              Pay Anywhere with <span className="block text-[#14F195]">SOLPays</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl">
              Fast, Secure, and Borderless Crypto Payments
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              disabled
            >
              Coming Soon
            </Button>
          </div>
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1647960126861-2756a227a77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwYXlpbmclMjBjb250YWN0bGVzcyUyMHBheW1lbnQlMjBjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NTcyOTY2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person making contactless payment at café"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute top-4 right-4 bg-[#9945FF] rounded-full p-3 shadow-lg animate-pulse">
                <div className="w-8 h-8 bg-[#14F195] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}