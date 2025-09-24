import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BlurView } from "expo-blur";
import { LinearGradient } from "expo-linear-gradient";
import { Link, useRouter } from "expo-router";
import {
  ArrowRight,
  BarChart3,
  Building,
  CreditCard,
  Fuel,
  Globe,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MenuIcon,
  PhoneCall,
  QrCode,
  RocketIcon,
  Shield,
  Users,
  X,
  Zap
} from "lucide-react-native";
import { useState } from "react";
import tw from "twrnc";

import React, { useEffect } from "react";
import {
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
  View
} from "react-native";

const { width } = Dimensions.get("window");

const slides = [
  {
    id: 1,
    title: "Customer Wallet",
    sub: 'wallet-page',
    description:
      "Manage your fuel coupons",
    icon: <CreditCard color='#21C45D' size={55} />,
    buttonText: "Get Started",
  },
  {
    id: 2,
    title: "QR Redemption",
    sub: 'qr-screen',
    description:
      "Quick fuel redemption",
    icon: <QrCode color='#21C45D' size={55} />,
    buttonText: "Become a Partner",
  },
  {
    id: 3,
    title: "Station Dashboard",
    sub: 'station-dash',
    description:
      "Monitor queue and operations",
    icon: <BarChart3 color='#21C45D' size={55} />,
    buttonText: "Learn More",
  },
  {
    id: 4,
    title: "Station Finder",
    sub: 'maps-finder',
    description:
      "Find Stations with Google Maps",
    icon: <MapPin color='#21C45D' size={55} />,
    buttonText: "View Dashboard",
  },
];

function CarouselReplacement() {
  return (
    <ScrollView
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20,
      }}
    >
      {slides.map(({ id, title, sub, description, icon, buttonText }) => (
        <Card className="w-[300px] mt-4" key={id}>
          <CardContent style={tw`w-full px-4 py-6 flex flex-col gap-[25px]`}>
            <LinearGradient
              colors={["#EAF9EE", "#FDF2E9"]} // from-purple-500 to-pink-500
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`w-full h-[160px] rounded-[20px] bg-gradient-to-r from-blue-800 to-pink-500 flex items-center justify-center gap-[10px]`}
            >
              {icon}
              <Text style={tw`text-[16px] font-medium`}>{sub}</Text>
            </LinearGradient>
            <View style={tw`flex flex-col gap-[10px]`}>
              <Text style={tw`font-bold text-[18px]`}>{title}</Text>
              <Text style={tw`text-[#6B7280] text-[16px]`}>{description}</Text>
            </View>
          </CardContent>
        </Card>
      ))}
    </ScrollView>
  );
}

