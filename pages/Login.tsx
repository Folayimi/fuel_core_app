import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useRouter } from 'expo-router';
import { ArrowLeft, Fuel } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const Login = () => {
    const router = useRouter()
    const CustomerDemoAccounts = [
        {
            user: 'Customer',
            email: 'customer@demo.com',
            password: 'demo123',
        },
        {
            user: 'Company Admin',
            email: 'admin@company.com',
            password: 'admin123',
        },
        {
            user: 'Corporate Admin',
            email: 'corporate@admin.com',
            password: 'corpadmin123',
        },
    ]

    const StationDemoAccounts = [
        {
            user: 'Customer',
            email: 'customer@demo.com',
            password: 'demo123',
        },
        {
            user: 'Company Admin',
            email: 'admin@company.com',
            password: 'admin123',
        },
        {
            user: 'Branch Manager',
            email: 'manager@station.com',
            password: 'manager123',
        },
        {
            user: 'Branch Staff',
            email: 'staff@station.com',
            password: 'staff123',
        },
        {
            user: 'Corporate Admin',
            email: 'corporate@admin.com',
            password: 'corpadmin123',
        },
        {
            user: 'Corporate Branch',
            email: 'branch@corp.com',
            password: 'branch123',
        },
        {
            user: 'Corporate Driver',
            email: 'driver@corp.com',
            password: 'driver123',
        },
    ]
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });
    const handleSubmit = () => {
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", loginData);
        // Reset form
        setLoginData({ email: "", password: "" });
    };
    return (
        <>
            <ScrollView contentContainerStyle={{
                backgroundColor: 'white', paddingBottom: 25
            }}>
                <View
                    style={tw`w-full p-[25px] flex flex-row items-center justify-start gap-[25px] bg-white border-[0.2] border-gray-300`}
                >
                    <ArrowLeft size={20} onPress={() => {
                        router.back()
                    }} />
                    <View style={tw`flex flex-row items-center gap-2`}>
                        <View style={tw`w-8 h-8 rounded-full bg-[#21C45D] flex items-center justify-center`}>
                            <Fuel style={tw`w-5 h-5 text-white`} />
                        </View>
                        <Text style={tw`font-bold text-lg`}>FuelCore</Text>
                    </View>
                </View>
                <View style={tw`px-[20px] w-full mt-6 px-4 flex flex-col gap-[5px]`}>
                    <Text style={tw`text-[25px] text-center font-bold`}>Welcome back!</Text>
                    <Text style={tw`text-[#6B7280] text-center leading-[30px] text-[16px]`}>
                        Sign in to your FuelCore account
                    </Text>
                </View>
                <Tabs defaultValue="customer" className="px-[20px] pt-6">
                    <TabsList className="grid w-full grid-cols-2 bg-[#F3F4F6]">
                        <TabsTrigger value="customer" className="text-center">
                            I'm a Customer
                        </TabsTrigger>
                        <TabsTrigger value="station" className="text-center">
                            I'm a Station
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="customer">
                        <View
                            style={tw`grid grid-cols-1 mt-4 gap-[20px] md:grid-cols-2`}
                        >
                            <Card >
                                <CardContent style={tw`p-6 flex flex-col gap-[25px]`}>
                                    <View style={tw`w-full flex flex-col gap-[5px]`}>
                                        <Text style={tw`text-[25px] font-[600]`}>Sign In</Text>
                                        <Text style={tw`text-[#6B7280] leading-[20px] text-[14px]`}>
                                            Access your fuel coupons and manage your account
                                        </Text>
                                    </View>
                                    <Card className='bg-[#F9F9FA] shadow-none'>
                                        <CardContent className=' p-[12px] w-full flex flex-col gap-[10px]'>
                                            <Text style={tw`text-[#6B7280] font-medium`}>Domo Accounts:</Text>
                                            {
                                                CustomerDemoAccounts.map((account, index) => {
                                                    return (
                                                        <TouchableOpacity key={index + account.user} style={tw` bg-white rounded-[15px] w-full border-gray-300 border-[0.18] p-[8px] flex items-center justify-center`} onPress={() => {
                                                            setLoginData({ email: account.email, password: account.password })
                                                        }}>
                                                            <Text style={tw`text-[12px] font-medium`}>
                                                                {account.user}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                            <Text style={tw`text-xs text-gray-500`}>Click any button to auto-fill credentials</Text>
                                        </CardContent>
                                    </Card>
                                </CardContent>
                                <View style={tw`w-full px-6 grid grid-cols-1 md:grid-cols-2 gap-[20px] pb-6`}>
                                    <View>
                                        <Label>Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="Enter your email"
                                            value={loginData?.email}
                                            onChangeText={(text) =>
                                                setLoginData((prev) => ({
                                                    ...prev,
                                                    email: text,
                                                }))
                                            }
                                            className='rounded-[15px] text-[14px]'
                                        />
                                    </View>
                                    <View>
                                        <Label>Password</Label>
                                        <Input
                                            id='password'                               placeholder="Enter your password"
                                            value={loginData?.password}
                                            onChangeText={(text) =>
                                                setLoginData((prev) => ({
                                                    ...prev,
                                                    password: text,
                                                }))
                                            }
                                            className='rounded-[15px] text-[14px]'
                                        />
                                    </View>
                                    <Text style={tw`text-[#21C45D] text-[14px]`}>
                                        Forgot password?
                                    </Text>
                                    <Button className="w-full mt-[-5px] rounded-[10px]" size='sm' onPress={handleSubmit}>
                                        Sign In
                                    </Button>

                                    <Text style={tw`text-gray-500 text-center text-[14px]`}>
                                        Don't have an account? {' '}
                                        <Text style={tw`text-[#21C45D] text-[14px]`}>
                                            Sign Up
                                        </Text>
                                    </Text>
                                </View>
                            </Card>
                        </View>
                    </TabsContent>

                    <TabsContent value="station">
                        <View
                            style={tw`grid grid-cols-1 mt-4 gap-[20px] md:grid-cols-2`}
                        >
                            <Card >
                                <CardContent style={tw`p-6 flex flex-col gap-[25px]`}>
                                    <View style={tw`w-full flex flex-col gap-[5px]`}>
                                        <Text style={tw`text-[25px] font-[600]`}>Sign In</Text>
                                        <Text style={tw`text-[#6B7280] leading-[20px] text-[14px]`}>
                                            Manage your station and process redemptions
                                        </Text>
                                    </View>
                                    <Card className='bg-[#F9F9FA] shadow-none'>
                                        <CardContent className=' p-[12px] w-full flex flex-col gap-[10px]'>
                                            <Text style={tw`text-[#6B7280] font-medium`}>Domo Accounts:</Text>
                                            {
                                                StationDemoAccounts.map((account, index) => {
                                                    return (
                                                        <TouchableOpacity key={index + account.user} style={tw` bg-white rounded-[15px] w-full border-gray-300 border-[0.18] p-[8px] flex items-center justify-center`} onPress={() => {
                                                            setLoginData({ email: account.email, password: account.password })
                                                        }}>
                                                            <Text style={tw`text-[12px] font-medium`}>
                                                                {account.user}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )
                                                })
                                            }
                                            <Text style={tw`text-xs text-gray-500`}>Click any button to auto-fill credentials</Text>
                                        </CardContent>
                                    </Card>
                                </CardContent>
                                <View style={tw`w-full px-[20px] grid grid-cols-1 md:grid-cols-2 gap-[20px] pb-6`}>
                                    <View>
                                        <Label>Email</Label>
                                        <Input
                                            id="email"
                                            placeholder="Enter your email"
                                            value={loginData?.email}
                                            onChangeText={(text) =>
                                                setLoginData((prev) => ({
                                                    ...prev,
                                                    email: text,
                                                }))
                                            }
                                            className='rounded-[15px] text-[14px]'
                                        />
                                    </View>
                                    <View>
                                        <Label>Password</Label>
                                        <Input
                                            id='password'
                                            multiline={true}
                                            numberOfLines={4}
                                            placeholder="Enter your password"
                                            value={loginData?.password}
                                            onChangeText={(text) =>
                                                setLoginData((prev) => ({
                                                    ...prev,
                                                    password: text,
                                                }))
                                            }
                                            className='rounded-[15px] text-[14px]'
                                        />
                                    </View>
                                    <Text style={tw`text-[#21C45D]`}>
                                        Forgot password?
                                    </Text>
                                    <Button className="w-full mt-[-5px] rounded-[10px]" size='sm' onPress={handleSubmit}>
                                        Sign In
                                    </Button>
                                    <Text style={tw`text-gray-500 text-center text-[14px]`}>
                                        Don't have an account? {' '}
                                        <Text style={tw`text-[#21C45D] text-[14px]`}>
                                            Sign Up
                                        </Text>
                                    </Text>
                                </View>
                            </Card>
                        </View>
                    </TabsContent>
                </Tabs>

            </ScrollView>
        </>
    )
}

export default Login;