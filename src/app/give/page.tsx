'use client';

import { useState } from 'react';
import { CreditCard, Landmark, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function GivePage() {
  const [amount, setAmount] = useState('');
  const [frequency, setFrequency] = useState('one-time');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form after success
      setTimeout(() => {
        setAmount('');
        setFrequency('one-time');
        setPaymentMethod('card');
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  const presetAmounts = [50, 100, 200, 500, 1000];

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Give Online</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Your generous giving helps us spread the gospel and support our community initiatives.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="p-6 sm:p-8">
            {isSuccess ? (
              <div className="text-center py-12">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-6">
                  <CheckCircle className="h-10 w-10 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
                <p className="text-gray-600 mb-6">Your donation has been received successfully.</p>
                <Button onClick={() => setIsSuccess(false)}>Make Another Donation</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Donation Amount (SLL)</h2>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-4">
                    {presetAmounts.map((preset) => (
                      <Button
                        key={preset}
                        type="button"
                        variant={amount === preset.toString() ? 'default' : 'outline'}
                        className="h-14 text-lg"
                        onClick={() => setAmount(preset.toString())}
                      >
                        SLL {preset.toLocaleString()}
                      </Button>
                    ))}
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">SLL</span>
                      <Input
                        type="number"
                        placeholder="Other amount"
                        className="pl-12 h-14 text-lg"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        min="1"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Frequency</h2>
                  <RadioGroup
                    value={frequency}
                    onValueChange={setFrequency}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div>
                      <RadioGroupItem value="one-time" id="one-time" className="peer sr-only" />
                      <Label
                        htmlFor="one-time"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="font-medium">One-time</span>
                      </Label>
                    </div>
                    <div>
                      <RadioGroupItem value="monthly" id="monthly" className="peer sr-only" />
                      <Label
                        htmlFor="monthly"
                        className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary cursor-pointer"
                      >
                        <span className="font-medium">Monthly</span>
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div>
                  <h2 className="text-lg font-medium text-gray-900 mb-4">Payment Method</h2>
                  <div className="space-y-4">
                    <div>
                      <RadioGroupItem value="card" id="card" className="peer sr-only" />
                      <Label
                        htmlFor="card"
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          paymentMethod === 'card' ? 'border-primary bg-primary/5' : 'border-gray-200'
                        }`}
                      >
                        <CreditCard className="h-6 w-6 mr-3 text-primary" />
                        <span className="font-medium">Credit/Debit Card</span>
                      </Label>
                      {paymentMethod === 'card' && (
                        <div className="mt-4 space-y-4 pl-10">
                          <div>
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input id="cardNumber" placeholder="1234 5678 9012 3456" className="mt-1" required />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="expiry">Expiry Date</Label>
                              <Input id="expiry" placeholder="MM/YY" className="mt-1" required />
                            </div>
                            <div>
                              <Label htmlFor="cvv">CVV</Label>
                              <Input id="cvv" placeholder="123" className="mt-1" required />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="name">Name on Card</Label>
                            <Input id="name" placeholder="John Doe" className="mt-1" required />
                          </div>
                        </div>
                      )}
                    </div>

                    <div>
                      <RadioGroupItem value="bank" id="bank" className="peer sr-only" />
                      <Label
                        htmlFor="bank"
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          paymentMethod === 'bank' ? 'border-primary bg-primary/5' : 'border-gray-200'
                        }`}
                      >
                        <Landmark className="h-6 w-6 mr-3 text-primary" />
                        <span className="font-medium">Bank Transfer</span>
                      </Label>
                      {paymentMethod === 'bank' && (
                        <div className="mt-4 space-y-2 pl-10 text-sm text-gray-600">
                          <p>Please use the following bank details for your transfer:</p>
                          <div className="bg-gray-50 p-4 rounded-md mt-2">
                            <p><span className="font-medium">Bank:</span> Sierra Leone Commercial Bank</p>
                            <p><span className="font-medium">Account Name:</span> RCCG Sierra Leone</p>
                            <p><span className="font-medium">Account Number:</span> 1234567890</p>
                            <p><span className="font-medium">Sort Code:</span> 01-23-45</p>
                          </div>
                          <p className="text-sm text-muted-foreground mt-2">
                            Please include your name as the reference when making the transfer.
                          </p>
                        </div>
                      )}
                    </div>

                    <div>
                      <RadioGroupItem value="mobile" id="mobile" className="peer sr-only" />
                      <Label
                        htmlFor="mobile"
                        className={`flex items-center p-4 border-2 rounded-lg cursor-pointer ${
                          paymentMethod === 'mobile' ? 'border-primary bg-primary/5' : 'border-gray-200'
                        }`}
                      >
                        <Send className="h-6 w-6 mr-3 text-primary" />
                        <span className="font-medium">Mobile Money</span>
                      </Label>
                      {paymentMethod === 'mobile' && (
                        <div className="mt-4 space-y-4 pl-10">
                          <div>
                            <Label>Select Mobile Money Provider</Label>
                            <Select defaultValue="afrimoney">
                              <SelectTrigger className="w-full mt-1">
                                <SelectValue placeholder="Select provider" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="afrimoney">Afrimoney</SelectItem>
                                <SelectItem value="orange">Orange Money</SelectItem>
                                <SelectItem value="mrmoney">mR. Money</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" placeholder="+232 XX XXX XXXX" className="mt-1" required />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Processing...' : `Donate SLL ${amount ? parseFloat(amount).toLocaleString() : '0'}`}
                  </Button>
                  <p className="mt-3 text-sm text-gray-500 text-center">
                    Your donation is secure and encrypted.
                  </p>
                </div>
              </form>
            )}
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-6">
          <h3 className="text-lg font-medium text-blue-800 mb-3">Other Ways to Give</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-2">In Person</h4>
              <p className="text-sm text-blue-600">Visit us during our services to give in person.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-2">Bank Transfer</h4>
              <p className="text-sm text-blue-600">Use our bank details above for direct transfers.</p>
            </div>
            <div className="bg-white p-4 rounded-lg border border-blue-100">
              <h4 className="font-medium text-blue-700 mb-2">Contact Us</h4>
              <p className="text-sm text-blue-600">Need assistance? Reach out to our finance team.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}