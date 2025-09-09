import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Code, Zap, Shield, Globe, Wallet, CreditCard } from "lucide-react";

export function DocsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl text-black mb-6">
            SOLPays Documentation
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Complete guide to integrating and using SOLPays for seamless crypto payments
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Quick Start */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="shadow-lg border-0">
              <CardHeader className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white">
                <CardTitle className="flex items-center gap-2">
                  <Zap className="w-6 h-6" />
                  Quick Start Guide
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg mb-3 text-black">1. Create Account</h3>
                    <p className="text-gray-600 mb-4">
                      Sign up for a SOLPays merchant account to start accepting crypto payments.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-sm text-gray-800">
                        Visit: https://solpays.app/register<br/>
                        • Provide business information<br/>
                        • Verify your identity<br/>
                        • Connect your Solana wallet
                      </code>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg mb-3 text-black">2. Integration</h3>
                    <p className="text-gray-600 mb-4">
                      Integrate SOLPays into your existing payment flow.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-sm text-gray-800">
                        npm install @solpays/sdk<br/><br/>
                        import {`{ SOLPays }`} from '@solpays/sdk';<br/>
                        const solpays = new SOLPays(YOUR_API_KEY);
                      </code>
                    </div>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg mb-3 text-black">3. Accept Payment</h3>
                    <p className="text-gray-600 mb-4">
                      Create payment requests and handle transactions.
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4">
                      <code className="text-sm text-gray-800">
                        const payment = await solpays.createPayment({`{`}<br/>
                        &nbsp;&nbsp;amount: 50.00,<br/>
                        &nbsp;&nbsp;currency: 'USDC',<br/>
                        &nbsp;&nbsp;description: 'Coffee Order'<br/>
                        {`}`});
                      </code>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* API Reference */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code className="w-6 h-6 text-[#9945FF]" />
                  API Reference
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg mb-3 text-black">Payment Endpoints</h3>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <Badge variant="secondary" className="mr-2">POST</Badge>
                          <code className="text-sm">/api/v1/payments</code>
                        </div>
                        <span className="text-sm text-gray-600">Create payment</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <Badge variant="outline" className="mr-2">GET</Badge>
                          <code className="text-sm">/api/v1/payments/{`{id}`}</code>
                        </div>
                        <span className="text-sm text-gray-600">Get payment status</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div>
                          <Badge variant="outline" className="mr-2">GET</Badge>
                          <code className="text-sm">/api/v1/transactions</code>
                        </div>
                        <span className="text-sm text-gray-600">List transactions</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Features */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Key Features</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-[#9945FF]" />
                    <span className="text-sm">Secure Transactions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-[#14F195]" />
                    <span className="text-sm">Instant Settlement</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-5 h-5 text-[#9945FF]" />
                    <span className="text-sm">Global Payments</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wallet className="w-5 h-5 text-[#14F195]" />
                    <span className="text-sm">Multi-Wallet Support</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Supported Tokens */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg">Supported Tokens</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SOL</span>
                    <Badge variant="secondary">Native</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">USDC</span>
                    <Badge variant="outline">SPL</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">USDT</span>
                    <Badge variant="outline">SPL</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">$SOLPAYS</span>
                    <Badge className="bg-gradient-to-r from-[#9945FF] to-[#14F195] text-white">Coming Soon</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Transaction Fees */}
            <Card className="shadow-lg border-0">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Transaction Fees
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">SOL Payments</span>
                    <span className="text-sm">0.5%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">USDC/USDT</span>
                    <span className="text-sm">0.3%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">$SOLPAYS</span>
                    <span className="text-sm text-[#14F195]">0.1%</span>
                  </div>
                  <Separator />
                  <p className="text-xs text-gray-500">
                    Network fees are additional and paid directly to Solana validators.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}