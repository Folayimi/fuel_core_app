import React, { useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';

const IndividualCustomerSignUp = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        personalEmail: '',
        mobileNumber: '',
        password: '',
        agreed: false,
        confirmPassword: ''
    })

    const handleSubmit = () => {
        // Here you would typically send the form data to your backend
        console.log("Form submitted:", formData);
        // Reset form
        setFormData({
            fullName: '',
            personalEmail: '',
            mobileNumber: '',
            password: '',
            agreed: false,
            confirmPassword: ''
        });
    };
    return (
        <>
            <View style={tw`w-full grid grid-cols-1 md:grid-cols-2 gap-[20px] pb-6`}>
                <View>
                    <Label>Full Name *</Label>
                    <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData?.fullName}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                fullName: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Personal Email *</Label>
                    <Input
                        id="personalEmail"
                        placeholder="you@example.com"
                        value={formData?.personalEmail}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                personalEmail: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Mobile Number *</Label>
                    <Input
                        id="mobileNumber"
                        placeholder="800 000 0000"
                        value={formData?.mobileNumber}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                mobileNumber: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Password *</Label>
                    <Input
                        id='password' placeholder="Create a password"
                        value={formData?.password}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                password: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Confirm Password *</Label>
                    <Input
                        id='confirmPassword' placeholder="Confirm your password"
                        value={formData?.confirmPassword}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                confirmPassword: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <Checkbox checked={formData['agreed']} onCheckedChange={(newValue) =>
                    setFormData((prev) => ({
                        ...prev,
                        agreed: newValue,
                    }))
                } label={<Text style={tw`font-medium text-[14px]`}>
                    I agree to the {' '}
                    <Text style={tw`text-[#21C45D] text-[14px]`}>
                        Terms of Service
                    </Text> {' '} and {' '} <Text style={tw`text-[#21C45D] text-[14px]`}>Privacy Policy</Text>
                </Text>} />

                <Button className="w-full mt-[-5px] rounded-[10px]" size='sm' onPress={handleSubmit}>
                    Create account
                </Button>

                <Text style={tw`text-gray-500 text-center text-[14px]`}>
                    Already have an account? {' '}
                    <Text style={tw`text-[#21C45D] text-[14px]`}>
                        Sign In
                    </Text>
                </Text>
            </View>
        </>
    )
}

export default IndividualCustomerSignUp;