import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Gamepad2, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TermsOfService = () => {
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
                📋 Terms of Service
              </CardTitle>
              <p className="text-gray-300">
                Welcome to our Mobile Legends Top-Up website. By using this
                website, you agree to be bound by the following Terms of
                Service. Please read them carefully before making any purchase.
              </p>
            </CardHeader>

            <CardContent className="space-y-8 text-white">
              {/* Section 1 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  1. General
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  This website is owned and operated by Jeush Salra Ch. Marak,
                  and developed by Mikasal B Marak. The services provided here
                  are for topping up Mobile Legends diamonds for valid MLBB
                  player accounts.
                </p>
              </div>

              {/* Section 2 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  2. Eligibility
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  To use our services, you must:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Provide accurate and complete Mobile Legends ID and server
                    ID.
                  </li>
                  <li>
                    Be authorized to make payments using the payment methods you
                    provide.
                  </li>
                  <li>
                    Agree that this is a digital product and delivery will be
                    online.
                  </li>
                </ul>
              </div>

              {/* Section 3 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  3. Pricing & Payment
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>All prices are in INR and subject to change.</li>
                  <li>
                    Payment must be made in full via Google Pay or UPI to the
                    UPI ID:{" "}
                    <span className="font-mono bg-purple-900/30 px-2 py-1 rounded">
                      jeushsalrachmarak@oksbi
                    </span>
                    .
                  </li>
                </ul>
              </div>

              {/* Section 4 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  4. Delivery
                </h2>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>
                    Diamond top-ups are usually delivered within 5–30 minutes,
                    but in rare cases, it may take up to 24 hours.
                  </li>
                  <li>
                    Please ensure you enter the correct game ID and server ID.
                    We are not responsible for incorrect entries.
                  </li>
                </ul>
              </div>

              {/* Section 5 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  5. Prohibited Uses
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  You agree not to misuse this website for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                  <li>Fraudulent purchases</li>
                  <li>Reverse engineering or hacking</li>
                  <li>Harassment or illegal activities</li>
                </ul>
              </div>

              {/* Section 6 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  6. Termination
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  We reserve the right to refuse service or terminate accounts
                  if abuse or suspicious activity is detected.
                </p>
              </div>

              {/* Section 7 */}
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-purple-300">
                  7. Contact
                </h2>
                <p className="text-gray-300 leading-relaxed mb-3">
                  For any support or inquiries, please contact:
                </p>
                <div className="space-y-2">
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

export default TermsOfService;