const LandingPage = () => {
  const router = useRouter();
  const [showNav, setShowNav] = useState<boolean>(false)
  const [activeSection, setActiveSection] = useState("home");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    setShowNav(false)
  }, [])

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
        icon: <CreditCard style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Buy & Share Fuel",
        description: "Purchase coupons and assign to drivers",
      },
      {
        icon: <Users style={tw`w-8 h-8`} color='#21C45D' />,
        title: "View & Assign Coupons",
        description: "Manage family and driver access",
      },
      {
        icon: <QrCode style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Redeem via QR/Code",
        description: "Instant fuel redemption",
      },
      {
        icon: <MapPin style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Find Stations with Queue Data",
        description: "Real-time station information",
      },
    ],
    station: [
      {
        icon: <Fuel style={tw`w-8 h-8`} color='#F97415' />,
        title: "Configure Pricing & Fuel Types",
        description: "Real-time price management",
      },
      {
        icon: <Users style={tw`w-8 h-8`} color='#F97415' />,
        title: "Staff Management",
        description: "Control access and permissions",
      },
      {
        icon: <QrCode style={tw`w-8 h-8`} color='#F97415' />,
        title: "Scan & Redeem Coupons",
        description: "Secure verification system",
      },
      {
        icon: <Building style={tw`w-8 h-8`} color='#F97415' />,
        title: "Monitor Queue & Availability",
        description: "Live operational insights",
      },
    ],

    technology: [
      {
        icon: <Shield style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Mobile & Desktop",
        description: "Cross-platform compatibility",
      },
      {
        icon: <Zap style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Real-time Sync",
        description: "Instant updates across devices",
      },
      {
        icon: <Shield style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Secure PIN/Biometric",
        description: "Bank-level security",
      },
      {
        icon: <Globe style={tw`w-8 h-8`} color='#21C45D' />,
        title: "Location-based Recommendations",
        description: "Smart station suggestions",
      },
    ],
  };

  return (
    <>
      <View
        style={tw`absolute w-full bg-white backdrop-blur-sm z-50`}
      >
        <BlurView intensity={0} tint="dark" style={tw`w-full border-b-[0.2px] border-gray-300 px-4 flex flex-row justify-between items-center h-16`}>
          <View style={tw`flex flex-row items-center gap-2`}>
            <LinearGradient
              colors={["#21C45D", "#EF7719"]} // from-purple-500 to-pink-500
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={tw`w-8 h-8 rounded-lg flex items-center justify-center`}
            >
              <Fuel style={tw`w-5 h-5 text-white`} />
            </LinearGradient>
            <Text style={tw`font-bold text-lg`}>FuelCore</Text>
          </View>
          <TouchableOpacity style={tw`p-[8px] ${showNav ? 'bg-[#F5F5F5]' : ''}  rounded-[10px]`} onPress={() => {
            setShowNav(!showNav)
          }}>
            {showNav ? <X size={16} /> : <MenuIcon size={18} />}
          </TouchableOpacity>
        </BlurView>
      </View>
      {/* NavBar */}
      <View style={tw`${showNav ? 'block' : 'hidden'} bg-white z-20 absolute top-[64px] left-0 pb-[20px] w-full`}>
        <View style={tw`transition-all border-b-[0.2px] border-gray-300 duration-300 flex flex-col p-6 w-full gap-[30px]`}>
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
              <Link href="/customer-signup">I'm a Customer</Link>
            </Button>
            <Button size='sm' variant="outline" asChild textSize={'12px'} className='rounded-[15px]'>
              <Link href="/station">I'm a Station</Link>
            </Button>
            <Button size='sm' variant="default" asChild textSize={'12px'} className='rounded-[15px]'>
              <Link href="/login">Login</Link>
            </Button>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={{ backgroundColor: 'white', marginTop: 60 }}>

        {/* Hero Section */}
        <View style={tw`p-4 pb-12 w-full items-center flex flex-col gap-[30px]`}>
          <View style={tw`rounded-[40px] bg-[#21C45D]/10 border-[0.4px] border-[#21C45D]/50 px-[20px] py-[10px] flex flex-row justify-center items-center gap-[5px]`}>
            <RocketIcon size={15} color='blue' />
            <Text style={tw`text-[#21C45D] text-[12px] font-[600]`}>Revolutionary Fuel Platform</Text>
          </View>
          <Text style={tw`text-[30px] text-center font-bold`}>Track. Share. Fuel Smarter.</Text>
          <Text style={tw`text-[#6B7280] text-center leading-[30px] text-[18px]`}>
            Buy fuel coupons, assign to drivers, reddem via QR, and find stations with live queues.
          </Text>
          <View style={tw`w-full flex flex-col gap-[15px]`}>
            <Link href="/customer-signup" asChild>
              <TouchableOpacity>
                <View style={tw`w-full h-10 px-3 py-2 flex bg-[#21C45D] rounded-[15px] flex-row gap-[15px] justify-center items-center`}>
                  <Text style={tw`text-white font-medium`}>
                    Get Started - Customer
                  </Text>
                  <ArrowRight size={15} color='white' />
                </View>
              </TouchableOpacity>
            </Link>
            <Button size='sm' variant="outline" asChild textSize={'14px'} className='rounded-[15px]'>
              <Link href="/station">Get Started - Station</Link>
            </Button>
          </View>
        </View>

        {/* Features Section */}
        <View style={tw`py-14 bg-[#FBFBFC]`}>
          <View style={tw`w-full px-4 flex flex-col gap-[25px]`}>
            <Text style={tw`text-[30px] text-center font-bold`}>Comprehensive Solution</Text>
            <Text style={tw`text-[#6B7280] text-center leading-[30px] text-[16px]`}>
              FuelCore provides everything needed for modern fuel management
            </Text>
            <Tabs defaultValue="customer" className="pt-4">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="customer" className="text-center">
                  Customers
                </TabsTrigger>
                <TabsTrigger value="station" className="text-center">
                  Stations
                </TabsTrigger>
                <TabsTrigger value="technology" className="text-center">
                  Technology
                </TabsTrigger>
              </TabsList>

              <TabsContent value="customer">
                <View
                  style={tw`grid grid-cols-1 mt-4 gap-[20px] md:grid-cols-2`}
                >
                  {features.customer.map((feature, index) => (
                    <Card key={index}>
                      <CardContent style={tw`p-4`}>
                        <View style={tw`w-full flex flex-row items-center gap-[10px]`}>
                          <View
                            style={tw`w-10 h-10 rounded-[15px] bg-[#21C45D]/10 flex items-center justify-center`}
                          >
                            {feature.icon}
                          </View>
                          <View style={tw`text-center flex flex-col gap-[5px]`}>
                            <Text style={tw`font-semibold`}>{feature.title}</Text>
                            <Text style={tw`text-[#6B7280]`}>
                              {feature.description}
                            </Text>
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </TabsContent>

              <TabsContent value="station">
                <View
                  style={tw`grid grid-cols-1 mt-4 gap-[20px] md:grid-cols-2`}
                >
                  {features.station.map((feature, index) => (
                    <Card key={index}>
                      <CardContent style={tw`p-4`}>
                        <View style={tw`w-full flex flex-row items-center gap-[10px]`}>
                          <View
                            style={tw`w-10 h-10 rounded-[15px] bg-[#F97415]/10 flex items-center justify-center`}
                          >
                            {feature.icon}
                          </View>
                          <View style={tw`text-center flex flex-col gap-[5px]`}>
                            <Text style={tw`font-semibold`}>{feature.title}</Text>
                            <Text style={tw`text-[#6B7280]`}>
                              {feature.description}
                            </Text>
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))}
                </View>
              </TabsContent>

              <TabsContent value="technology">
                <View
                  style={tw`grid grid-cols-1 mt-4 gap-[20px] md:grid-cols-2`}
                >
                  {features.technology.map((feature, index) => (
                    <Card key={index}>
                      <CardContent style={tw`p-4`}>
                        <View style={tw`w-full flex flex-row items-center gap-[10px]`}>
                          <View
                            style={tw`w-10 h-10 rounded-[15px] bg-[#21C45D]/10 flex items-center justify-center`}
                          >
                            {feature.icon}
                          </View>
                          <View style={tw`text-center flex flex-col gap-[5px]`}>
                            <Text style={tw`font-semibold`}>{feature.title}</Text>
                            <Text style={tw`text-[#6B7280]`}>
                              {feature.description}
                            </Text>
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

        {/*ScreenShot Section*/}
        <View style={tw`w-full bg-white px-4 py-10 flex flex-col justify-center items-center gap-[22px]`}>
          <Text style={tw`text-[28px] text-center font-bold`}>See FuelCore in Action</Text>
          <Text style={tw`text-[#6B7280] text-center leading-[30px] text-[18px]`}>
            Screenshots showing key features and workflows
          </Text>
          {CarouselReplacement()}
        </View>

        {/* Contact Section */}
        <View style={tw`px-4 w-full pt-10 gap-8 bg-[#FBFBFC]`}>
          {/* Contact Form */}
          <View>
            <Text style={tw`text-[28px] font-bold mb-6`}>Get In Touch</Text>
            <View style={tw`w-full grid grid-cols-1 md:grid-cols-2 gap-[25px]`}>
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
                <Input
                  id='message'
                  multiline={true}
                  numberOfLines={4}
                  placeholder="How can we help you?"
                  value={formData?.message}
                  onChangeText={(text) =>
                    setFormData((prev) => ({
                      ...prev,
                      message: text,
                    }))
                  }
                />
              </View>
              <Button className="w-full rounded-[10px]" size='sm' onPress={handleSubmit}>
                Send Message
              </Button>
            </View>
          </View>

          {/* Contact Info */}
          <View>
            <Text style={tw`text-[28px] font-bold pt-6 mb-4`}>Contact Info</Text>
            <View style={tw`flex flex-col gap-[30px]`}>
              <View style={tw`flex flex-row items-center gap-4`}>
                <Mail style={tw`w-6 h-6`} />
                <View>
                  <Text style={tw`font-medium`}>Email Us</Text>
                  <Text style={tw`text-[#6B7280]`}>
                    contact@fuelcore.com
                  </Text>
                </View>
              </View>
              <View style={tw`flex flex-row items-center gap-4`}>
                <PhoneCall style={tw`w-6 h-6`} />
                <View>
                  <Text style={tw`font-medium`}>Call Us</Text>
                  <Text style={tw`text-[#6B7280]`}>
                    +234 123 456 789
                  </Text>
                </View>
              </View>
              <View style={tw`mt-6`}>
                <Text style={tw`text-lg font-semibold mb-4`}>Follow Us</Text>
                <View style={tw`flex pb-16 flex-row gap-4`}>
                  <Link
                    href="https://instagram.com/fuelcore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className='rounded-[10px]' size="icon">
                      <Instagram size={18} />
                    </Button>
                  </Link>
                  <Link
                    href="https://linkedin.com/company/fuelcore"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className='rounded-[10px]' variant="outline" size="icon">
                      <Linkedin size={18} />
                    </Button>
                  </Link>
                </View>
              </View>
            </View>
          </View>
        </View>

        {/* About Section */}
        <View style={tw`py-16`}>
          <View style={tw`w-full px-4`}>
            <Text style={tw`text-[28px] text-center font-bold mb-4`}>About FuelCore</Text>
            <Text style={tw`text-[20px] leading-[35px] text-center text-[#6B7280]`}>
              FuelCore is a Nigerian-grown innovation redefining how people buy and redeem fuel. Whether you're managing a business fleet, a fuel station, or just your personal vehicle — we've built this for you. Our mission is to digitize Nigeria's fuel industry, making it more efficient, transparent, and accessible for everyone.
            </Text>
          </View>
        </View>

        {/* Footer */}
        <LinearGradient
          colors={["#25C35C", "#E97A1A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 1 }}
          style={tw`w-full px-4 py-8 mb-14`}
        >
          <View style={tw`w-full flex flex-row items-center gap-[10px] mb-6`}>
            <View style={tw`bg-[#5DC978] rounded-full p-[8px]`}>
              <Fuel color='white' size={22} />
            </View>
            <Text style={tw`font-bold text-[20px] text-white`}>FuelCore</Text>
          </View>
          <Text style={tw`text-white text-[16px] leading-[25px] mb-10`}>Nigeria's first digital fuel management platform. Revolutionizing how fuel is bought, sold, and managed.</Text>
          <View style={tw`flex flex-col gap-[18px]`}>
            <Text style={tw`text-[16px] text-white font-medium`}>Quick Links</Text>
            <View style={tw`flex flex-col gap-[12px]`}>
              <Link
                href="/feature"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Features
              </Link>
              <Link
                href="/about"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                About
              </Link>
              <Link
                href="/contact"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Contact
              </Link>
              <Link
                href="/beta-test"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Beta Test
              </Link>
            </View>
          </View>

          <View style={tw`flex mb-8 flex-col mt-8 gap-[18px]`}>
            <Text style={tw`text-[16px] text-white font-medium`}>Legal</Text>
            <View style={tw`flex flex-col gap-[12px]`}>
              <Link
                href="/terms"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Terms
              </Link>
              <Link
                href="/privacy"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Privacy
              </Link>
              <Link
                href="/careers"
                style={tw`text-white/80 text-[16px] hover:text-[#21C45D] transition-colors`}
              >
                Careers
              </Link>
            </View>
          </View>

          <View style={tw`border-b-[0.1] border-gray-200 w-full mb-8`} />

          <Text style={tw`text-white/80 text-[16px] text-center leading-[25px]`}>© 2025 FuelCore. All rights reserved. Made with ❤️ in Nigeria.</Text>
        </LinearGradient>
      </ScrollView>
    </>
  );
};

export default LandingPage;
