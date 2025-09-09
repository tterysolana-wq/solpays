import { Button } from "./ui/button";
import { Home, FileText, HelpCircle } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <button 
            onClick={() => onPageChange("home")}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity duration-200 cursor-pointer"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-lg"></div>
            <span className="text-xl text-black">SOLPays</span>
          </button>
          
          {/* Navigation Links */}
          <div className="flex items-center space-x-1">
            <Button
              variant={currentPage === "home" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("home")}
              className={currentPage === "home" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }
            >
              <Home className="w-4 h-4 mr-2" />
              Home
            </Button>
            <Button
              variant={currentPage === "docs" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("docs")}
              className={currentPage === "docs" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }
            >
              <FileText className="w-4 h-4 mr-2" />
              Docs
            </Button>
            <Button
              variant={currentPage === "support" ? "default" : "ghost"}
              size="sm"
              onClick={() => onPageChange("support")}
              className={currentPage === "support" ? 
                "bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white" : 
                "text-gray-600 hover:text-[#9945FF]"
              }
            >
              <HelpCircle className="w-4 h-4 mr-2" />
              Support
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}