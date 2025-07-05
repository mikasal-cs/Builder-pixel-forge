import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Mail, Shield, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-blue-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <motion.div
              className="flex items-center space-x-2"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                JeushMikasalstore
              </span>
            </motion.div>

            <Button
              variant="ghost"
              className="text-white hover:text-purple-400"
              onClick={() => window.history.back()}
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl md:text-4xl font-bold text-white mb-4">
                🔒 Privacy Policy
              </CardTitle>
              <p className="text-gray-300">
                We value your privacy. This policy explains what data we
                collect, how we use it, and how it's protected.
              </p>
            </CardHeader>

            <CardContent className="space-y-8 text-white">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300 flex items-center">
                  <Eye className="h-6 w-6 mr-2" />
                  1. Information We Collect
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  We collect:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Your name, email, and contact number (for support)</li>
                  <li>
                    Your Mobile Legends ID and Server ID (for top-up processing)
                  </li>
                  <li>Payment confirmation details (for order tracking)</li>
                </ul>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  2. How We Use Your Information
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>To process your diamond top-up</li>
                  <li>To send you order updates and support responses</li>
                  <li>To improve our service</li>
                </ul>
                <div className="bg-green-900/20 border border-green-500/30 p-4 rounded-lg mt-4">
                  <p className="text-green-300 font-medium">
                    ✅ We do not sell or share your data with third parties.
                  </p>
                </div>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  3. Cookies & Tracking
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We may use basic analytics (like page views or visit
                  duration), but no personal data is tracked without your
                  knowledge.
                </p>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300 flex items-center">
                  <Shield className="h-6 w-6 mr-2" />
                  4. Data Security
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Your data is stored securely. All payment details are handled
                  through Google Pay/UPI, and we do not store any sensitive
                  financial information.
                </p>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg">
                  <p className="text-blue-300">
                    🔐 Your payment information is processed directly by Google
                    Pay/UPI and never stored on our servers.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  5. Your Rights
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You may request deletion of your stored data at any time by
                  contacting:
                </p>
                <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                  <div className="flex items-center space-x-3 text-blue-300">
                    <Mail className="h-5 w-5" />
                    <span className="font-mono">
                      jeushsalrachmarak@gmail.com
                    </span>
                  </div>
                </div>
              </div>

              <div className="border-t border-purple-500/30 pt-6 text-center">
                <p className="text-sm text-gray-400">
                  Last updated: {new Date().toLocaleDateString()}
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
