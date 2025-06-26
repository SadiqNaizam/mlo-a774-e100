import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom Page-specific Components
import CuisineCategoryFilter from '@/components/CuisineCategoryFilter';
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Icons
import { Search } from 'lucide-react';

// Placeholder data for featured restaurants
const featuredRestaurants = [
  {
    id: '1',
    name: 'The Golden Spoon',
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop',
    cuisine: ['Italian', 'Pasta', 'Pizza'],
    rating: 4.5,
    deliveryTime: '25-35 min',
  },
  {
    id: '2',
    name: 'Burger Bliss',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1998&auto=format&fit=crop',
    cuisine: ['Burgers', 'American', 'Fries'],
    rating: 4.8,
    deliveryTime: '15-25 min',
  },
  {
    id: '3',
    name: 'Sushi Central',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=2070&auto=format&fit=crop',
    cuisine: ['Japanese', 'Sushi'],
    rating: 4.7,
    deliveryTime: '30-40 min',
  },
  {
    id: '4',
    name: 'Taco Town',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1981&auto=format&fit=crop',
    cuisine: ['Mexican', 'Tacos'],
    rating: 4.6,
    deliveryTime: '20-30 min',
  },
];

const HomePage = () => {
  console.log('HomePage loaded');

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070&auto=format&fit=crop')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
                What are you craving?
              </h1>
              <p className="text-lg md:text-xl mb-6">Order from the best local restaurants with ease.</p>
              <div className="flex max-w-2xl mx-auto">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Find a restaurant or a dish..."
                    className="w-full pl-10 h-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="ml-2">Search</Button>
              </div>
            </div>
          </div>
        </section>

        {/* Cuisine Category Filter */}
        <CuisineCategoryFilter />

        {/* Featured Restaurants Section */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                Featured Restaurants
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredRestaurants.map((restaurant) => (
                    <RestaurantCard
                        key={restaurant.id}
                        id={restaurant.id}
                        name={restaurant.name}
                        imageUrl={restaurant.imageUrl}
                        cuisine={restaurant.cuisine}
                        rating={restaurant.rating}
                        deliveryTime={restaurant.deliveryTime}
                    />
                ))}
            </div>
        </section>

        {/* Placeholder for another section using Card */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <Card>
                <CardHeader>
                    <CardTitle>Quick Meals Near You</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">This is a placeholder for another curated section, like quick meal options or special promotions.</p>
                </CardContent>
            </Card>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage;