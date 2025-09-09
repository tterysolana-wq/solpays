import { Button } from "./ui/button";
import { Home, FileText, HelpCircle } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="flex justify-between items-center h-14 sm:h-16">
          {/* Logo */}
          <button 
            onClick={() => onPageChange("home")}
            className="flex items-center space-x-1.5 sm:space-x-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-lg"></div>
            <span className="text-lg sm:text-xl text-black">SOLPays</span>
          </button>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-0.5 sm:space-x-1">
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("home")}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${currentPage === "home" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }`}
            >
              <Home className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Home</span>
            </Button>
            <Button
              variant={currentPage === "docs" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("docs")}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${currentPage === "docs" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }`}
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Docs</span>
            </Button>
            <Button
              variant={currentPage === "support" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("support")}
              className={`px-2 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm ${currentPage === "support" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }`}
            >
              <HelpCircle className="w-3 h-3 sm:w-4 sm:h-4 sm:mr-2" />
              <span className="hidden sm:inline">Support</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}