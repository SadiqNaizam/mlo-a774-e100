import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bike, Home, Store } from 'lucide-react';

/**
 * A mock component representing a live tracking map for food delivery.
 * It simulates the display of a restaurant, a delivery destination, and a driver's route.
 * Note: This is a static visual representation and does not use a real mapping service.
 */
const LiveTrackingMap: React.FC = () => {
  console.log('LiveTrackingMap loaded');

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Live Delivery Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative w-full h-64 md:h-96 bg-muted rounded-lg overflow-hidden border">
          {/* Placeholder for a static map image or tile layer */}
          <div 
            className="absolute inset-0 bg-gray-200" 
            aria-label="Map placeholder"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,0,0,0.03) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,0,0,0.03) 1px, transparent 1px)
              `,
              backgroundSize: '20px 20px',
            }}
          ></div>

          {/* SVG to draw the delivery route */}
          <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            <path
              d="M 20 80 Q 50 20, 80 20" // A simple curve from bottom-left to top-right
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              fill="none"
              strokeDasharray="4 4"
              aria-label="Delivery route"
            />
          </svg>

          {/* Restaurant Location Icon */}
          <div className="absolute flex flex-col items-center" style={{ top: '75%', left: '15%' }} title="Restaurant Location">
            <div className="bg-background p-1.5 rounded-full shadow-lg">
              <Store className="h-7 w-7 text-blue-600" />
            </div>
            <span className="text-xs font-semibold bg-background/80 px-2 py-0.5 rounded mt-1">Restaurant</span>
          </div>

          {/* User's Home Location Icon */}
          <div className="absolute flex flex-col items-center" style={{ top: '15%', left: '75%' }} title="Your Location">
             <div className="bg-background p-1.5 rounded-full shadow-lg">
                <Home className="h-7 w-7 text-red-600" />
             </div>
            <span className="text-xs font-semibold bg-background/80 px-2 py-0.5 rounded mt-1">Your Location</span>
          </div>

          {/* Delivery Person's Live Location Icon */}
          <div className="absolute" style={{ top: '38%', left: '42%' }} title="Driver's Location">
            <div className="relative flex flex-col items-center">
              <div className="absolute -top-7 whitespace-nowrap bg-foreground text-background text-xs font-bold px-2 py-1 rounded-md shadow-lg">
                8 mins away
                <div className="absolute left-1/2 -translate-x-1/2 bottom-[-4px] w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-t-4 border-t-foreground"></div>
              </div>
              <Bike className="h-10 w-10 text-foreground animate-pulse drop-shadow-lg" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LiveTrackingMap;