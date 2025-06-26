import React, { useState, useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import OrderTracker from '@/components/OrderTracker';
import LiveTrackingMap from '@/components/LiveTrackingMap';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Phone } from 'lucide-react';

type OrderStatus = 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';

const orderStatuses: OrderStatus[] = ['confirmed', 'preparing', 'out-for-delivery', 'delivered'];

const OrderTrackingPage = () => {
  console.log('OrderTrackingPage loaded');
  const [status, setStatus] = useState<OrderStatus>('confirmed');
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    // Simulate order progress updates
    const statusIndex = orderStatuses.indexOf(status);
    if (statusIndex < orderStatuses.length - 1) {
      const timer = setTimeout(() => {
        setStatus(orderStatuses[statusIndex + 1]);
        setProgress((prev) => prev + 30);
      }, 8000); // Update every 8 seconds

      return () => clearTimeout(timer);
    }
  }, [status]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-1 w-full max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">Track Your Order</h1>
            <p className="mt-2 text-lg text-muted-foreground">Your delicious meal is on its way!</p>
          </div>

          <Card className="shadow-lg">
            <CardHeader>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <CardTitle className="text-xl">Order #QB-1A2B3C</CardTitle>
                  <CardDescription>Estimated Arrival: 7:45 PM</CardDescription>
                </div>
                <div className="mt-4 sm:mt-0 text-right">
                    <p className="text-sm font-medium text-green-600">
                        {status === 'out-for-delivery' ? 'Arriving in approx. 8 mins' : 
                         status === 'preparing' ? 'Preparing your food...' : 
                         status === 'confirmed' ? 'Order confirmed by restaurant' : 'Order Delivered!'}
                    </p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <OrderTracker currentStatus={status} />

              <div className="grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <LiveTrackingMap />
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Delivery Progress</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <Progress value={progress} className="w-full" />
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Your Rider</CardTitle>
                    </CardHeader>
                    <CardContent className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar>
                          <AvatarImage src="https://i.pravatar.cc/150?u=alex" alt="Rider Alex" />
                          <AvatarFallback>A</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">Alex</p>
                          <p className="text-sm text-muted-foreground">Honda Activa</p>
                        </div>
                      </div>
                      <Button variant="outline" size="icon">
                        <Phone className="h-4 w-4" />
                        <span className="sr-only">Contact rider</span>
                      </Button>
                    </CardContent>
                  </Card>
                  
                   <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="text-sm text-muted-foreground space-y-2">
                            <li className="flex justify-between"><span>1x Pepperoni Pizza (Large)</span> <span>$15.99</span></li>
                            <li className="flex justify-between"><span>1x Garlic Bread</span> <span>$4.50</span></li>
                            <li className="flex justify-between border-t pt-2 mt-2 font-semibold text-foreground"><span>Total</span> <span>$20.49</span></li>
                        </ul>
                    </CardContent>
                  </Card>

                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OrderTrackingPage;