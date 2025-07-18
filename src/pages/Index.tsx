import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Gamepad2,
  Gem,
  Shield,
  Star,
  Users,
  MessageCircle,
  Instagram,
  Send,
  CheckCircle,
  Crown,
  Zap,
  Gift,
  Target,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";

// Diamond packages data organized by categories
const diamondPackages = {
  weeklyPass: [
    {
      value: "1weekly",
      label: "1× Weekly Pass",
      price: 130,
      originalPrice: 180,
      category: "Weekly Pass",
    },
    {
      value: "2weekly",
      label: "2× Weekly Pass",
      price: 260,
      originalPrice: 360,
      category: "Weekly Pass",
    },
    {
      value: "3weekly",
      label: "3× Weekly Pass",
      price: 390,
      originalPrice: 540,
      category: "Weekly Pass",
    },
    {
      value: "4weekly",
      label: "4× Weekly Pass",
      price: 520,
      originalPrice: 720,
      category: "Weekly Pass",
    },
    {
      value: "1weekly86",
      label: "1× Weekly Pass & 86💎",
      price: 230,
      originalPrice: 320,
      category: "Weekly Pass Combo",
    },
    {
      value: "1weekly172",
      label: "1× Weekly Pass & 172💎",
      price: 335,
      originalPrice: 460,
      category: "Weekly Pass Combo",
    },
    {
      value: "twilight",
      label: "Twilight Pass",
      price: 670,
      originalPrice: 850,
      category: "Special Pass",
    },
  ],
  smallPack: [
    {
      value: "5",
      label: "5💎",
      price: 11,
      originalPrice: 15,
      category: "Small Pack",
    },
    {
      value: "11",
      label: "11💎",
      price: 20,
      originalPrice: 28,
      category: "Small Pack",
    },
    {
      value: "14",
      label: "14💎",
      price: 28,
      originalPrice: 38,
      category: "Small Pack",
    },
    {
      value: "22",
      label: "22💎",
      price: 36,
      originalPrice: 48,
      category: "Small Pack",
    },
    {
      value: "42",
      label: "42💎",
      price: 72,
      originalPrice: 95,
      category: "Small Pack",
    },
    {
      value: "56",
      label: "56💎",
      price: 80,
      originalPrice: 105,
      category: "Small Pack",
    },
    {
      value: "70",
      label: "70💎",
      price: 115,
      originalPrice: 150,
      category: "Small Pack",
    },
    {
      value: "112",
      label: "112💎",
      price: 156,
      originalPrice: 205,
      category: "Small Pack",
    },
  ],
  bigPack: [
    {
      value: "86",
      label: "86💎",
      price: 110,
      originalPrice: 145,
      category: "Big Pack",
    },
    {
      value: "172",
      label: "172💎",
      price: 215,
      originalPrice: 285,
      category: "Big Pack",
    },
    {
      value: "257",
      label: "257💎",
      price: 310,
      originalPrice: 410,
      category: "Big Pack",
    },
    {
      value: "343",
      label: "343💎",
      price: 410,
      originalPrice: 540,
      category: "Big Pack",
    },
    {
      value: "429",
      label: "429💎",
      price: 500,
      originalPrice: 660,
      category: "Big Pack",
    },
    {
      value: "514",
      label: "514💎",
      price: 590,
      originalPrice: 780,
      category: "Big Pack",
    },
    {
      value: "600",
      label: "600💎",
      price: 690,
      originalPrice: 910,
      category: "Big Pack",
    },
    {
      value: "706",
      label: "706💎",
      price: 790,
      originalPrice: 1040,
      category: "Big Pack",
    },
    {
      value: "792",
      label: "792💎",
      price: 890,
      originalPrice: 1170,
      category: "Big Pack",
    },
    {
      value: "878",
      label: "878💎",
      price: 990,
      originalPrice: 1300,
      category: "Big Pack",
    },
    {
      value: "963",
      label: "963💎",
      price: 1080,
      originalPrice: 1420,
      category: "Big Pack",
    },
    {
      value: "1049",
      label: "1049💎",
      price: 1180,
      originalPrice: 1550,
      category: "Big Pack",
    },
    {
      value: "1135",
      label: "1135💎",
      price: 1280,
      originalPrice: 1680,
      category: "Big Pack",
    },
    {
      value: "1220",
      label: "1220💎",
      price: 1380,
      originalPrice: 1810,
      category: "Big Pack",
    },
    {
      value: "1412",
      label: "1412💎",
      price: 1570,
      originalPrice: 2060,
      category: "Big Pack",
    },
    {
      value: "2195",
      label: "2195💎",
      price: 2370,
      originalPrice: 3110,
      category: "Big Pack",
    },
  ],
  doubleBonus: [
    {
      value: "50+50",
      label: "50+50💎",
      price: 75,
      originalPrice: 100,
      category: "Double Bonus",
    },
    {
      value: "150+150",
      label: "150+150💎",
      price: 210,
      originalPrice: 280,
      category: "Double Bonus",
    },
    {
      value: "250+250",
      label: "250+250💎",
      price: 330,
      originalPrice: 440,
      category: "Double Bonus",
    },
    {
      value: "500+500",
      label: "500+500💎",
      price: 660,
      originalPrice: 880,
      category: "Double Bonus",
    },
  ],
};

