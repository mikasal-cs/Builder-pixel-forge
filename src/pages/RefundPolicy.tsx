import React from "react";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Gamepad2,
  Phone,
  Mail,
  AlertCircle,
  XCircle,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const RefundPolicy = () => {
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
                💸 Refund Policy
              </CardTitle>
              <p className="text-gray-300">
                As we sell digital products (Mobile Legends Diamonds), our
                refund policy is as follows:
              </p>
            </CardHeader>

            <CardContent className="space-y-8 text-white">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-red-300 flex items-center">
                  <XCircle className="h-6 w-6 mr-2" />
                  1. Non-Refundable
                </h2>
                <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                  <p className="text-red-300 font-medium">
                    ⚠️ Once a top-up is successfully processed and diamonds are
                    delivered, the purchase is non-refundable.
                  </p>
                </div>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-green-300 flex items-center">
                  <CheckCircle className="h-6 w-6 mr-2" />
                  2. Refund Eligibility
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Refunds will only be considered if:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Payment was made but the diamonds were not delivered within
                    24 hours
                  </li>
                  <li>You contact us with valid proof of payment</li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-orange-300 flex items-center">
                  <AlertCircle className="h-6 w-6 mr-2" />
                  3. Incorrect Details
                </h2>
                <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg">
                  <p className="text-orange-300">
                    ⚠️ If the customer provides incorrect ML ID or Server ID,
                    and the top-up is completed, no refund will be issued.
                    Please double-check all details before submitting.
                  </p>
                </div>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  4. How to Request a Refund
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  Contact us with:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>UPI payment screenshot</li>
                  <li>Time and date of transaction</li>
                  <li>Game ID and Server ID</li>
                </ul>
                <div className="bg-blue-900/20 border border-blue-500/30 p-4 rounded-lg mt-4">
                  <p className="text-blue-300">
                    ⏰ We will review your request within 1–2 business days.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  5. Contact for Refunds
                </h2>
                <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 text-blue-300">
                      <Phone className="h-5 w-5" />
                      <span className="font-mono">+91 60093 91336</span>
                    </div>
                    <div className="flex items-center space-x-3 text-blue-300">
                      <Mail className="h-5 w-5" />
                      <span className="font-mono">
                        jeushsalrachmarak@gmail.com
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="border-t border-purple-500/30 pt-6">
                <div className="bg-gray-900/40 border border-gray-500/30 p-6 rounded-lg">
                  <h3 className="text-lg font-semibold text-yellow-300 mb-3 flex items-center">
                    <AlertCircle className="h-5 w-5 mr-2" />
                    Important Notice
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Digital products like Mobile Legends Diamonds cannot be
                    returned once delivered. Please ensure all information is
                    correct before completing your purchase. Our team is here to
                    help if you experience any delivery issues.
                  </p>
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

export default RefundPolicy;
