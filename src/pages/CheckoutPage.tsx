import React from 'react';
import { useNavigate } from 'react-router-dom';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// shadcn/ui Components
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Separator } from '@/components/ui/separator';

// Icons
import { CreditCard, Wallet, Ticket } from 'lucide-react';

const CheckoutPage = () => {
  console.log('CheckoutPage loaded');
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    // In a real app, this would involve API calls, payment processing, etc.
    // For now, we just navigate to the order tracking page on success.
    console.log('Placing order...');
    navigate('/order-tracking'); // Navigate to the path from App.tsx
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold tracking-tight lg:text-4xl mb-8 text-center">
          Secure Checkout
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Section: Address and Payment */}
          <div className="lg:col-span-2 space-y-8">
            {/* Delivery Address Card */}
            <Card>
              <CardHeader>
                <CardTitle>Delivery Address</CardTitle>
                <CardDescription>Confirm your address for delivery.</CardDescription>
              </CardHeader>
              <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" defaultValue="Alex Johnson" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" placeholder="(123) 456-7890" defaultValue="(555) 123-4567" />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input id="address" placeholder="123 Pizza Lane" defaultValue="456 Burger Blvd" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="city">City</Label>
                  <Input id="city" placeholder="Foodville" defaultValue="Tastytown" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="zip">ZIP Code</Label>
                  <Input id="zip" placeholder="12345" defaultValue="98765" />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method Card */}
            <Card>
              <CardHeader>
                <CardTitle>Payment Method</CardTitle>
                <CardDescription>Select a payment method to complete the purchase.</CardDescription>
              </CardHeader>
              <CardContent>
                <RadioGroup defaultValue="card" className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 border rounded-md has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                    <RadioGroupItem value="card" id="card" />
                    <Label htmlFor="card" className="flex-1 flex items-center gap-3 cursor-pointer">
                      <CreditCard className="h-6 w-6" />
                      <span>Credit Card</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-4 p-4 border rounded-md has-[:checked]:bg-primary/10 has-[:checked]:border-primary">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex-1 flex items-center gap-3 cursor-pointer">
                      <Wallet className="h-6 w-6" />
                      <span>PayPal</span>
                    </Label>
                  </div>
                </RadioGroup>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <Label htmlFor="card-number">Card Number</Label>
                        <Input id="card-number" placeholder="•••• •••• •••• 1234" />
                    </div>
                     <div>
                        <Label htmlFor="card-name">Name on Card</Label>
                        <Input id="card-name" placeholder="John Doe" />
                    </div>
                     <div>
                        <Label htmlFor="expiry">Expiration</Label>
                        <Input id="expiry" placeholder="MM/YY" />
                    </div>
                     <div>
                        <Label htmlFor="cvc">CVC</Label>
                        <Input id="cvc" placeholder="123" />
                    </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Section: Order Summary */}
          <div className="lg:col-span-1 space-y-8">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span>1x Pepperoni Pizza (Large)</span>
                        <span>$18.99</span>
                    </div>
                     <div className="flex justify-between">
                        <span>1x Garlic Bread</span>
                        <span>$5.50</span>
                    </div>
                     <div className="flex justify-between text-muted-foreground">
                        <span>2x Soda</span>
                        <span>$4.00</span>
                    </div>
                </div>
                <Separator />
                <div className="space-y-2">
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$28.49</span>
                    </div>
                    <div className="flex justify-between">
                        <span className="text-muted-foreground">Delivery Fee</span>
                        <span>$3.00</span>
                    </div>
                     <div className="flex justify-between">
                        <span className="text-muted-foreground">Taxes</span>
                        <span>$2.51</span>
                    </div>
                </div>
                <Separator />
                <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>$34.00</span>
                </div>
                 <div className="flex items-center space-x-2 pt-2">
                    <Input placeholder="Promo Code" />
                    <Button variant="outline">Apply</Button>
                </div>
              </CardContent>
              <CardFooter>
                <Button size="lg" className="w-full" onClick={handlePlaceOrder}>
                  Place Order
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CheckoutPage;