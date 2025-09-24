import CompanyAdminSignUp from '@/components/CompanyAdminSignUp';
import CorporateAdminSignUp from '@/components/CorporateAdminSignUp';
import IndividualCustomerSignUp from '@/components/IndividualCustomerSignUp';
import { Card, CardContent } from '@/components/ui/card';
import { useRouter } from 'expo-router';
import { ArrowLeft, Check, Fuel } from 'lucide-react-native';
import React, { useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const CustomerSignUp = () => {
    const router = useRouter()
    const [accSelected, setAccSelected] = useState('Individual Customer')
    const [accountType, setAccountType] = useState([
        {
            title: 'Individual Customer',
            description: 'Purchase fuel coupons for personal vehicle use',
            instruction: 'Create your personal account to manage fuel purchases',
            selected: true
        },
        {
            title: 'Company Admin',
            description: "Manage your organiztion's fuel account and users",
            instruction: 'Set up your corporate driver account',
            selected: false
        },
        {
            title: 'Corporate Admin',
            description: 'Manage multiple companies and thier fuel programs',
            instruction: 'Set up your corporate driver account',
            selected: false
        }
    ]);
    const [instruction, setInstruction] = useState('Create your personal account to manage fuel purchases')
    return (
        <>
            <ScrollView contentContainerStyle={{
                padding: 15
            }}>
                <Card className='bg-white rounded-[20px]'>
                    <CardContent className='w-full p-[20px]'>
                        <View
                            style={tw`w-full flex flex-row justify-between items-center `}
                        >
                            <View style={tw`flex flex-row items-center gap-2`}>
                                <Fuel style={tw`w-5 h-5`} color='#21C45D' />
                                <Text style={tw`font-bold text-lg`}>FuelCore</Text>
                            </View>
                            <TouchableOpacity style={tw`p-[10px] rounded-[15px]`} onPress={() => {
                                router.back()
                            }}>
                                <ArrowLeft size={18} />
                            </TouchableOpacity>
                        </View>
                        <View style={tw`px-[20px] w-full mt-2 px-4 flex flex-col gap-[10px]`}>
                            <Text style={tw`text-[22px] text-center font-bold`}>Create an account</Text>
                            <Text style={tw`text-[#6B7280] text-center leading-[20px] text-[14px]`}>
                                {instruction}
                            </Text>
                        </View>
                        <View style={tw`w-full flex flex-col gap-[12px] mt-[25px]`}>
                            <Text style={tw`font-medium text-[14px]`}>Account Type</Text>
                            {
                                accountType.map((account, index) => {
                                    return (
                                        <TouchableOpacity key={index + account.title} onPress={() => {
                                            setInstruction(account.instruction)
                                            setAccSelected(account.title)
                                            const index = accountType.findIndex((item) => item === account)
                                            for (let i = 0; i < accountType.length; i++) {
                                                accountType[i].selected = false
                                            }
                                            accountType[index].selected = true
                                            setAccountType([...accountType])

                                        }}>
                                            <Card className={`{${account.selected && 'border-[1px] border-[#21C45D] bg-[#21C45D]/5'} w-full shadow-none`}>
                                                <CardContent className='w-full p-[15px] gap-[10px] flex flex-row'>

                                                    {account.selected ? <View style={tw`bg-[#21C45D] w-[22px] h-[22px] rounded-full flex items-center justify-center`}>
                                                        <Check color='white' size={12} />
                                                    </View> : <Card className='rounded-full h-[22px] w-[22px] shadow-none' />}
                                                    <View style={tw`w-[90%] flex flex-col gap-[5px]`}>
                                                        <Text style={tw`font-medium`}>{account.title}</Text>
                                                        <Text style={tw`text-[12px] text-gray-500 font-normal`}>{account.description}</Text>
                                                    </View>
                                                </CardContent>
                                            </Card>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                            <Text style={tw`text-[12px] text-gray-500 leading-[18px]`}>Need a different account type? Please contact your administrator.</Text>
                            {accSelected === 'Individual Customer' && <IndividualCustomerSignUp />}
                            {accSelected === 'Company Admin' && <CompanyAdminSignUp />}
                            {accSelected === 'Corporate Admin' && <CorporateAdminSignUp />}
                        </View>
                    </CardContent>
                </Card>
            </ScrollView>
        </>
    )
}

export default CustomerSignUp;