import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Pizza,
  Fish,
  Beef,
  UtensilsCrossed,
  Bean,
  CookingPot,
  Soup,
  Leaf,
  LucideIcon
} from 'lucide-react';

// Define the type for a single cuisine category
interface CuisineCategory {
  name: string;
  slug: string;
  icon: LucideIcon;
}

// Hardcoded list of cuisine categories
const cuisineCategories: CuisineCategory[] = [
  { name: 'Pizza', slug: 'pizza', icon: Pizza },
  { name: 'Sushi', slug: 'sushi', icon: Fish },
  { name: 'Burgers', slug: 'burgers', icon: Beef },
  { name: 'Italian', slug: 'italian', icon: UtensilsCrossed },
  { name: 'Mexican', slug: 'mexican', icon: Bean },
  { name: 'Indian', slug: 'indian', icon: CookingPot },
  { name: 'Chinese', slug: 'chinese', icon: Soup },
  { name: 'Vegan', slug: 'vegan', icon: Leaf },
];

const CuisineCategoryFilter: React.FC = () => {
  console.log('CuisineCategoryFilter loaded');

  return (
    <section aria-labelledby="cuisine-categories-heading" className="w-full py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 id="cuisine-categories-heading" className="text-2xl font-bold tracking-tight text-gray-900 mb-4">
          Categories
        </h2>
        <ScrollArea className="w-full whitespace-nowrap rounded-md">
          <div className="flex w-max space-x-4 p-4">
            {cuisineCategories.map((category) => (
              <Button
                key={category.slug}
                variant="outline"
                className="h-28 w-28 flex-shrink-0 flex-col gap-2 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                asChild
              >
                <Link to={`/restaurant-listing?cuisine=${category.slug}`} className="flex flex-col items-center justify-center">
                  <category.icon className="h-8 w-8 mb-2 text-gray-700" strokeWidth={1.5} />
                  <span className="font-semibold text-sm text-center">{category.name}</span>
                </Link>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default CuisineCategoryFilter;