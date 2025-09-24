import React, { useState } from 'react';
import { Text, View } from 'react-native';
import tw from 'twrnc';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';
import { Input } from './ui/input';
import { Label } from './ui/label';

const CompanyAdminSignUp = () => {
    const [formData, setFormData] = useState({
        businessName: '',
        businessEmail: '',
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
            businessName: '',
            businessEmail: '',
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
                    <Label>Business Name *</Label>
                    <Input
                        id="businessName"
                        placeholder="Acme Corp Ltd"
                        value={formData?.businessName}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                businessName: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Business Email *</Label>
                    <Input
                        id="businessEmail"
                        placeholder="contact@company.com"
                        value={formData?.businessEmail}
                        onChangeText={(text) =>
                            setFormData((prev) => ({
                                ...prev,
                                businessEmail: text,
                            }))
                        }
                        className='rounded-[15px] text-[14px]'
                    />
                </View>
                <View>
                    <Label>Phone Number *</Label>
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

export default CompanyAdminSignUp;