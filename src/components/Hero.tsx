import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#9945FF] via-[#14F195] to-[#9945FF] overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-16 sm:py-20 pt-20 sm:pt-24">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mb-4 sm:mb-6 leading-tight">
              Pay Anywhere with <span className="block text-[#14F195]">SOLPays</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
              Fast, Secure, and Borderless Crypto Payments
            </p>
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
              disabled
            >
              Coming Soon
            </Button>
          </div>
          <div className="relative mt-8 lg:mt-0">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1647960126861-2756a227a77e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBwYXlpbmclMjBjb250YWN0bGVzcyUyMHBheW1lbnQlMjBjYWZlJTIwY29mZmVlJTIwc2hvcHxlbnwxfHx8fDE3NTcyOTY2NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Person making contactless payment at café"
                className="w-full h-[300px] sm:h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[#9945FF] rounded-full p-2 sm:p-3 shadow-lg animate-pulse">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-[#14F195] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}