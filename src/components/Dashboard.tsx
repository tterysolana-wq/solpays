import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { TrendingUp, Wallet, Users, Clock } from "lucide-react";

export function Dashboard() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl text-black mb-6">
            Merchant Dashboard
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your business with real-time analytics and payment tracking
          </p>
        </div>
        
        <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#14F195] text-sm flex items-center gap-2">
                  <TrendingUp className="w-4 h-4" />
                  Total Sales
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white text-2xl">$24,567</div>
                <div className="text-green-400 text-sm">+12.5% from last month</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#9945FF] text-sm flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  SOL Balance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white text-2xl">127.45</div>
                <div className="text-gray-400 text-sm">≈ $12,745 USD</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#14F195] text-sm flex items-center gap-2">
                  <Users className="w-4 h-4" />
                  Customers
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white text-2xl">1,234</div>
                <div className="text-green-400 text-sm">+5.2% this week</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-700">
              <CardHeader className="pb-3">
                <CardTitle className="text-[#9945FF] text-sm flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Avg. Transaction
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-white text-2xl">2.3s</div>
                <div className="text-gray-400 text-sm">Processing time</div>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent Transactions</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { amount: "12.5 USDC", customer: "Coffee Shop Customer", time: "2 min ago", status: "Completed" },
                  { amount: "0.75 SOL", customer: "Restaurant Order", time: "5 min ago", status: "Completed" },
                  { amount: "8.2 USDC", customer: "Retail Purchase", time: "12 min ago", status: "Completed" },
                  { amount: "1.1 SOL", customer: "Online Order", time: "18 min ago", status: "Completed" }
                ].map((transaction, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-gray-700 last:border-b-0">
                    <div>
                      <div className="text-white">{transaction.amount}</div>
                      <div className="text-gray-400 text-sm">{transaction.customer}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-green-400">{transaction.status}</div>
                      <div className="text-gray-400 text-sm">{transaction.time}</div>
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