// Flatten all packages for the select dropdown
const allPackages = [
  ...diamondPackages.weeklyPass,
  ...diamondPackages.smallPack,
  ...diamondPackages.bigPack,
  ...diamondPackages.doubleBonus,
];

// Featured packages for showcase
const featuredPackages = [
  {
    value: "172",
    diamonds: "172💎",
    price: 215,
    originalPrice: 285,
    discount: 25,
    popular: false,
    icon: Gem,
  },
  {
    value: "1weekly86",
    diamonds: "1× Weekly Pass & 86���",
    price: 230,
    originalPrice: 320,
    discount: 28,
    popular: true,
    icon: Crown,
  },
  {
    value: "500+500",
    diamonds: "500+500💎",
    price: 660,
    originalPrice: 880,
    discount: 25,
    popular: false,
    icon: Gift,
  },
];

// Payment methods
const paymentMethods = [
  {
    value: "upi",
    label: "UPI",
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV0iptGdLmPCItza50iyipqi7rYJ50JnICA3rBrfjbVzdRq-h80UjhSSHC&s=10",
  },
  {
    value: "gpay",
    label: "Google Pay",
    iconUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpN56bQo9N3G7xUe8TJq67SYLQJOPX1tw4xkUpDbp0_g5oi9l5rviUEQ0&s=10",
  },
];

// Testimonials data
const testimonials = [
  {
    name: "Arimra N sangma",
    rating: 5,
    comment:
      "Super fast delivery! Got my diamonds in 2 minutes. Best prices I've found online!",
    avatar: "👨‍💻",
  },
  {
    name: "Salakim B Marak",
    rating: 5,
    comment:
      "Amazing service! Saved 40% compared to in-game prices. Highly recommended!",
    avatar: "👩‍🎓",
  },
  {
    name: "Bidarik ch sangma",
    rating: 5,
    comment:
      "Instant delivery and great customer support. Will definitely buy again!",
    avatar: "🧑‍💼",
  },
];
// FAQ data
const faqs = [
  {
    question: "How long does it take to receive diamonds?",
    answer:
      "Diamonds are usually delivered within 5-10 minutes after successful payment. In rare cases, it may take up to 30 minutes.",
  },
  {
    question: "Is it safe to buy diamonds from here?",
    answer:
      "Yes, absolutely! We use secure payment gateways and have served 50,000+ satisfied customers. Your account information is never stored.",
  },
  {
    question: "What if I don't receive my diamonds?",
    answer:
      "In the unlikely event of non-delivery, we provide full refund within 24 hours. Contact our support team immediately.",
  },
  {
    question: "Can I get a refund?",
    answer:
      "Refunds are processed only in case of non-delivery or technical issues. Once diamonds are delivered, refunds cannot be processed.",
  },
  {
    question: "Do you offer customer support?",
    answer:
      "Yes! Our customer support is available 24/7 via WhatsApp and Instagram. We respond within minutes.",
  },
];

