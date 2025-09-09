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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            SOLPay Token
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The native utility token powering the SOLPay ecosystem
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="bg-white shadow-2xl border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white p-8">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-3xl mb-2">$SOLPAY</CardTitle>
                  <p className="text-white/90">Official SOLPay Token</p>
                </div>
                <div className="text-right">
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30 mb-2">
                    Solana Network
                  </Badge>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Coming Soon</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl mb-4 text-black">Token Details</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Token Name</span>
                      <span className="text-black">SOLPay</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Symbol</span>
                      <span className="text-black">$SOLPAY</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Network</span>
                      <span className="text-black">Solana</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-100">
                      <span className="text-gray-600">Total Supply</span>
                      <span className="text-black">TBA</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl mb-4 text-black">Contract Address</h3>
                  <div className="bg-gray-50 rounded-xl p-6 text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[#9945FF] to-[#14F195] rounded-full flex items-center justify-center">
                      <Clock className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-gray-600 mb-4">Contract Address</p>
                    <div className="bg-white rounded-lg p-4 border border-gray-200 mb-4">
                      <code className="text-gray-500 text-sm">Token launch coming soon...</code>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled
                        className="opacity-50"
                      >
                        <Copy className="w-4 h-4 mr-2" />
                        Copy CA
                      </Button>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        disabled
                        className="opacity-50"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        View on Explorer
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <h4 className="text-lg mb-3 text-black">Get Notified</h4>
                  <p className="text-gray-600 mb-4">
                    Be the first to know when $SOLPAY token launches
                  </p>
                  <Button 
                    size="lg"
                    className="bg-gradient-to-r from-[#9945FF] to-[#14F195] hover:from-[#8834FF] hover:to-[#10D484] text-white px-8 py-3 transition-all duration-300"
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