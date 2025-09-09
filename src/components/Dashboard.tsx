import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Wallet, Users, Clock } from "lucide-react";

export function Dashboard() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-black mb-4 sm:mb-6">
            Merchant Dashboard
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Monitor your business with real-time analytics and payment tracking
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mb-6 sm:mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-[#14F195] text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Total Sales</span>
                  <span className="sm:hidden">Sales</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-white text-lg sm:text-xl lg:text-2xl">$24,567</div>
                <div className="text-green-400 text-xs sm:text-sm">+12.5%</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-[#9945FF] text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <Wallet className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">SOL Balance</span>
                  <span className="sm:hidden">SOL</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-white text-lg sm:text-xl lg:text-2xl">127.45</div>
                <div className="text-gray-400 text-xs sm:text-sm">≈ $12,745</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-[#14F195] text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <Users className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Customers</span>
                  <span className="sm:hidden">Users</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-white text-lg sm:text-xl lg:text-2xl">1,234</div>
                <div className="text-green-400 text-xs sm:text-sm">+5.2%</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-2 sm:pb-3">
                <CardTitle className="text-[#9945FF] text-xs sm:text-sm flex items-center gap-1 sm:gap-2">
                  <Clock className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">Avg. Transaction</span>
                  <span className="sm:hidden">Speed</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="text-white text-lg sm:text-xl lg:text-2xl">2.3s</div>
                <div className="text-gray-400 text-xs sm:text-sm">Processing</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white text-base sm:text-lg">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 sm:space-y-4">
                {[
                  { amount: "12.5 USDC", customer: "Coffee Shop Customer", time: "2 min ago", status: "Completed" },
                  { amount: "0.75 SOL", customer: "Restaurant Order", time: "5 min ago", status: "Completed" },
                  { amount: "8.2 USDC", customer: "Retail Purchase", time: "12 min ago", status: "Completed" },
                  { amount: "1.1 SOL", customer: "Online Order", time: "18 min ago", status: "Completed" }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-2 sm:py-3 border-b border-gray-700 last:border-b-0">
                    <div className="min-w-0 flex-1">
                      <div className="text-white text-sm sm:text-base truncate">{transaction.amount}</div>
                      <div className="text-gray-400 text-xs sm:text-sm truncate">{transaction.customer}</div>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <div className="text-green-400 text-xs sm:text-sm">{transaction.status}</div>
                      <div className="text-gray-400 text-xs">{transaction.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}