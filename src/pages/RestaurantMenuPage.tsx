import React from 'react';
import { Star } from 'lucide-react';

// Import Custom Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import MenuItemCard from '@/components/MenuItemCard';

// Import shadcn/ui Components
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

// Placeholder data for the restaurant menu
const restaurantData = {
  name: "Luigi's Pizzeria",
  rating: 4.8,
  reviews: 320,
  tags: ["Pizza", "Italian", "Top Rated"],
  imageUrl: "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

const menu = {
  "Classic Pizzas": [
    {
      name: "Pepperoni Passion",
      description: "A classic favorite with a generous layer of spicy pepperoni and mozzarella cheese.",
      price: 14.99,
      imageUrl: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Margherita Magic",
      description: "Simple yet elegant, with fresh tomatoes, basil, and mozzarella on a thin crust.",
      price: 12.99,
      imageUrl: "https://images.unsplash.com/photo-1598021680133-eb3a737d93a5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "Sides & Salads": [
    {
      name: "Garlic Bread with Cheese",
      description: "Toasted baguette with garlic butter and melted mozzarella, served with marinara.",
      price: 6.50,
      imageUrl: "https://images.unsplash.com/photo-1626082912423-09755b3b854b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Caesar Salad",
      description: "Crisp romaine lettuce, parmesan cheese, croutons, and a creamy Caesar dressing.",
      price: 8.00,
      imageUrl: "https://images.unsplash.com/photo-1550304943-4f24f54ddde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
  "Beverages": [
    {
        name: "Classic Cola",
        description: "A refreshing can of your favorite cola.",
        price: 2.50,
        imageUrl: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        name: "Mineral Water",
        description: "A crisp, clean bottle of still mineral water.",
        price: 2.00,
        imageUrl: "https://images.unsplash.com/photo-1582215882455-49949c8f2b7a?q=80&w=1939&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
  ]
};

const RestaurantMenuPage = () => {
  console.log('RestaurantMenuPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />

      <main className="flex-grow">
        {/* Restaurant Banner */}
        <section className="relative h-48 md:h-64">
          <img
            src={restaurantData.imageUrl}
            alt={`${restaurantData.name} banner`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </section>

        <div className="container mx-auto px-4 -mt-16 relative z-10">
          {/* Restaurant Info Card */}
          <div className="bg-white p-6 rounded-lg shadow-lg mb-8">
            <h1 className="text-3xl md:text-4xl font-bold">{restaurantData.name}</h1>
            <div className="flex items-center gap-4 mt-2 text-gray-600">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="font-semibold">{restaurantData.rating}</span>
                <span className="text-sm">({restaurantData.reviews} reviews)</span>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {restaurantData.tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
          </div>

          {/* Menu Sections */}
          <div className="space-y-8">
            {Object.entries(menu).map(([category, items]) => (
              <section key={category}>
                <h2 className="text-2xl font-bold border-b pb-2 mb-4">{category}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {items.map((item) => (
                    <MenuItemCard
                      key={item.name}
                      name={item.name}
                      description={item.description}
                      price={item.price}
                      imageUrl={item.imageUrl}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </main>
      
      {/* Sticky Checkout Button for mobile */}
      <div className="sticky bottom-[72px] md:hidden p-4 bg-white/80 backdrop-blur-sm border-t">
          <Button asChild size="lg" className="w-full">
            <Link to="/checkout">View Your Order</Link>
          </Button>
      </div>

      <Footer />
    </div>
  );
};

export default RestaurantMenuPage;