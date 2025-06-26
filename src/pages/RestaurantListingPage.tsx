import React from 'react';

// Custom Layout Components
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

// Custom UI Components
import RestaurantCard from '@/components/RestaurantCard';

// shadcn/ui Components for Filtering and Sorting
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from '@/components/ui/separator';

// Placeholder data for restaurant cards
const sampleRestaurants = [
  {
    id: '1',
    name: 'Mario\'s Pizzeria',
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=870&auto=format&fit=crop',
    cuisine: ['Pizza', 'Italian'],
    rating: 4.5,
    deliveryTime: '25-35 min',
  },
  {
    id: '2',
    name: 'The Burger Joint',
    imageUrl: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=699&auto=format&fit=crop',
    cuisine: ['Burgers', 'American'],
    rating: 4.2,
    deliveryTime: '20-30 min',
  },
  {
    id: '3',
    name: 'Sushi Palace',
    imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=870&auto=format&fit=crop',
    cuisine: ['Sushi', 'Japanese'],
    rating: 4.8,
    deliveryTime: '35-45 min',
  },
  {
    id: '4',
    name: 'Luigi\'s Pasta House',
    imageUrl: 'https://images.unsplash.com/photo-1598866594240-a_2ea6d34c6b?q=80&w=870&auto=format&fit=crop',
    cuisine: ['Italian', 'Pasta'],
    rating: 4.6,
    deliveryTime: '30-40 min',
  },
  {
    id: '5',
    name: 'Pizza Heaven',
    imageUrl: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=728&auto=format&fit=crop',
    cuisine: ['Pizza', 'Calzones'],
    rating: 4.3,
    deliveryTime: '25-35 min',
  },
  {
    id: '6',
    name: 'Crispy Crust',
    imageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=781&auto=format&fit=crop',
    cuisine: ['Pizza', 'Wings'],
    rating: 4.0,
    deliveryTime: '30-40 min',
  },
];


const RestaurantListingPage = () => {
  console.log('RestaurantListingPage loaded');

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="container flex-grow py-8 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="w-full md:w-1/4 lg:w-1/5">
            <h2 className="text-xl font-bold mb-4">Filters</h2>
            <div className="space-y-6">
              <div>
                <Label htmlFor="sort-by" className="font-semibold">Sort by</Label>
                <Select>
                  <SelectTrigger id="sort-by" className="w-full mt-1">
                    <SelectValue placeholder="Recommended" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recommended">Recommended</SelectItem>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="delivery">Fastest Delivery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Separator />

              <Accordion type="multiple" defaultValue={['cuisine']} className="w-full">
                <AccordionItem value="cuisine">
                  <AccordionTrigger className="font-semibold">Cuisine</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="pizza" defaultChecked />
                      <Label htmlFor="pizza">Pizza</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="burgers" />
                      <Label htmlFor="burgers">Burgers</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="sushi" />
                      <Label htmlFor="sushi">Sushi</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="italian" />
                      <Label htmlFor="italian">Italian</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="price">
                  <AccordionTrigger className="font-semibold">Price Range</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-2">
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price1" />
                      <Label htmlFor="price1">$ (Under $10)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price2" />
                      <Label htmlFor="price2">$$ ($10 - $25)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox id="price3" />
                      <Label htmlFor="price3">$$$ (Over $25)</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="rating">
                  <AccordionTrigger className="font-semibold">Rating</AccordionTrigger>
                  <AccordionContent className="space-y-2 pt-2">
                     <div className="flex items-center space-x-2">
                      <Checkbox id="rating4" />
                      <Label htmlFor="rating4">4 stars & up</Label>
                    </div>
                     <div className="flex items-center space-x-2">
                      <Checkbox id="rating3" />
                      <Label htmlFor="rating3">3 stars & up</Label>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </aside>

          {/* Restaurant Grid */}
          <section className="flex-1">
            <h1 className="text-3xl font-bold mb-1">Pizza Restaurants</h1>
            <p className="text-muted-foreground mb-6">Showing results near you</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sampleRestaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RestaurantListingPage;