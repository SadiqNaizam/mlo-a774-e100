import React from 'react';
import { cn } from "@/lib/utils";
import { CheckCircle, ChefHat, Bike, PackageCheck } from 'lucide-react';

type OrderStatus = 'confirmed' | 'preparing' | 'out-for-delivery' | 'delivered';

interface OrderTrackerProps {
  currentStatus?: OrderStatus;
}

const statuses = [
  { name: 'confirmed', label: 'Confirmed', icon: CheckCircle },
  { name: 'preparing', label: 'Preparing', icon: ChefHat },
  { name: 'out-for-delivery', label: 'Out for Delivery', icon: Bike },
  { name: 'delivered', label: 'Delivered', icon: PackageCheck },
] as const;

const OrderTracker: React.FC<OrderTrackerProps> = ({ currentStatus = 'confirmed' }) => {
  console.log('OrderTracker loaded with status:', currentStatus);
  const currentStatusIndex = statuses.findIndex(s => s.name === currentStatus);

  return (
    <div className="w-full max-w-2xl mx-auto py-4 px-2">
      <div className="flex items-start">
        {statuses.map((status, index) => {
          const isCompleted = index < currentStatusIndex;
          const isActive = index === currentStatusIndex;
          const isFuture = index > currentStatusIndex;

          const Icon = status.icon;

          return (
            <React.Fragment key={status.name}>
              <div className="flex flex-col items-center justify-start text-center w-24">
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center transition-colors duration-300",
                    (isCompleted || isActive) ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'
                  )}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <p
                  className={cn(
                    "mt-2 text-xs sm:text-sm font-semibold transition-colors duration-300",
                    isActive ? 'text-green-700' : 'text-gray-600',
                    isFuture && 'text-gray-400'
                  )}
                >
                  {status.label}
                </p>
              </div>

              {index < statuses.length - 1 && (
                <div
                  className={cn(
                    "flex-1 h-1 mt-6 transition-colors duration-500",
                    isCompleted ? 'bg-green-600' : 'bg-gray-200'
                  )}
                />
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default OrderTracker;