const Index = () => {
  const [selectedDiamonds, setSelectedDiamonds] = useState("");
  const [userId, setUserId] = useState("");
  const [serverId, setServerId] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("");
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [showAboutModal, setShowAboutModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showRefundModal, setShowRefundModal] = useState(false);
  const { toast } = useToast();

  // Calculate pricing based on selected diamonds
  const selectedPackage = allPackages.find(
    (pkg) => pkg.value === selectedDiamonds,
  );
  const totalPrice = selectedPackage?.price || 0;
  const originalPrice = selectedPackage?.originalPrice || 0;
  const discount = selectedPackage
    ? Math.round(((originalPrice - totalPrice) / originalPrice) * 100)
    : 0;

  const handleRecharge = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!userId || !serverId || !selectedDiamonds || !paymentMethod) {
      toast({
        title: "Missing Information",
        description: "Please fill all required fields before proceeding.",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    setProgress(0);

    // Simulate progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + 10;
      });
    }, 200);

    // Simulate API call
    setTimeout(() => {
      setProgress(100);
      setIsLoading(false);

      toast({
        title: "Order Successful! 🎉",
        description: `${selectedDiamonds} diamonds will be delivered to your account within 5-10 minutes.`,
      });

      // Reset form
      setUserId("");
      setServerId("");
      setSelectedDiamonds("");
      setPaymentMethod("");
      setProgress(0);
    }, 3000);
  };

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
                Salra Store
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#pricing"
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Pricing
              </a>
              <button
                onClick={() => setShowAboutModal(true)}
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                About Us
              </button>
              <a
                href="#contact"
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                Contact Us
              </a>
              <a
                href="#faq"
                className="text-white hover:text-purple-400 transition-colors font-medium"
              >
                FAQs
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <motion.nav
              className="md:hidden py-4 space-y-2"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
            >
              <a
                href="#home"
                className="block text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                Home
              </a>
              <a
                href="#pricing"
                className="block text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                Pricing
              </a>
              <button
                onClick={() => setShowAboutModal(true)}
                className="block text-white hover:text-purple-400 transition-colors font-medium py-2 text-left"
              >
                About Us
              </button>
              <a
                href="#contact"
                className="block text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                Contact Us
              </a>
              <a
                href="#faq"
                className="block text-white hover:text-purple-400 transition-colors font-medium py-2"
              >
                FAQs
              </a>
            </motion.nav>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                  Get Mobile Legends Diamonds
                </span>
                <br />
                <span className="text-white">at Discounted Prices!</span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-2xl mx-auto px-4">
                Save up to 40% on your diamond purchases. Fast, secure, and
                reliable delivery within minutes!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover:shadow-purple-500/25 transition-all"
                  onClick={() =>
                    document
                      .getElementById("recharge-form")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <Zap className="mr-2 h-5 w-5" />
                  Start Recharge
                </Button>

                <div className="flex items-center space-x-6 text-sm text-gray-400">
                  <div className="flex items-center">
                    <Shield className="mr-1 h-4 w-4 text-green-400" />
                    100% Safe
                  </div>
                  <div className="flex items-center">
                    <Target className="mr-1 h-4 w-4 text-purple-400" />
                    Instant Delivery
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recharge Form */}
      <section id="recharge-form" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto"
          >
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl font-bold text-white flex items-center justify-center gap-2">
                  <Gem className="h-6 w-6 text-purple-400" />
                  Diamond Recharge Form
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <form onSubmit={handleRecharge}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label
                        htmlFor="userId"
                        className="text-white font-medium"
                      >
                        Mobile Legends User ID *
                      </Label>
                      <Input
                        id="userId"
                        type="text"
                        placeholder="Enter your User ID"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label
                        htmlFor="serverId"
                        className="text-white font-medium"
                      >
                        Server ID *
                      </Label>
                      <Input
                        id="serverId"
                        type="text"
                        placeholder="Enter Server ID"
                        value={serverId}
                        onChange={(e) => setServerId(e.target.value)}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="diamonds"
                      className="text-white font-medium"
                    >
                      Select Diamond Package *
                    </Label>
                    <Select
                      value={selectedDiamonds}
                      onValueChange={setSelectedDiamonds}
                      required
                    >
                      <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
                        <SelectValue placeholder="Choose diamond amount" />
                      </SelectTrigger>
                      <SelectContent className="bg-gray-900 border-purple-500/30 max-h-96">
                        {Object.entries(diamondPackages).map(
                          ([categoryKey, packages]) => (
                            <div key={categoryKey}>
                              <div className="px-2 py-1.5 text-xs font-semibold text-purple-300 uppercase tracking-wide">
                                {categoryKey === "weeklyPass"
                                  ? "Weekly & Special Passes"
                                  : categoryKey === "smallPack"
                                    ? "Small Packs"
                                    : categoryKey === "bigPack"
                                      ? "Big Packs"
                                      : "Double Bonus Packs"}
                              </div>
                              {packages.map((pkg) => (
                                <SelectItem
                                  key={pkg.value}
                                  value={pkg.value}
                                  className="text-white focus:bg-purple-500/20 pl-4"
                                >
                                  {pkg.label} - ₹{pkg.price}
                                </SelectItem>
                              ))}
                            </div>
                          ),
                        )}
                      </SelectContent>
                    </Select>
                  </div>

                  {selectedPackage && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-4 rounded-lg border border-purple-500/30"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-white font-medium">
                          Total Price:
                        </span>
                        <div className="text-right">
                          <span className="text-2xl font-bold text-white">
                            ₹{totalPrice}
                          </span>
                          <div className="text-sm">
                            <span className="text-gray-400 line-through">
                              ₹{originalPrice}
                            </span>
                            <span className="text-green-400 ml-2 font-medium">
                              {discount}% OFF
                            </span>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="payment" className="text-white font-medium">
                      Payment Method *
                    </Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {paymentMethods.map((method) => (
                        <Button
                          key={method.value}
                          type="button"
                          variant={
                            paymentMethod === method.value
                              ? "default"
                              : "outline"
                          }
                          className={`h-12 text-sm sm:text-base ${
                            paymentMethod === method.value
                              ? "bg-purple-600 hover:bg-purple-700 border-purple-500"
                              : "bg-white/10 hover:bg-white/20 border-purple-500/30 text-white"
                          }`}
                          onClick={() => {
                            setPaymentMethod(method.value);
                            setSelectedPaymentMethod(method.value);
                            setShowPaymentModal(true);
                          }}
                        >
                          <img
                            src={method.iconUrl}
                            alt={method.label}
                            className="w-5 h-5 mr-2 object-contain"
                          />
                          {method.label}
                        </Button>
                      ))}
                    </div>
                  </div>

                  <div className="h-4"></div>

                  {isLoading && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between text-sm text-gray-300">
                        <span>Processing Payment...</span>
                        <span>{progress}%</span>
                      </div>
                      <Progress value={progress} className="bg-gray-700" />
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    disabled={
                      isLoading ||
                      !userId ||
                      !serverId ||
                      !selectedDiamonds ||
                      !paymentMethod
                    }
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-purple-500/25 transition-all disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-5 w-5" />
                        Complete Purchase
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Payment Modal */}
      <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-md">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold text-center">
              {selectedPaymentMethod === "gpay"
                ? "Google Pay Payment"
                : "UPI Payment"}
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <div className="text-center">
              <p className="text-gray-300 mb-4">
                {selectedPaymentMethod === "gpay"
                  ? "Complete your payment using Google Pay"
                  : "Send payment to the UPI ID below"}
              </p>

              <div className="bg-black/40 p-4 rounded-lg border border-purple-500/30">
                <p className="text-sm text-gray-400 mb-2">UPI ID:</p>
                <p className="text-lg font-mono text-purple-300 break-all">
                  jeushsalrachmarak@oksbi
                </p>
              </div>
            </div>

            {selectedPaymentMethod === "gpay" && (
              <Button
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                onClick={() => {
                  window.open(
                    `upi://pay?pa=jeushsalrachmarak@oksbi&pn=Salra Store&am=${totalPrice}&cu=INR`,
                    "_blank",
                  );
                }}
              >
                <span className="mr-2">📱</span>
                Open Google Pay
              </Button>
            )}

            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full bg-white/10 border-purple-500/30 text-white hover:bg-white/20"
                onClick={() => {
                  navigator.clipboard.writeText("jeushsalrachmarak@oksbi");
                  toast({
                    title: "UPI ID Copied!",
                    description: "UPI ID has been copied to clipboard",
                  });
                }}
              >
                📋 Copy UPI ID
              </Button>

              <Button
                variant="outline"
                className="w-full bg-white/10 border-purple-500/30 text-white hover:bg-white/20"
                onClick={() => setShowPaymentModal(false)}
              >
                Close
              </Button>
            </div>

            <div className="text-center">
              <p className="text-sm text-gray-400">
                Amount to pay:{" "}
                <span className="text-white font-semibold">₹{totalPrice}</span>
              </p>
              <p className="text-xs text-gray-500 mt-2">
                After payment, diamonds will be delivered within 5-10 minutes
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* About Us Modal */}
      <Dialog open={showAboutModal} onOpenChange={setShowAboutModal}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-4">
              About Us
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <div className="text-center">
              <p className="text-gray-300 leading-relaxed mb-6">
                Welcome to Salra Store—the premier destination for Mobile
                Legends diamond top-ups. Born from our shared passion for gaming
                and technology, we've built a platform that delivers
                lightning-fast transactions, rock-solid reliability, and truly
                personal support.
              </p>
            </div>

            <div className="border-t border-purple-500/30 pt-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                👨‍💻 About the Developer
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Mikasal B. Marak is the creative force who brought Salra Store
                to life. A lifelong gamer himself, Mikasal channels the same
                drive that powers his top-ranked Mobile Legends matches into
                crafting seamless, user-friendly experiences. He specializes in
                a wide array of modern technologies—React, TypeScript,
                JavaScript, Python, HTML, CSS, Tailwind CSS, and more—ensuring
                every line of code is clean, efficient, and future-proof. When
                he's not optimizing your top-up journey, you'll find him diving
                into the latest game releases, mastering new challenges, and
                sharing pro tips with the community.
              </p>
            </div>

            <div className="border-t border-purple-500/30 pt-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                🧑‍💼 About the Owner
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Jeush Salra Ch. Marak is the visionary entrepreneur behind Salra
                Store. An avid gamer who's spent countless hours battling on the
                MLBB battlefield, Jeush knows exactly what players need: speed,
                affordability, and unwavering trust. From forging key
                partnerships to overseeing every order, he goes the extra mile
                to make sure your diamonds arrive swiftly and safely. Outside of
                steering Salra Store's growth, Jeush can often be spotted
                perfecting his clutch plays and exploring fresh strategies in
                his favorite Mobile Legends modes.
              </p>
            </div>

            <div className="border-t border-purple-500/30 pt-6">
              <h3 className="text-2xl font-semibold text-purple-300 mb-4 flex items-center">
                🎯 Our Motive
              </h3>
              <p className="text-gray-300 leading-relaxed mb-4">
                Our mission is simple yet powerful:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  <strong>Fuel your victories.</strong> Keep you in the game
                  with affordable diamond top-ups delivered in minutes.
                </li>
                <li>
                  <strong>Simplify every step.</strong> UPI and Google Pay
                  only—no hassle, no hidden fees.
                </li>
                <li>
                  <strong>Stand by your side.</strong> Real-time support via
                  WhatsApp and Instagram, with answers from gamers who
                  understand your needs.
                </li>
                <li>
                  <strong>Grow together.</strong> Build a vibrant community
                  where players lift each other up, share insights, and
                  celebrate wins.
                </li>
              </ul>
            </div>

            <div className="border-t border-purple-500/30 pt-6">
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-purple-300 mb-3">
                  Contact Information
                </h4>
                <div className="space-y-2">
                  <p className="text-gray-300">
                    <strong>Owner:</strong> Jeush Salra Ch. Marak
                  </p>
                  <p className="text-gray-300">
                    <strong>Developer:</strong> Mikasal B Marak
                  </p>
                  <p className="text-gray-300">
                    <strong>Contact:</strong> +91 60093 91336
                  </p>
                  <p className="text-gray-300">
                    <strong>Email:</strong> jeushsalrachmarak@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Terms of Service Modal */}
      <Dialog open={showTermsModal} onOpenChange={setShowTermsModal}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-4">
              📋 Terms of Service
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <p className="text-gray-300 text-center">
              Welcome to our Mobile Legends Top-Up website. By using this
              website, you agree to be bound by the following Terms of Service.
              Please read them carefully before making any purchase.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                1. General
              </h3>
              <p className="text-gray-300">
                This website is owned and operated by Jeush Salra Ch. Marak, and
                developed by Mikasal B Marak. The services provided here are for
                topping up Mobile Legends diamonds for valid MLBB player
                accounts.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                2. Eligibility
              </h3>
              <p className="text-gray-300 mb-3">
                To use our services, you must:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  Provide accurate and complete Mobile Legends ID and server ID.
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                3. Pricing & Payment
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>All prices are in INR and subject to change.</li>
                <li>
                  Payment must be made in full via Google Pay or UPI to the UPI
                  ID:{" "}
                  <span className="font-mono bg-purple-900/30 px-2 py-1 rounded">
                    jeushsalrachmarak@oksbi
                  </span>
                  .
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                4. Delivery
              </h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  Diamond top-ups are usually delivered within 5–30 minutes, but
                  in rare cases, it may take up to 24 hours.
                </li>
                <li>
                  Please ensure you enter the correct game ID and server ID. We
                  are not responsible for incorrect entries.
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                5. Prohibited Uses
              </h3>
              <p className="text-gray-300 mb-3">
                You agree not to misuse this website for:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Fraudulent purchases</li>
                <li>Reverse engineering or hacking</li>
                <li>Harassment or illegal activities</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                6. Termination
              </h3>
              <p className="text-gray-300">
                We reserve the right to refuse service or terminate accounts if
                abuse or suspicious activity is detected.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                7. Contact
              </h3>
              <p className="text-gray-300 mb-3">
                For any support or inquiries, please contact:
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-blue-300">📞 +91 60093 91336</p>
                  <p className="text-blue-300">
                    📧 jeushsalrachmarak@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Privacy Policy Modal */}
      <Dialog open={showPrivacyModal} onOpenChange={setShowPrivacyModal}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-4">
              🔒 Privacy Policy
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <p className="text-gray-300 text-center">
              We value your privacy. This policy explains what data we collect,
              how we use it, and how it's protected.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                1. Information We Collect
              </h3>
              <p className="text-gray-300 mb-3">We collect:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>Your name, email, and contact number (for support)</li>
                <li>
                  Your Mobile Legends ID and Server ID (for top-up processing)
                </li>
                <li>Payment confirmation details (for order tracking)</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                2. How We Use Your Information
              </h3>
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                3. Cookies & Tracking
              </h3>
              <p className="text-gray-300">
                We may use basic analytics (like page views or visit duration),
                but no personal data is tracked without your knowledge.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                4. Data Security
              </h3>
              <p className="text-gray-300">
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                5. Your Rights
              </h3>
              <p className="text-gray-300 mb-3">
                You may request deletion of your stored data at any time by
                contacting:
              </p>
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                <p className="text-blue-300">📧 jeushsalrachmarak@gmail.com</p>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Refund Policy Modal */}
      <Dialog open={showRefundModal} onOpenChange={setShowRefundModal}>
        <DialogContent className="bg-gray-900 border-purple-500/30 text-white max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold text-center mb-4">
              💸 Refund Policy
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 p-4">
            <p className="text-gray-300 text-center">
              As we sell digital products (Mobile Legends Diamonds), our refund
              policy is as follows:
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-red-300">
                1. Non-Refundable
              </h3>
              <div className="bg-red-900/20 border border-red-500/30 p-4 rounded-lg">
                <p className="text-red-300 font-medium">
                  ⚠️ Once a top-up is successfully processed and diamonds are
                  delivered, the purchase is non-refundable.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-green-300">
                2. Refund Eligibility
              </h3>
              <p className="text-gray-300 mb-3">
                Refunds will only be considered if:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300 ml-4">
                <li>
                  Payment was made but the diamonds were not delivered within 24
                  hours
                </li>
                <li>You contact us with valid proof of payment</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-orange-300">
                3. Incorrect Details
              </h3>
              <div className="bg-orange-900/20 border border-orange-500/30 p-4 rounded-lg">
                <p className="text-orange-300">
                  ⚠️ If the customer provides incorrect ML ID or Server ID, and
                  the top-up is completed, no refund will be issued. Please
                  double-check all details before submitting.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                4. How to Request a Refund
              </h3>
              <p className="text-gray-300 mb-3">Contact us with:</p>
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

            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-purple-300">
                5. Contact for Refunds
              </h3>
              <div className="bg-purple-900/20 border border-purple-500/30 p-4 rounded-lg">
                <div className="space-y-2">
                  <p className="text-blue-300">📞 +91 60093 91336</p>
                  <p className="text-blue-300">
                    📧 jeushsalrachmarak@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-900/40 border border-gray-500/30 p-6 rounded-lg">
              <h4 className="text-lg font-semibold text-yellow-300 mb-3">
                ⚠️ Important Notice
              </h4>
              <p className="text-gray-300 text-sm">
                Digital products like Mobile Legends Diamonds cannot be returned
                once delivered. Please ensure all information is correct before
                completing your purchase. Our team is here to help if you
                experience any delivery issues.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>

      {/* Pricing Showcase */}
      <section id="pricing" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Diamond Packages
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Choose from our most popular diamond packages and save big!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {featuredPackages.map((pkg, index) => (
              <motion.div
                key={pkg.diamonds}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}

                <Card
                  className={`relative overflow-hidden ${
                    pkg.popular
                      ? "bg-gradient-to-br from-purple-600/30 to-blue-600/30 border-yellow-400/50"
                      : "bg-black/40 border-purple-500/30"
                  } backdrop-blur-md hover:shadow-2xl transition-all duration-300`}
                >
                  <CardHeader className="text-center pb-2">
                    <div
                      className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        pkg.popular
                          ? "bg-gradient-to-r from-yellow-400 to-orange-400"
                          : "bg-gradient-to-r from-purple-500 to-blue-500"
                      }`}
                    >
                      <pkg.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl font-bold text-white">
                      {pkg.diamonds} Diamonds
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-white">
                        ₹{pkg.price}
                      </span>
                      <div className="text-sm mt-1">
                        <span className="text-gray-400 line-through">
                          ₹{pkg.originalPrice}
                        </span>
                        <span className="text-green-400 ml-2 font-medium">
                          {pkg.discount}% OFF
                        </span>
                      </div>
                    </div>

                    <Button
                      className={`w-full ${
                        pkg.popular
                          ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-black font-bold"
                          : "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                      } transition-all duration-300`}
                      onClick={() => {
                        setSelectedDiamonds(pkg.value);
                        document
                          .getElementById("recharge-form")
                          ?.scrollIntoView({ behavior: "smooth" });
                      }}
                    >
                      Choose Package
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Customers Say
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Join thousands of satisfied Mobile Legends players who trust us!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <span className="text-3xl mr-3">
                        {testimonial.avatar}
                      </span>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <div className="flex">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="h-4 w-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300 italic">
                      "{testimonial.comment}"
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Got questions? We've got answers!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq, index) => (
                    <AccordionItem
                      key={index}
                      value={`item-${index}`}
                      className="border-purple-500/30"
                    >
                      <AccordionTrigger className="text-white hover:text-purple-400 text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-300">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Get In{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Touch
              </span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Need help? Our customer support team is available 24/7!
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      if (
                        !contactForm.name ||
                        !contactForm.email ||
                        !contactForm.message
                      ) {
                        toast({
                          title: "Missing Information",
                          description: "Please fill all fields before sending.",
                          variant: "destructive",
                        });
                        return;
                      }

                      const subject = `New website enquiry from ${contactForm.name}`;
                      const body = `Name: ${contactForm.name}\nEmail: ${contactForm.email}\n\nMessage:\n${contactForm.message}`;
                      const mailtoLink = `mailto:jeushsalrachmarak@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                      window.location.href = mailtoLink;

                      toast({
                        title: "Opening Email Client",
                        description:
                          "Your default email client will open with the message.",
                      });

                      // Reset form
                      setContactForm({ name: "", email: "", message: "" });
                    }}
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-white">
                          Name
                        </Label>
                        <Input
                          id="name"
                          placeholder="Your name"
                          value={contactForm.name}
                          onChange={(e) =>
                            setContactForm((prev) => ({
                              ...prev,
                              name: e.target.value,
                            }))
                          }
                          className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-white">
                          Email
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Your email"
                          value={contactForm.email}
                          onChange={(e) =>
                            setContactForm((prev) => ({
                              ...prev,
                              email: e.target.value,
                            }))
                          }
                          className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-white">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        placeholder="How can we help you?"
                        value={contactForm.message}
                        onChange={(e) =>
                          setContactForm((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }))
                        }
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-gray-400 focus:border-purple-400"
                        rows={4}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white"
                    >
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </motion.div>

            {/* Contact Info & Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardHeader>
                  <CardTitle className="text-white text-xl">
                    Quick Support
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-300">
                    Get instant support through our social media channels. We're
                    always ready to help!
                  </p>

                  <div className="space-y-3">
                    <Button
                      variant="outline"
                      className="w-full justify-start bg-green-600 hover:bg-green-700 border-green-500 text-white"
                      onClick={() =>
                        window.open("https://wa.me/916009391336", "_blank")
                      }
                    >
                      <MessageCircle className="mr-3 h-5 w-5" />
                      WhatsApp Support
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Button>

                    <Button
                      variant="outline"
                      className="w-full justify-start bg-pink-600 hover:bg-pink-700 border-pink-500 text-white"
                      onClick={() =>
                        window.open(
                          "https://instagram.com/jeush_salra",
                          "_blank",
                        )
                      }
                    >
                      <Instagram className="mr-3 h-5 w-5" />
                      Instagram
                      <ExternalLink className="ml-auto h-4 w-4" />
                    </Button>
                  </div>

                  <div className="pt-4 border-t border-purple-500/30">
                    <p className="text-sm text-gray-400 text-center">
                      Response time: Within 5 minutes
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-black/40 border-purple-500/30 backdrop-blur-md">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-white font-semibold mb-2">
                      Why Choose Us?
                    </h3>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="text-center">
                        <div className="text-2xl mb-1">⚡</div>
                        <div className="text-gray-300">Instant Delivery</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-1">🔒</div>
                        <div className="text-gray-300">100% Safe</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl mb-1">💰</div>
                        <div className="text-gray-300">Best Prices</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-purple-500/30 py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-2 rounded-lg">
                <Gamepad2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Salra Store
              </span>
            </div>

            <p className="text-gray-400 mb-4">
              Your trusted partner for Mobile Legends diamond recharge. Fast,
              safe, and affordable.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mb-4">
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowPrivacyModal(true)}
              >
                Privacy Policy
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowTermsModal(true)}
              >
                Terms of Service
              </Button>
              <Button
                variant="ghost"
                size="sm"
                className="text-gray-400 hover:text-white transition-colors"
                onClick={() => setShowRefundModal(true)}
              >
                Refund Policy
              </Button>
            </div>

            <p className="text-sm text-gray-500">
              © 2024 Salra Store. All rights reserved. | Not affiliated with
              Moonton or Mobile Legends.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
