import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Slider } from "@/components/ui/slider";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

export default function Index() {
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [switchChecked, setSwitchChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("option1");
  const [sliderValue, setSliderValue] = useState(50);
  const [selectValue, setSelectValue] = useState("");

  return (
    <ScrollView style={tw`flex-1 bg-gray-50`}>
      <View style={tw`p-6 space-y-6`}>
        {/* Header */}
        <View style={tw`items-center mb-8`}>
          <Text style={[tw`text-3xl font-bold text-gray-900 mb-2`, { fontFamily: "Inter_700Bold" }]}>
            Welcome to Fuel Core
          </Text>
          <Text style={[tw`text-lg text-gray-600`, { fontFamily: "Inter_500Medium" }]}>
            Complete React Native UI Components
          </Text>
        </View>

        {/* Alert Examples */}
        <Alert variant="default">
          <AlertTitle>Info Alert</AlertTitle>
          <AlertDescription>
            This is an informational alert using the converted Alert component.
          </AlertDescription>
        </Alert>

        <Alert variant="success">
          <AlertTitle>Success!</AlertTitle>
          <AlertDescription>
            All components have been successfully converted to React Native.
          </AlertDescription>
        </Alert>

        {/* Form Components */}
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>
              Interactive form elements with React Native
            </CardDescription>
          </CardHeader>
          <CardContent>
            <View style={tw`space-y-4`}>
              <Input 
                label="Email Address"
                placeholder="Enter your email"
                keyboardType="email-address"
              />
              <Input 
                label="Password"
                placeholder="Enter your password"
                secureTextEntry
              />
              
              <Checkbox 
                label="I agree to the terms and conditions"
                checked={checkboxChecked}
                onCheckedChange={setCheckboxChecked}
              />
              
              <Switch 
                label="Enable notifications"
                checked={switchChecked}
                onCheckedChange={setSwitchChecked}
              />
              
              <View>
                <Text style={tw`text-sm font-medium text-gray-700 mb-2`}>Choose an option:</Text>
                <RadioGroup value={radioValue} onValueChange={setRadioValue}>
                  <RadioGroupItem value="option1" label="Option 1" />
                  <RadioGroupItem value="option2" label="Option 2" />
                  <RadioGroupItem value="option3" label="Option 3" />
                </RadioGroup>
              </View>
              
              <View>
                <Text style={tw`text-sm font-medium text-gray-700 mb-2`}>Volume: {sliderValue}</Text>
                <Slider 
                  value={sliderValue}
                  onValueChange={setSliderValue}
                  minimumValue={0}
                  maximumValue={100}
                  showValue
                />
              </View>
              
              <View>
                <Text style={tw`text-sm font-medium text-gray-700 mb-2`}>Select an option:</Text>
                <Select value={selectValue} onValueChange={setSelectValue}>
                  <SelectTrigger placeholder="Choose an option">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </View>
            </View>
          </CardContent>
        </Card>

        {/* Tabs Component */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs Component</CardTitle>
            <CardDescription>
              Tabbed interface with React Native
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="tab1">
              <TabsList>
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1">
                <View style={tw`p-4 bg-gray-50 rounded-md`}>
                  <Text style={tw`text-gray-700`}>Content for Tab 1</Text>
                </View>
              </TabsContent>
              <TabsContent value="tab2">
                <View style={tw`p-4 bg-gray-50 rounded-md`}>
                  <Text style={tw`text-gray-700`}>Content for Tab 2</Text>
                </View>
              </TabsContent>
              <TabsContent value="tab3">
                <View style={tw`p-4 bg-gray-50 rounded-md`}>
                  <Text style={tw`text-gray-700`}>Content for Tab 3</Text>
                </View>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Collapsible Component */}
        <Card>
          <CardHeader>
            <CardTitle>Collapsible Component</CardTitle>
            <CardDescription>
              Expandable content sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Collapsible>
              <CollapsibleTrigger>
                <Text style={tw`text-base font-medium`}>Click to expand</Text>
              </CollapsibleTrigger>
              <CollapsibleContent>
                <Text style={tw`text-gray-600`}>
                  This is the collapsible content. It can contain any React Native components.
                </Text>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* Accordion Component */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion Component</CardTitle>
            <CardDescription>
              Multiple expandable sections
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible>
              <AccordionItem value="item1">
                <AccordionTrigger>
                  <Text>Section 1</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text style={tw`text-gray-600`}>
                    Content for section 1. This can be expanded and collapsed.
                  </Text>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item2">
                <AccordionTrigger>
                  <Text>Section 2</Text>
                </AccordionTrigger>
                <AccordionContent>
                  <Text style={tw`text-gray-600`}>
                    Content for section 2. Each section works independently.
                  </Text>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Button Variants */}
        <View style={tw`space-y-3`}>
          <Text style={[tw`text-lg font-semibold text-gray-900`, { fontFamily: "Inter_600SemiBold" }]}>
            Button Variants
          </Text>
          <View style={tw`space-y-2`}>
            <Button variant="default" size="lg" style={tw`w-full`}>
              Default Button
            </Button>
            <Button variant="destructive" style={tw`w-full`}>
              Destructive Button
            </Button>
            <Button variant="outline" style={tw`w-full`}>
              Outline Button
            </Button>
            <Button variant="secondary" style={tw`w-full`}>
              Secondary Button
            </Button>
            <Button variant="ghost" style={tw`w-full`}>
              Ghost Button
            </Button>
            <Button variant="link" style={tw`w-full`}>
              Link Button
            </Button>
          </View>
        </View>

        <Separator />

        {/* Loading State */}
        <View style={tw`space-y-3`}>
          <Text style={[tw`text-lg font-semibold text-gray-900`, { fontFamily: "Inter_600SemiBold" }]}>
            Loading States
          </Text>
          <Button loading style={tw`w-full`}>
            Loading Button
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}