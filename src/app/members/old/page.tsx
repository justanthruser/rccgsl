"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Loader2, User, Phone, MapPin, Building, Briefcase } from "lucide-react";

const oldMemberSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  gender: z.enum(["male", "female"], { required_error: "Please select a gender" }),
  address: z.string().min(5, "Address must be at least 5 characters"),
  phoneNumber: z.string().regex(/^(\+?\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid phone number"),
  parish: z.enum(["sl_headquarters", "freetown_central", "bo_municipal"], { required_error: "Please select a parish" }),
  isWorker: z.boolean().default(false),
  department: z.string().optional(),
}).refine((data) => {
  if (data.isWorker && !data.department) {
    return false;
  }
  return true;
}, {
  message: "Department is required for workers",
  path: ["department"],
});

type OldMemberForm = z.infer<typeof oldMemberSchema>;

const departments = [
  "Choir",
  "Ushering",
  "Sanctuary Keepers",
  "Technical/Media",
  "Children's Church",
  "Youth Ministry",
  "Evangelism",
  "Prayer Team",
  "Welfare",
  "Security",
  "Follow-up",
  "Other"
];

const parishes = [
  { key: "peace_assembly", name: "Peace Assembly" },
  { key: "mount_of_olives", name: "Mount of Olives" },
  { key: "jesus_embassy", name: "Jesus Embassy" }
];

export default function OldMemberRegistration() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<OldMemberForm>({
    resolver: zodResolver(oldMemberSchema),
    defaultValues: {
      fullName: "",
      address: "",
      phoneNumber: "",
      isWorker: false,
      department: "",
    },
  });

  const isWorker = form.watch("isWorker");

  const onSubmit = async (data: OldMemberForm) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://todos-a-pee-hi.onrender.com/api/v1/rccgsl/register-member/old", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Failed to submit registration");
      }

      toast({
        title: "Success!",
        description: "Registration submitted successfully!",
      });
      form.reset();
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit registration. Please try again.",
        variant: "destructive",
      });
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <Card className="shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-900">
              Existing Member Registration
            </CardTitle>
            <CardDescription className="text-lg">
              Help us update our records with your information.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="fullName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <User className="h-4 w-4" />
                        Full Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter your full name"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="gender"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Gender</FormLabel>
                      <FormControl>
                        <RadioGroup
                          onValueChange={field.onChange}
                          value={field.value}
                          className="flex space-x-6"
                        >
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="male" id="male" />
                            <label htmlFor="male" className="text-sm font-medium">
                              Male
                            </label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <RadioGroupItem value="female" id="female" />
                            <label htmlFor="female" className="text-sm font-medium">
                              Female
                            </label>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="address"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Address
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter your full address"
                          className="min-h-[80px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Phone className="h-4 w-4" />
                        Phone Number
                      </FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+232 XX XXX XXX"
                          type="tel"
                          {...field}
                          className="h-11"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="parish"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        Parish
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select your parish" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {parishes.map((parish) => (
                            <SelectItem key={parish.key} value={parish.key}>
                              {parish.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="isWorker"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          I am a worker in the church
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                {isWorker && (
                  <FormField
                    control={form.control}
                    name="department"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Department</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger className="h-11">
                              <SelectValue placeholder="Select your department" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {departments.map((department) => (
                              <SelectItem key={department} value={department}>
                                {department}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                )}

                <Button
                  type="submit"
                  className="w-full h-11 text-base font-medium"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    "Submit Registration"
                  )}
                </Button>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}