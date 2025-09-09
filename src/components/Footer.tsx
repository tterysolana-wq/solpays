import { Button } from "./ui/button";
import { Github, Twitter, FileText, HelpCircle } from "lucide-react";

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="relative py-12 sm:py-16 bg-gradient-to-br from-black via-[#9945FF]/20 to-[#14F195]/20 overflow-hidden">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-white mb-3 sm:mb-4 px-2">
            Ready to revolutionize payments?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 px-2">
            Join thousands of merchants already using SOLPays
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Started Today
          </Button>
        </div>
        
        <div className="border-t border-gray-700 pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-lg"></div>
              <span className="text-white text-lg sm:text-xl">SOLPays</span>
            </div>
            
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 lg:gap-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange?.("docs")}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300 px-2 sm:px-3 text-sm"
              >
                <FileText className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Docs</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange?.("support")}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300 px-2 sm:px-3 text-sm"
              >
                <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">Support</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.open('https://x.com/sol_pays', '_blank')}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300 px-2 sm:px-3 text-sm"
              >
                <Twitter className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">X</span>
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300 px-2 sm:px-3 text-sm"
              >
                <Github className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
                <span className="hidden sm:inline">GitHub</span>
              </Button>
            </div>
          </div>
          
          <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400 text-sm sm:text-base px-2">
              © 2025 SOLPays. Built on the Solana blockchain. Fast, secure, borderless.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-10 sm:top-20 left-10 sm:left-20 w-16 h-16 sm:w-32 sm:h-32 bg-[#9945FF]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 sm:bottom-20 right-10 sm:right-20 w-24 h-24 sm:w-48 sm:h-48 bg-[#14F195]/10 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
}