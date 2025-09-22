import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import {
  BarChart3,
  Building,
  CreditCard,
  Fuel,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MenuIcon,
  PhoneCall,
  Shield,
  Users,
  X
} from "lucide-react-native";
import { useState } from "react";
import tw from "twrnc";

import React from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "Digital Wallet",
    description:
      "Effortlessly manage your fuel expenses with our secure digital wallet. Instant payments, real-time balances, and transaction history at your fingertips.",
    icon: CreditCard,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "Station Management",
    description:
      "Streamline your operations with our comprehensive station management tools. Inventory tracking, staff management, and real-time analytics in one platform.",
    icon: Building,
    buttonText: "Become a Partner",
  },
  {
    id: 3,
    title: "Secure Transactions",
    description:
      "Your security is our priority. Multi-factor authentication, encrypted transactions, and 24/7 monitoring keep your data and funds safe.",
    icon: Shield,
    buttonText: "Learn More",
  },
  {
    id: 4,
    title: "Analytics Dashboard",
    description:
      "Make data-driven decisions with our powerful analytics dashboard. Track fuel consumption, station performance, and optimize your operations.",
    icon: BarChart3,
    buttonText: "View Dashboard",
  },
];

function CarouselReplacement() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      style={tw`w-full`}
    >
      {slides.map(({ id, title, description, icon: Icon, buttonText }) => (
        <View
          key={id}
          style={[
            tw`flex flex-col items-center justify-center p-6 rounded-2xl`,
            { width: width - 40, marginHorizontal: 20 }, // spacing between slides
          ]}
        >
          {/* Icon Container */}
          <View
            style={tw`w-24 h-24 rounded-2xl bg-blue-500 flex items-center justify-center mb-6`}
          >
            <Icon size={48} color="white" />
          </View>

          {/* Title */}
          <Text style={tw`text-2xl font-bold mb-3 text-center`}>{title}</Text>

          {/* Description */}
          <Text style={tw`text-lg text-gray-600 mb-6 text-center`}>
            {description}
          </Text>

          {/* Button */}
          <TouchableOpacity
            style={tw`bg-blue-600 px-6 py-3 rounded-xl`}
          // onPress={() => {}}
          >
            <Text style={tw`text-white text-lg font-bold`}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
}

const LandingPage = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState(false)
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    link?: string;
  }

  const features: { [key: string]: Feature[] } = {
    customer: [
      {
        icon: <CreditCard style={tw`w-8 h-8`} />,
        title: "Buy Fuel Coupons Easily",
        description: "Purchase digital fuel coupons instantly from your phone",
        link: "/buy-coupon",
      },
      {
        icon: <Users style={tw`w-8 h-8`} />,
        title: "Share & Assign to Drivers",
        description: "Easily delegate fuel usage to drivers and family members",
        link: "/sub-users",
      },
      {
        icon: <Fuel style={tw`w-8 h-8`} />,
        title: "Track Usage & Set Limits",
        description: "Monitor fuel consumption and set usage restrictions",
        link: "/history",
      },
      {
        icon: <MapPin style={tw`w-8 h-8`} />,
        title: "Get Nearby Fuel Stations",
        description: "Locate the nearest fuel stations with real-time prices",
        link: "/station-finder",
      },
    ],
    station: [
      {
        icon: <Shield style={tw`w-8 h-8`} />,
        title: "Verify Redemptions Securely",
        description: "Instant verification of digital coupons",
        link: "/scan-coupon",
      },
      {
        icon: <Users style={tw`w-8 h-8`} />,
        title: "Manage Staff Access",
        description: "Control who can redeem and manage coupons",
        link: "/station-staff",
      },
      {
        icon: <Fuel style={tw`w-8 h-8`} />,
        title: "Set Fuel Prices",
        description: "Update prices in real-time",
        link: "/fuel-pricing",
      },
      {
        icon: <Building style={tw`w-8 h-8`} />,
        title: "View Redemption Logs",
        description: "Track all coupon redemptions",
        link: "/reports",
      },
    ],
  };

  return (
    <>
      <View

        style={tw`absolute w-full bg-[#FFFFFF]/95 backdrop-blur-sm z-50`}
      >
        <BlurView intensity={30} tint="dark" style={tw`w-full border-b-[0.2px] border-gray-300 px-4 flex flex-row justify-between items-center h-16`}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <LinearGradient
              colors={["#21C45D", "#EF7719"]} // from-purple-500 to-pink-500
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`w-8 h-8 rounded-lg bg-gradient-to-r from-blue-800 to-pink-500 flex items-center justify-center`}
            >
              <Fuel style={tw`w-5 h-5 text-white`} />
            </LinearGradient>
            <Text style={tw`font-bold text-lg`}>FuelCore</Text>
          </View>
          <TouchableOpacity style={tw`p-[15px] rounded-[10px]`} onPress={() => {
            setShowNav(!showNav)
          }}>
            {showNav ? <X size={16} /> : <MenuIcon size={20} />}
          </TouchableOpacity>
        </BlurView>
      </View>
      {/* NavBar */}
      <View style={tw`${showNav ? 'block' : 'hidden'} z-50 absolute top-[64px] left-0  w-full`}>
        <View style={tw`transition-all duration-300 flex flex-col p-6 w-full gap-[30px]`}>
          <Link
            href="/"
            style={tw`text-[#6B7280] hover:text-[#21C45D] transition-colors`}
          >
            Home
          </Link>
          <Link
            href="/features"
            style={tw`text-[#6B7280] hover:text-[#21C45D] transition-colors`}
          >
            Features
          </Link>
          <Link
            href="/about"
            style={tw`text-[#6B7280] hover:text-[#21C45D] transition-colors`}
          >
            About
          </Link>
          <Link
            href="/contact"
            style={tw`text-[#6B7280] hover:text-[#21C45D] transition-colors`}
          >
            Contact
          </Link>
          <View style={tw`flex flex-col w-full gap-[10px]`}>
            <Button size='sm' variant="outline" asChild textSize={'12px'} className='rounded-[15px]'>
              <Link href="/login">I'm a Customer</Link>
            </Button>
            <Button size='sm' variant="outline" asChild textSize={'12px'} className='rounded-[15px]'>
              <Link href="/login">I'm a Station</Link>
            </Button>
            <Button size='sm' variant="default" asChild textSize={'12px'} className='rounded-[15px]'>
              <Link href="/login">Login</Link>
            </Button>
          </View>
        </View>
      </View>
      <ScrollView contentContainerStyle={{ backgroundColor:'blue' }}>
        {/* Navbar */}

        {/* Hero Section */}
        <View style={tw`p-4 bg-white w-full items-center flex flex-col gap-[30px]`}>
          <View style={tw`rounded-[40px] bg-[#21C45D]/40 p-[10px] flex flex-row justify-center items-center gap-[5px]`}>
            <Text style={tw`text-[#21C45D]`}>Revolutionary Fuhhhel Platform</Text>
          </View>
        </View>

        {/* Features Section */}
        <View style={tw`py-16`}>
          <View style={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <Tabs defaultValue="customer" className="space-y-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="customer" className="text-center">
                  <View style={tw`flex flex-col items-center`}>
                    <Users style={tw`w-6 h-6 mb-2`} />
                    <Text>For Customers</Text>
                  </View>
                </TabsTrigger>
                <TabsTrigger value="station" className="text-center">
                  <View style={tw`flex flex-col items-center`}>
                    <Building style={tw`w-6 h-6 mb-2`} />
                    <Text>For Stations</Text>
                  </View>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="customer">
                <View
                  style={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
                >
                  {features.customer.map((feature, index) => (
                    <Card key={index}>
                      <CardContent style={tw`p-6`}>
                        <View style={tw`flex flex-col items-center gap-4`}>
                          <View
                            style={tw`w-12 h-12 rounded-full bg-gradient-fuel flex items-center justify-center`}
                          >
                            {feature.icon}
                          </View>
                          <View style={tw`text-center`}>
                            <Text style={tw`font-semibold`}>{feature.title}</Text>
                            <Text style={tw`text-[#6B7280]`}>
                              {feature.description}
                            </Text>
                            {feature.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                style={tw`mt-4`}
                              // onPress={() => router.push(feature.link)}
                              >
                                Learn More
                              </Button>
                            )}
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </TabsContent>

              <TabsContent value="station">
                <View
                  style={tw`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`}
                >
                  {features.station.map((feature, index) => (
                    <Card key={index}>
                      <CardContent style={tw`p-6`}>
                        <View style={tw`flex flex-col items-center gap-4`}>
                          <View
                            style={tw`w-12 h-12 rounded-full bg-gradient-fuel flex items-center justify-center`}
                          >
                            {feature.icon}
                          </View>
                          <View style={tw`text-center`}>
                            <Text style={tw`font-semibold`}>{feature.title}</Text>
                            <Text style={tw`text-[#6B7280]`}>
                              {feature.description}
                            </Text>
                            {feature.link && (
                              <Button
                                variant="outline"
                                size="sm"
                                style={tw`mt-4`}
                              // onPress={() => router.push(feature.link)}
                              >
                                Learn More
                              </Button>
                            )}
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </TabsContent>
            </Tabs>
          </View>
        </View>

        {/* Contact Section */}
        <View style={tw`bg-muted/50 py-16`}>
          <View style={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <View style={tw`grid grid-cols-1 md:grid-cols-2 gap-8`}>
              {/* Contact Form */}
              <View>
                <Text style={tw`text-2xl font-bold mb-4`}>Get in Touch</Text>
                <View style={tw`space-y-4`}>
                  <View>
                    <Label>Name</Label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      value={formData?.name}
                      onChangeText={(text) =>
                        setFormData((prev) => ({
                          ...prev,
                          name: text,
                        }))
                      }
                    />
                  </View>
                  <View>
                    <Label>Email</Label>
                    <Input
                      id="email"
                      placeholder="your@email.com"
                      value={formData?.email}
                      onChangeText={(text) =>
                        setFormData((prev) => ({
                          ...prev,
                          email: text,
                        }))
                      }
                    />
                  </View>
                  <View>
                    <Label>Message</Label>
                    <TextInput
                      style={tw`w-full rounded-md px-3 py-2 text-sm bg-gray-100 border border-gray-300`}
                      multiline={true}
                      numberOfLines={4}
                      placeholder="How can we help you?"
                      value={formData.message}
                      onChangeText={(text) =>
                        setFormData((prev) => ({
                          ...prev,
                          message: text,
                        }))
                      }
                    />
                  </View>
                  <Button style={tw`w-full`} onPress={handleSubmit}>
                    Send Message
                  </Button>
                </View>
              </View>

              {/* Contact Info */}
              <View>
                <Text style={tw`text-2xl font-bold mb-4`}>Contact Info</Text>
                <View style={tw`space-y-4`}>
                  <View style={tw`flex items-center gap-4`}>
                    <Mail style={tw`w-6 h-6`} />
                    <View>
                      <Text style={tw`font-medium`}>Email Us</Text>
                      <Text style={tw`text-[#6B7280]`}>
                        contact@fuelcore.com
                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex items-center gap-4`}>
                    <PhoneCall style={tw`w-6 h-6`} />
                    <View>
                      <Text style={tw`font-medium`}>Call Us</Text>
                      <Text style={tw`text-[#6B7280]`}>
                        +234 123 456 789
                      </Text>
                    </View>
                  </View>
                  <View style={tw`flex items-center gap-4`}>
                    <Instagram style={tw`w-6 h-6`} />
                    <View>
                      <Text style={tw`font-medium`}>Instagram</Text>
                      <Text style={tw`text-[#6B7280]`}>@fuelcore</Text>
                    </View>
                  </View>
                  <View style={tw`flex items-center gap-4`}>
                    <Linkedin style={tw`w-6 h-6`} />
                    <View>
                      <Text style={tw`font-medium`}>LinkedIn</Text>
                      <Text style={tw`text-[#6B7280]`}>fuelcore</Text>
                    </View>
                  </View>
                  <View style={tw`mt-6`}>
                    <Text style={tw`text-lg font-semibold mb-4`}>Follow Us</Text>
                    <View style={tw`flex gap-4`}>
                      <Link
                        href="https://instagram.com/fuelcore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Instagram style={tw`w-5 h-5`} />
                        </Button>
                      </Link>
                      <Link
                        href="https://linkedin.com/company/fuelcore"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="icon">
                          <Linkedin style={tw`w-5 h-5`} />
                        </Button>
                      </Link>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={tw`py-16`}>
          <View style={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center`}>
            <Text style={tw`text-2xl font-bold mb-4`}>About FuelCore</Text>
            <Text style={tw`text-lg text-[#6B7280]`}>
              FuelCore is a Nigerian-grown innovation redefining how people buy
              and redeem fuel. Whether you're managing a business fleet, a fuel
              station, or just your personal vehicle — we've built this for you.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <View style={tw`bg-gradient-fuel text-white py-12`}>
          <View style={tw`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`}>
            <View
              style={tw`flex flex-col md:flex-row justify-between items-center gap-8`}
            >
              <View style={tw`flex items-center gap-2`}>
                <View
                  style={tw`w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center`}
                >
                  <Fuel style={tw`w-5 h-5`} />
                </View>
                <Text>FuelCore</Text>
              </View>
              <View style={tw`flex gap-8`}>
                <Link href="/about" style={tw`hover:text-white/80`}>
                  About
                </Link>
                <Link href="/terms" style={tw`hover:text-white/80`}>
                  Terms
                </Link>
                <Link href="/privacy" style={tw`hover:text-white/80`}>
                  Privacy
                </Link>
                <Link href="/careers" style={tw`hover:text-white/80`}>
                  Careers
                </Link>
              </View>
              <View>
                <Button // onPress={() => window.open("/beta-test")}
                >
                  Beta Test Invite
                </Button>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default LandingPage;
