import { useRouter } from 'expo-router';
import { ArrowLeft, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import tw from 'twrnc';

const StationSignUp = () => {
    const router = useRouter()
    return (
        <>
            <ScrollView contentContainerStyle={{
                padding: 20
            }}>
                <View style={tw`w-full flex flex-col`}>
                    <View style={tw`rounded-t-[16px] w-full bg-[#21C45D] p-[20px] pt-[25px] items-center justify-center flex flex-col`}>
                        <View style={tw`w-full pl-[10px] flex flex-row justify-between items-center`}>
                            <TouchableOpacity onPress={()=>{
                                router.back()
                            }}>
                                <ArrowLeft size={15} color='white' />
                            </TouchableOpacity>
                            <View style={tw`flex flex-col ml-[-10px] w-full items-center justify-center`}>
                                <Text style={tw`font-medium text-[18px] text-white`}>Business Info</Text>
                                <Text style={tw`text-gray-200 text-[12px]`}>Step 1 of 4</Text>
                            </View>
                        </View>
                        <View style={tw`bg-[#64D68E] h-[6px] mt-[12px] w-full rounded-full`}>

                        </View>
                    </View>
                    <View style={tw`rounded-b-[16px] w-full bg-white p-[20px] pt-[15px] flex flex-col gap-[5px]`}>
                        <Text style={tw`font-medium text-gray-500`}>Business Information</Text>
                        <Text style={tw`text-gray-500`}>Enter your business details to get started</Text>
                    </View>
                </View>
            </ScrollView>
            <View style={tw`absolute bottom-0 left-0 w-full bg-white p-[15px] pb-[30px] flex flex-row justify-end items-center`}>
                <TouchableOpacity>
                    <View style={tw`h-10 px-12 py-2 flex bg-[#21C45D] rounded-[12px] flex-row gap-[15px] justify-center items-center`}>
                        <Text style={tw`text-white font-medium`}>
                            Continue
                        </Text>
                        <ChevronRight size={15} color='white' />
                    </View>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default StationSignUp;