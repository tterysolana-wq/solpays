import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Copy, ExternalLink, Clock } from "lucide-react";
import { Badge } from "./ui/badge";

export function TokenInfo() {
  const handleCopyCA = () => {
    // Placeholder function for when CA is available
    console.log("CA will be available soon");
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
            SOLPays Token
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            The native utility token powering the SOLPays ecosystem
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white p-4 sm:p-6 lg:p-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-4">
                <div className="text-center sm:text-left">
                  <CardTitle className="text-2xl sm:text-3xl mb-2">$SOLPAYS</CardTitle>
                  <p className="text-white/90 text-sm sm:text-base">Official SOLPays Token</p>
                </div>
                <div className="text-center sm:text-right">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2 text-xs sm:text-sm">
                    Solana Network
                  </Badge>
                  <div className="flex items-center gap-2 justify-center sm:justify-end">
                    <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                    <span className="text-xs sm:text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-4 sm:p-6 lg:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                <div>
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-black">Token Details</h3>
                  <div className="space-y-2 sm:space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm sm:text-base">Token Name</span>
                      <span className="text-black text-sm sm:text-base">SOLPays</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm sm:text-base">Symbol</span>
                      <span className="text-black text-sm sm:text-base">$SOLPAYS</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm sm:text-base">Network</span>
                      <span className="text-black text-sm sm:text-base">Solana</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600 text-sm sm:text-base">Total Supply</span>
                      <span className="text-black text-sm sm:text-base">TBA</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-black">Contract Address</h3>
                  <div className="bg-gray-50 rounded-xl p-4 sm:p-6 text-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                    </div>
                    <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base">Contract Address</p>
                    <div className="bg-white rounded-lg p-3 sm:p-4 border border-gray-200 mb-3 sm:mb-4">
                      <code className="text-gray-500 text-xs sm:text-sm">Token launch coming soon...</code>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled
                        className="opacity-50 text-xs sm:text-sm"
                      >
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        Copy CA
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled
                        className="opacity-50 text-xs sm:text-sm"
                      >
                        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                        View Explorer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h4 className="text-base sm:text-lg mb-2 sm:mb-3 text-black">Get Notified</h4>
                  <p className="text-gray-600 mb-3 sm:mb-4 text-sm sm:text-base px-2">
                    Be the first to know when $SOLPAYS token launches
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base transition-all duration-300"
                  >
                    Notify Me
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}