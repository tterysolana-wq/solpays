import { Button } from "./ui/button";
import { Github, Twitter, FileText, HelpCircle } from "lucide-react";

interface FooterProps {
  onPageChange?: (page: string) => void;
}

export function Footer({ onPageChange }: FooterProps) {
  return (
    <footer className="relative py-16 bg-gradient-to-br from-black via-[#9945FF]/20 to-[#14F195]/20 overflow-hidden">
      <div className="absolute inset-0 bg-black/80"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl text-white mb-4">
            Ready to revolutionize payments?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of merchants already using SOLPays
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-8 py-6 text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Get Started Today
          </Button>
        </div>
        
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-lg"></div>
              <span className="text-white text-xl">SOLPays</span>
            </div>
            
            <div className="flex items-center space-x-6">
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange?.("docs")}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300"
              >
                <FileText className="w-4 h-4 mr-2" />
                Docs
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => onPageChange?.("support")}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300"
              >
                <HelpCircle className="w-4 h-4 mr-2" />
                Support
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={() => window.open('https://x.com/sol_pays', '_blank')}
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300"
              >
                <Twitter className="w-4 h-4 mr-2" />
                X
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-300 hover:text-[#14F195] transition-colors duration-300"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-700 text-center">
            <p className="text-gray-400">
              © 2025 SOLPays. Built on the Solana blockchain. Fast, secure, borderless.
            </p>
          </div>
        </div>
      </div>
      
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-20 left-20 w-32 h-32 bg-[#9945FF]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-[#14F195]/10 rounded-full blur-xl"></div>
      </div>
    </footer>
  );
}